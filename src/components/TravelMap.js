import { useState, useCallback } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { Paper, Typography, Box } from '@mui/material';

const TravelMap = () => {
  const [map, setMap] = useState(null);

  const locations = [
    {
      name: "London, England",
      position: { lat: 51.5074, lng: -0.1278 },
    },
    {
      name: "Tokyo, Japan",
      position: { lat: 35.6762, lng: 139.6503 },
    },
    {
      name: "Washington, DC",
      position: { lat: 38.9072, lng: -77.0369 },
    }
  ];

  const mapStyles = {
    height: "400px",
    width: "100%",
    borderRadius: "12px",
  };

  const defaultCenter = {
    lat: 30, lng: 0
  };

  const onLoad = useCallback((mapInstance) => {
    setMap(mapInstance);
    const bounds = new window.google.maps.LatLngBounds();
    locations.forEach(location => {
      bounds.extend(location.position);
    });
    mapInstance.fitBounds(bounds);
  }, []);

  const markerIcon = {
    path: "M-20,0a20,20 0 1,0 40,0a20,20 0 1,0 -40,0",
    fillColor: "#4A4E69",
    fillOpacity: 1,
    strokeColor: "#FFFFFF",
    strokeWeight: 2,
    scale: 0.4,
  };

  return (
    <Paper elevation={0} sx={{ p: 3, mt: 4 }}>
      <Typography variant="h5" gutterBottom sx={{ mb: 3 }}>
        Places I've Visited
      </Typography>
      <LoadScript 
        googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}
        loadingElement={
          <Box sx={{ height: "400px", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Typography>Loading map...</Typography>
          </Box>
        }
      >
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={2}
          center={defaultCenter}
          onLoad={onLoad}
          options={{
            styles: [
              {
                featureType: "all",
                elementType: "geometry",
                stylers: [{ color: "#F5F1E3" }]
              },
              {
                featureType: "water",
                elementType: "geometry",
                stylers: [{ color: "#C9ADA7" }]
              },
              {
                featureType: "administrative",
                elementType: "labels",
                stylers: [{ color: "#4A4E69" }]
              }
            ],
            mapTypeControl: false,
            streetViewControl: false
          }}
        >
          {locations.map((location, index) => (
            <Marker
              key={index}
              position={location.position}
              title={location.name}
              icon={markerIcon}
            />
          ))}
        </GoogleMap>
      </LoadScript>
      <Box sx={{ mt: 3, display: 'flex', flexWrap: 'wrap', gap: 2 }}>
        {locations.map((location, index) => (
          <Typography 
            key={index}
            variant="body2"
            sx={{
              backgroundColor: 'background.paper',
              color: 'primary.main',
              px: 2,
              py: 1,
              borderRadius: '16px',
              border: '1px solid',
              borderColor: 'primary.light'
            }}
          >
            {location.name}
          </Typography>
        ))}
      </Box>
    </Paper>
  );
};

export default TravelMap; 