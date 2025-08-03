import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Loading from "../components/Loading";
import Modal from "../components/Modal";
import MapStyles from '../components/MapStyles.css';

// Create custom red pinhead drop marker for beetle sightings
const createCustomIcon = () => {
  return L.divIcon({
    html: `
      <div style="
        position: relative;
        width: 24px;
        height: 24px;
        background: linear-gradient(135deg, #dc3545 0%, #c82333 100%);
        border-radius: 50% 50% 50% 0;
        transform: rotate(-45deg);
        border: 2px solid white;
        box-shadow: 0 3px 6px rgba(0,0,0,0.4);
        display: flex;
        align-items: center;
        justify-content: center;
      ">
        <div style="
          width: 8px;
          height: 8px;
          background: rgba(255,255,255,0.9);
          border-radius: 50%;
          transform: rotate(45deg);
        "></div>
      </div>
    `,
    className: 'custom-marker',
    iconSize: [24, 24],
    iconAnchor: [12, 24]
  });
};

  const customIcon = createCustomIcon();

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

  const Map = () => {
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
        
        if (data.success && data.data) {
          console.log('Setting sightings from success.data:', data.data);
          setSightings(data.data);
        } else if (data.result === 'success' && data.data) {
          console.log('Setting sightings from result.data:', data.data);
          setSightings(data.data);
        } else if (Array.isArray(data)) {
          console.log('Setting sightings from direct array:', data);
          setSightings(data);
        } else {
          console.log('No valid data found in response');
          setSightings([]);
        }
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
          <h1>Japanese Beetle Sightings Map</h1>
          <p>Report Japanese Beetle sightings in your area to help track their spread and impact on local plants.</p>
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
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            {sightings.map((sighting, index) => {
              console.log('Rendering marker for sighting:', sighting);
              const lat = parseFloat(sighting.latitude);
              const lng = parseFloat(sighting.longitude);
              
              // Skip invalid coordinates
              if (isNaN(lat) || isNaN(lng)) {
                console.log('Skipping invalid coordinates:', sighting);
                return null;
              }
              
              return (
                <Marker 
                  key={`${sighting.locationText}-${sighting.timestamp}-${index}`}
                  position={[lat, lng]}
                  icon={customIcon}
                >
                  <Popup>
                    <div className="popup-content">
                      <h3>{sighting.plantType}</h3>
                      <p><strong>Location:</strong> {extractCity(sighting.locationText)}</p>
                      <p><strong>Quantity:</strong> {sighting.quantity || 'Unknown'}</p>
                      {sighting.notes && <p><strong>Notes:</strong> {sighting.notes}</p>}
                      <p><strong>Reported:</strong> {new Date(sighting.timestamp).toLocaleDateString()}</p>
                    </div>
                  </Popup>
                </Marker>
              );
            })}
          </MapContainer>
          {!mapLoading && sightings.length === 0 && (
            <div className="no-sightings">
              <p>No sightings reported yet. Be the first to report a Japanese Beetle sighting!</p>
            </div>
          )}
        </div>

        <div className="form-section">
          <div className="report-form">
            <h2>Report a Sighting</h2>
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
                <label htmlFor="quantity">Quantity *</label>
                <select
                  id="quantity"
                  name="quantity"
                  value={formData.quantity}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select quantity</option>
                  <option value="1-5">1-5 beetles</option>
                  <option value="6-20">6-20 beetles</option>
                  <option value="21-50">21-50 beetles</option>
                  <option value="51-100">51-100 beetles</option>
                  <option value="100+">100+ beetles</option>
                </select>
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

export default Map; 