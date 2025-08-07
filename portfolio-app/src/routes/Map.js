import React, { useState, useEffect, useRef } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import 'leaflet.heat';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Loading from "../components/Loading";
import Modal from "../components/Modal";
import MapStyles from '../components/MapStyles.css';

// HeatMapLayer component to handle heat map rendering
const HeatMapLayer = ({ sightings, zoomLevel }) => {
  const map = useMap();
  const heatLayerRef = useRef(null);

  useEffect(() => {
    if (!sightings || sightings.length === 0) return;

    // Remove existing heat layer
    if (heatLayerRef.current) {
      map.removeLayer(heatLayerRef.current);
    }

    // Aggregate sightings by geographic areas with zoom-aware scaling
    const aggregatedDataMap = new Map();
    
    // Calculate grid size and area scaling based on zoom level
    const gridSize = zoomLevel < 8 ? 0.5 : 0.1; // Larger grid when zoomed out
    const areaScaling = zoomLevel < 8 ? 1 : 0.2; // Scale down intensity for smaller areas
    
    sightings.forEach(sighting => {
      const lat = parseFloat(sighting.latitude);
      const lng = parseFloat(sighting.longitude);
      
      if (isNaN(lat) || isNaN(lng)) return;
      
      // Create a grid key based on zoom level for aggregation
      const gridLat = Math.round(lat / gridSize) * gridSize;
      const gridLng = Math.round(lng / gridSize) * gridSize;
      const gridKey = `${gridLat},${gridLng}`;
      
      if (!aggregatedDataMap.has(gridKey)) {
        aggregatedDataMap.set(gridKey, {
          lat: gridLat,
          lng: gridLng,
          totalBeetles: 0,
          sightingCount: 0,
          maxIntensity: 0,
          areaSize: gridSize * gridSize // Approximate area size
        });
      }
      
      const area = aggregatedDataMap.get(gridKey);
      area.sightingCount++;
      
      // Convert quantity to estimated beetle count
      let beetleCount = 0;
      if (sighting.quantity) {
        switch (sighting.quantity) {
          case '1-5':
            beetleCount = 3; // Average of range
            break;
          case '6-20':
            beetleCount = 13; // Average of range
            break;
          case '21-50':
            beetleCount = 35; // Average of range
            break;
          case '51-100':
            beetleCount = 75; // Average of range
            break;
          case '100+':
            beetleCount = 150; // Conservative estimate for 100+
            break;
          default:
            beetleCount = 3;
        }
      }
      
      area.totalBeetles += beetleCount;
      area.maxIntensity = Math.max(area.maxIntensity, beetleCount);
    });

    // Convert aggregated data to heat map format with zoom-aware intensity
    const heatData = Array.from(aggregatedDataMap.values()).map(area => {
      // Calculate beetles per area unit (normalized density)
      const beetlesPerUnit = area.totalBeetles / area.areaSize;
      
      // Base intensity based on density, scaled by zoom level
      const baseIntensity = Math.min(beetlesPerUnit * areaScaling, 8);
      
      // Density multiplier for areas with multiple sightings (capped lower for zoomed in view)
      const maxDensityMultiplier = zoomLevel < 8 ? 2 : 1.5;
      const densityMultiplier = Math.min(area.sightingCount / 3, maxDensityMultiplier);
      
      // Final intensity with zoom-aware scaling
      const intensity = baseIntensity * densityMultiplier;
      
      return [area.lat, area.lng, intensity];
    });

    if (heatData.length > 0) {
      // Create heat map layer with zoom-aware settings
      const maxIntensity = zoomLevel < 8 ? 10 : 6; // Lower max intensity when zoomed in
      
      heatLayerRef.current = L.heatLayer(heatData, {
        radius: zoomLevel < 8 ? 60 : 25,
        blur: zoomLevel < 8 ? 40 : 15,
        maxZoom: 10,
        gradient: {
          0.0: '#00ff00',   // Green for low intensity
          0.2: '#90ee90',   // Light green
          0.4: '#ffff00',   // Yellow for medium intensity
          0.6: '#ff8000',   // Orange for high intensity
          0.8: '#ff4000',   // Dark orange
          1.0: '#ff0000'    // Red for very high intensity
        },
        maxIntensity: maxIntensity
      });
      
      map.addLayer(heatLayerRef.current);
    }

    return () => {
      if (heatLayerRef.current) {
        map.removeLayer(heatLayerRef.current);
      }
    };
  }, [sightings, map, zoomLevel]);

  return null;
};

  // Function to extract city from full address for privacy
  const extractCity = (fullAddress) => {
    if (!fullAddress) return '';
    
    // Split by commas and get the last part (usually city, state)
    const parts = fullAddress.split(',').map(part => part.trim());
    
    // If we have multiple parts, return the city/state part
    if (parts.length > 1) {
      // Return the second-to-last part (city) and last part (state)
      return parts.slice(-2).join(', ');
    }
    
    // If it's just one part, return it as is
    return parts[0];
  };

  const MapComponent = () => {
  const [formData, setFormData] = useState({
    locationText: '',
    quantity: '',
    plantType: '',
    notes: '',
    email: ''
  });
  const [sightings, setSightings] = useState([]);
  const [loading, setLoading] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState('success');
  const [modalMessage, setModalMessage] = useState('');
  const [mapLoading, setMapLoading] = useState(true);
  const [mapCenter, setMapCenter] = useState([39.8283, -98.5795]); // Center of USA
  const [locationSuggestions, setLocationSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(4);

  const OPENCAGE_API_KEY = '6469ce11acf54373bec002f8a0ad4856';
  const GOOGLE_SHEETS_URL = 'https://script.google.com/macros/s/AKfycbxuxCWa3CgAi6Haq__l4bC1aWiRPawkh1f8AghuMJwHYJGD2I7kFrXJnWSjQZnaTcQm/exec';

  // Fetch existing sightings on component mount
  useEffect(() => {
    fetchSightings();
  }, []);

  const fetchSightings = async () => {
    try {
      setMapLoading(true);
      console.log('Fetching sightings from:', GOOGLE_SHEETS_URL);
      const response = await fetch(GOOGLE_SHEETS_URL);
      console.log('GET response status:', response.status);
      console.log('GET response ok:', response.ok);
      
      if (response.ok) {
        const data = await response.json();
        console.log('GET response data:', data);
        
        let sightingsData = [];
        
        if (data.success && data.data) {
          console.log('Setting sightings from success.data:', data.data);
          sightingsData = data.data;
        } else if (data.result === 'success' && data.data) {
          console.log('Setting sightings from result.data:', data.data);
          sightingsData = data.data;
        } else if (Array.isArray(data)) {
          console.log('Setting sightings from direct array:', data);
          sightingsData = data;
        } else {
          console.log('No valid data found in response');
          sightingsData = [];
        }
        
        // Clean and validate the sightings data
        const cleanedSightings = sightingsData.map(sighting => {
          // Check if quantity field contains a date instead of count
          let quantity = sighting.quantity;
          if (quantity) {
            const datePattern = /^\d{1,2}\/\d{1,2}\/\d{4}|\d{4}-\d{2}-\d{2}/;
            if (datePattern.test(quantity)) {
              console.warn('Found quantity field with date value, setting to Unknown:', quantity);
              quantity = 'Unknown';
            }
          }
          
          return {
            ...sighting,
            quantity: quantity || 'Unknown'
          };
        });
        
        console.log('Cleaned sightings data:', cleanedSightings);
        setSightings(cleanedSightings);
      } else {
        console.error('Failed to fetch sightings:', response.status);
        // If GET endpoint doesn't exist, we'll just show an empty map
        setSightings([]);
      }
    } catch (error) {
      console.error('Error fetching sightings:', error);
      // If there's an error, we'll just show an empty map
      setSightings([]);
    } finally {
      setMapLoading(false);
    }
  };

  const geocodeLocation = async (locationText) => {
    try {
      console.log('Geocoding location:', locationText);
      const geocodeUrl = `https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(locationText)}&key=${OPENCAGE_API_KEY}`;
      console.log('Geocoding URL:', geocodeUrl);
      
      const response = await fetch(geocodeUrl);
      console.log('Geocoding response status:', response.status);
      
      const data = await response.json();
      console.log('Geocoding response data:', data);
      
      if (data.results && data.results.length > 0) {
        const { lat, lng } = data.results[0].geometry;
        console.log('Found coordinates:', { latitude: lat, longitude: lng });
        return { latitude: lat, longitude: lng };
      }
      throw new Error('Location not found');
    } catch (error) {
      console.error('Geocoding error:', error);
      throw error;
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // If location field is being updated, get suggestions
    if (name === 'locationText' && value.length > 2) {
      getLocationSuggestions(value);
    } else if (name === 'locationText' && value.length <= 2) {
      setLocationSuggestions([]);
      setShowSuggestions(false);
    }
  };

  const getLocationSuggestions = async (query) => {
    try {
      const response = await fetch(
        `https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(query)}&key=${OPENCAGE_API_KEY}&limit=5`
      );
      const data = await response.json();
      
      if (data.results) {
        const suggestions = data.results.map(result => ({
          display: result.formatted,
          value: result.formatted
        }));
        setLocationSuggestions(suggestions);
        setShowSuggestions(true);
      }
    } catch (error) {
      console.error('Error fetching location suggestions:', error);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setFormData(prev => ({
      ...prev,
      locationText: suggestion.value
    }));
    setShowSuggestions(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form submitted with data:', formData);
    console.log('Setting loading to true - Loading component should appear');
    setLoading(true);
    setModalOpen(false);

    try {
      // Validate quantity field
      if (!formData.quantity || formData.quantity === '') {
        setModalType('error');
        setModalMessage('Please select a quantity for your sighting.');
        setModalOpen(true);
        setLoading(false);
        return;
      }
      
      // Validate that quantity is one of the expected values
      const validQuantities = ['1-5', '6-20', '21-50', '51-100', '100+'];
      if (!validQuantities.includes(formData.quantity)) {
        console.warn('Invalid quantity value:', formData.quantity);
        setModalType('error');
        setModalMessage('Please select a valid quantity for your sighting.');
        setModalOpen(true);
        setLoading(false);
        return;
      }

      // Geocode the location
      const coordinates = await geocodeLocation(formData.locationText);
      
      // Prepare data for Google Sheets
      const submissionData = {
        locationText: formData.locationText,
        latitude: coordinates.latitude,
        longitude: coordinates.longitude,
        quantity: formData.quantity,
        plantType: formData.plantType,
        notes: formData.notes,
        email: formData.email,
        timestamp: new Date().toISOString()
      };

      // Submit to Google Sheets using form data to avoid CORS preflight
      const urlParams = new URLSearchParams();
      urlParams.append('locationText', submissionData.locationText);
      urlParams.append('latitude', submissionData.latitude);
      urlParams.append('longitude', submissionData.longitude);
      urlParams.append('quantity', submissionData.quantity);
      urlParams.append('plantType', submissionData.plantType);
      urlParams.append('notes', submissionData.notes);
      urlParams.append('email', submissionData.email);
      urlParams.append('timestamp', submissionData.timestamp);

      console.log('Submitting data to:', GOOGLE_SHEETS_URL);
      console.log('Form data:', urlParams.toString());
      console.log('Quantity being submitted:', submissionData.quantity);

      const response = await fetch(GOOGLE_SHEETS_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: urlParams.toString()
      });

      console.log('Response status:', response.status);
      console.log('Response ok:', response.ok);

      if (response.ok) {
        const result = await response.json();
        if (result.result === 'success') {
          setModalType('success');
          setModalMessage('Your Japanese Beetle sighting has been successfully reported and added to the map!');
          setModalOpen(true);
          setFormData({
            locationText: '',
            quantity: '',
            plantType: '',
            notes: '',
            email: ''
          });
          // Refresh sightings
          await fetchSightings();
        } else {
          setModalType('error');
          setModalMessage('There was an error submitting your report. Please try again.');
          setModalOpen(true);
        }
      } else {
        setModalType('error');
        setModalMessage('There was an error submitting your report. Please try again.');
        setModalOpen(true);
      }
    } catch (error) {
      console.error('Submission error:', error);
      setModalType('error');
      setModalMessage('There was an error submitting your report. Please try again.');
      setModalOpen(true);
    } finally {
      console.log('Setting loading to false - Loading component should disappear');
      setLoading(false);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="map-page">
        <div className="map-header">
          <h1>Japanese Beetle Infestation Heat Map</h1>
          <p>Report Japanese Beetle sightings to help track infestation patterns. The heat map shows aggregated data to protect individual privacy while highlighting problem areas.</p>
        </div>

      <div className="map-container">
        <div className="map-section">
          {mapLoading && (
            <div className="map-loading">
              <div className="loading-spinner"></div>
              <p>Loading sightings...</p>
            </div>
          )}
          <MapContainer 
            center={mapCenter} 
            zoom={4} 
            style={{ height: '100%', width: '100%' }}
            onZoomEnd={(e) => setZoomLevel(e.target.getZoom())}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <HeatMapLayer sightings={sightings} zoomLevel={zoomLevel} />
          </MapContainer>
          
          {/* Heat Map Legend */}
          {!mapLoading && sightings.length > 0 && (
            <div className="heat-map-legend">
              <h4>Infestation Density</h4>
              <div className="legend-items">
                <div className="legend-item">
                  <div className="legend-color" style={{ backgroundColor: '#00ff00' }}></div>
                  <span>Low Density</span>
                </div>
                <div className="legend-item">
                  <div className="legend-color" style={{ backgroundColor: '#90ee90' }}></div>
                  <span>Light Density</span>
                </div>
                <div className="legend-item">
                  <div className="legend-color" style={{ backgroundColor: '#ffff00' }}></div>
                  <span>Medium Density</span>
                </div>
                <div className="legend-item">
                  <div className="legend-color" style={{ backgroundColor: '#ff8000' }}></div>
                  <span>High Density</span>
                </div>
                <div className="legend-item">
                  <div className="legend-color" style={{ backgroundColor: '#ff4000' }}></div>
                  <span>Very High Density</span>
                </div>
                <div className="legend-item">
                  <div className="legend-color" style={{ backgroundColor: '#ff0000' }}></div>
                  <span>Critical Density</span>
                </div>
              </div>
              <small style={{ color: '#666', fontSize: '0.7rem', marginTop: '8px', display: 'block' }}>
                Density scales with zoom level for better detail
              </small>
            </div>
          )}
          
          {!mapLoading && sightings.length === 0 && (
            <div className="no-sightings">
              <p>No sightings reported yet. Be the first to report a Japanese Beetle sighting!</p>
            </div>
          )}
        </div>

        <div className="form-section">
          <div className="report-form">
            <h2>Report a Sighting</h2>
            <p className="privacy-notice">
              <strong>Privacy First:</strong> Your exact location is generalized on the heat map to protect your privacy while still helping track infestation patterns.
            </p>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="locationText">Location *</label>
                <div className="location-input-container">
                  <input
                    type="text"
                    id="locationText"
                    name="locationText"
                    value={formData.locationText}
                    onChange={handleInputChange}
                    onFocus={() => formData.locationText.length > 2 && setShowSuggestions(true)}
                    onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
                    placeholder="Start typing to see suggestions..."
                    required
                  />
                  {showSuggestions && locationSuggestions.length > 0 && (
                    <div className="location-suggestions">
                      {locationSuggestions.map((suggestion, index) => (
                        <div
                          key={index}
                          className="suggestion-item"
                          onClick={() => handleSuggestionClick(suggestion)}
                        >
                          {suggestion.display}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                <small className="privacy-note">
                  Note: Only the city name will be visible to other users for privacy.
                </small>
              </div>

              <div className="form-group">
                <label htmlFor="quantity">Number of Beetles *</label>
                <select
                  id="quantity"
                  name="quantity"
                  value={formData.quantity}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select number of beetles</option>
                  <option value="1-5">1-5 beetles</option>
                  <option value="6-20">6-20 beetles</option>
                  <option value="21-50">21-50 beetles</option>
                  <option value="51-100">51-100 beetles</option>
                  <option value="100+">100+ beetles</option>
                </select>
                <small className="privacy-note">
                  Select the approximate number of Japanese Beetles you observed.
                </small>
              </div>

              <div className="form-group">
                <label htmlFor="plantType">Plant Type *</label>
                <input
                  type="text"
                  id="plantType"
                  name="plantType"
                  value={formData.plantType}
                  onChange={handleInputChange}
                  placeholder="e.g., Rose bush, Grape vine, Linden tree"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="notes">Notes (Optional)</label>
                <textarea
                  id="notes"
                  name="notes"
                  value={formData.notes}
                  onChange={handleInputChange}
                  placeholder="Additional details about the sighting..."
                  rows="3"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email (Optional)</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="your.email@example.com"
                />
                <small className="privacy-note">
                  Note: Your email will not be displayed on the map for privacy.
                </small>
              </div>

              <button 
                type="submit" 
                className="submit-btn"
                disabled={loading}
              >
                {loading ? 'Submitting...' : 'Report Sighting'}
              </button>
            </form>
          </div>
        </div>
      </div>
      </div>
      <Footer />
      
      {/* Loading overlay */}
      {loading && <Loading zIndex={2000} />}
      
      {/* Success/Error Modal */}
      <Modal 
        isOpen={modalOpen}
        type={modalType}
        message={modalMessage}
        onClose={() => setModalOpen(false)}
      />
    </div>
  );
};

export default MapComponent; 