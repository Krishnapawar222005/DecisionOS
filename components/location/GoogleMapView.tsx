"use client";

import {
  GoogleMap,
  LoadScript,
  Marker,
} from "@react-google-maps/api";

interface GoogleMapViewProps {
  lat: number;
  lng: number;
}

const containerStyle = {
  width: "100%",
  height: "500px",
};

const libraries: ("places")[] = ["places"];

export default function GoogleMapView({
  lat,
  lng,
}: GoogleMapViewProps) {
  return (
    <div className="rounded-3xl border border-border bg-card p-6 shadow-sm">
      <LoadScript
        googleMapsApiKey={
          process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!
        }
        libraries={libraries}
      >
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={{ lat, lng }}
          zoom={14}
          options={{
            streetViewControl: false,
            mapTypeControl: false,
            fullscreenControl: true,
          }}
        >
          <Marker position={{ lat, lng }} />
        </GoogleMap>
      </LoadScript>
    </div>
  );
}