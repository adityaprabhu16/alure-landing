# Japanese Beetle Sightings Map

This is a React component that allows users to report Japanese Beetle sightings and view them on an interactive map.

## Features

- **Interactive Map**: Uses Leaflet.js with OpenStreetMap tiles to display sightings
- **Report Form**: Users can submit new sightings with location, quantity, plant type, and optional notes
- **Geocoding**: Uses OpenCage Data API to convert location text to coordinates
- **Google Sheets Integration**: Stores all data in Google Sheets via Apps Script
- **Real-time Updates**: Map refreshes automatically when new sightings are submitted

## How to Use

1. **Navigate to the Map**: Click on "Map" in the navigation menu
2. **View Existing Sightings**: The map displays all reported sightings as markers
3. **Report a New Sighting**: 
   - Fill out the form on the right side
   - Enter location (e.g., "Chicago, IL" or "123 Main St, Minneapolis, MN")
   - Select quantity of beetles observed
   - Enter the plant type affected
   - Add optional notes and email
   - Click "Report Sighting"

## Technical Details

### APIs Used
- **OpenCage Data**: For geocoding location text to coordinates
- **Google Sheets Apps Script**: For data storage and retrieval
- **OpenStreetMap**: For map tiles

### Data Structure
Each sighting includes:
- Location text
- Latitude/Longitude coordinates
- Quantity of beetles
- Plant type affected
- Optional notes
- Optional email
- Timestamp

### Form Validation
- Location is required and must be geocodable
- Quantity is required (dropdown selection)
- Plant type is required
- Email is optional but validated if provided

## Setup Requirements

1. **OpenCage API Key**: Already configured in the component
2. **Google Sheets Script**: Must be deployed and accessible
3. **React Router**: For navigation
4. **Leaflet.js**: For map functionality

## Responsive Design

The map page is fully responsive and works on:
- Desktop computers
- Tablets
- Mobile phones

The layout automatically adjusts from a side-by-side view on desktop to a stacked view on mobile devices.

## Error Handling

- Geocoding errors are caught and displayed to users
- Network errors are handled gracefully
- Form validation prevents invalid submissions
- Loading states provide user feedback

## Future Enhancements

Potential improvements could include:
- Filtering sightings by date range
- Clustering markers for better performance
- Export functionality for data analysis
- User authentication for verified reports
- Photo uploads for sightings 