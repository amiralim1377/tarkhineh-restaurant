import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect } from "react";

function ContactUsMapContainer({ center }) {
  function ResetMapSize() {
    const map = useMap();

    useEffect(() => {
      map.invalidateSize();
    }, [map]);

    return null;
  }

  return (
    <MapContainer
      center={center}
      zoom={14}
      style={{ height: "200px" }}
      scrollWheelZoom={false}
    >
      <ResetMapSize />
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={center}>
        <Popup>موقعیت شعبه</Popup>
      </Marker>
    </MapContainer>
  );
}

export default ContactUsMapContainer;
