import React, { useState } from 'react';
import { GoogleMap, withScriptjs, withGoogleMap, Marker, InfoWindow } from 'react-google-maps';
import mapStyles from './mapStyles';

function Map() {
  const [selectedMarker, setSelectedMarker] = useState(null);
  const [selectedMetroMarker, setSelectedMetroMarker] = useState(null);

  return (
    <GoogleMap
      defaultZoom={14.9}
      defaultCenter={{ lat: 50.44738154786847, lng: 30.59736203935843 }}
      defaultOptions={{ styles: mapStyles }}
    >
      <Marker
        position={{ lat: 50.45152519123434, lng: 30.598138632468688 }}
        onClick={() => {
          setSelectedMetroMarker(true);
        }}
        icon={{
          url: '/metro.svg',
          scaledSize: new window.google.maps.Size(25, 25),
        }}
      />
      <Marker
        position={{ lat: 50.44338154786847, lng: 30.59736203935843 }}
        onClick={() => {
          setSelectedMarker(true);
        }}
        icon={{
          url: '/bluemarker.svg',
          scaledSize: new window.google.maps.Size(50, 50),
        }}
      />
      {selectedMarker && (
        <InfoWindow
          position={{ lat: 50.44338154786847, lng: 30.59736203935843 }}
          onCloseClick={() => {
            setSelectedMarker(null);
          }}
        >
          <div>«Dr.Krolyk» Центр стоматології Доктора Кролика</div>
        </InfoWindow>
      )}
      {selectedMetroMarker && (
        <InfoWindow
          position={{ lat: 50.45152519123434, lng: 30.598138632468688 }}
          onCloseClick={() => {
            setSelectedMetroMarker(null);
          }}
        >
          <div>метро Лівобережна (м.Левобережная)</div>
        </InfoWindow>
      )}
    </GoogleMap>
  );
}

const WrappedMap = withScriptjs(withGoogleMap(Map));

function MapComponent() {
  return (
    // <div style={{ width: "100vw", height: "100vh" }}>
    <div style={{ width: '600px', height: '500px' }}>
      <WrappedMap
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_KEY}`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `100%` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    </div>
  );
}

export default MapComponent;
