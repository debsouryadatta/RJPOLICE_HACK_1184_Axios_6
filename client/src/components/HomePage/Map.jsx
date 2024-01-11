import React, { useState, useRef, useCallback } from "react";
import {
  GoogleMap,
  useLoadScript,
  Autocomplete,
  MarkerF,
  InfoWindowF,
} from "@react-google-maps/api";
import { Input } from "@material-tailwind/react";

const markers = [
  {
    id: 1,
    name: "Qobustan",
    position: { lat: 40.0709493, lng: 49.3694411 },
  },
  {
    id: 2,
    name: "Sumqayit",
    position: { lat: 40.5788843, lng: 49.5485073 },
  },
  {
    id: 3,
    name: "Baku",
    position: { lat: 40.3947365, lng: 49.6898045 },
  },
];

const Map = ({markers}) => {
  const { isLoaded } = useLoadScript({
    // googleMapsApiKey: import.meta.env.VITE_MAP_API_KEY,
    libraries: ["places"],
  });

  const [activeMarker, setActiveMarker] = useState(null);
  const [center, setCenter] = useState({ lat: 23.829321, lng: 91.277847 });
  const autocompleteRef = useRef(null);

  const handleActiveMarker = (marker) => {
    if (marker === activeMarker) {
      return;
    }
    setActiveMarker(marker);
  };

  const onPlaceChanged = useCallback(() => {
    if (autocompleteRef.current) {
      const place = autocompleteRef.current.getPlace();

      if (place.geometry) {
        const lat = place.geometry.location.lat();
        const lng = place.geometry.location.lng();
        setCenter({ lat, lng });
      }
    }
  }, []);

  return (
    <>
      <div className="container w-[90%]">
        <div style={{ height: "90vh", width: "100%" }}>
          {isLoaded ? (
            <div>
              <div>
                <Autocomplete
                  onLoad={(autocomplete) => {
                    autocompleteRef.current = autocomplete;
                  }}
                  onPlaceChanged={onPlaceChanged}
                >
                  <Input type="text" color="black" label="Location" />
                </Autocomplete>
              </div>

              <div className="mt-10">
                <GoogleMap
                  center={center}
                  zoom={10}
                  onClick={() => setActiveMarker(null)}
                  mapContainerStyle={{ width: "100%", height: "90vh" }}
                >
                  {markers.map(({ _id, cameraModel, cameraDMSLocation, address }) => (
                    <MarkerF
                      key={_id}
                      position={cameraDMSLocation}
                      onClick={() => handleActiveMarker(_id)}
                    >
                      {activeMarker === _id ? (
                        <InfoWindowF onCloseClick={() => setActiveMarker(null)}>
                          <div>
                            <p>{cameraModel}</p>
                            <p>{address}</p>
                          </div>
                        </InfoWindowF>
                      ) : null}
                    </MarkerF>
                  ))}
                </GoogleMap>
              </div>
            </div>
          ) : (
            <div>Loading...</div>
          )}
        </div>
      </div>
    </>
  );
};

export default Map;
