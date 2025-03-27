import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useFormContext } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { setPosition } from "../../Slice/mapSlice/mapSlice";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";

function FranchiseMapContainer() {
  const { setValue } = useFormContext();
  const dispatch = useDispatch();
  const position = useSelector((state) => state.map.position);

  function LocationMarker() {
    useMapEvents({
      click(e) {
        dispatch(setPosition(e.latlng));
        setValue("lat", e.latlng.lat.toFixed(3));
        setValue("lng", e.latlng.lng.toFixed(3));
        console.log("Clicked location:", e.latlng);
      },
    });

    return position === null ? null : (
      <Marker position={position}>
        <Popup>
          موقعیت ملک متقاضی : <br />
          Latitude: {position.lat.toFixed(3)}, Longitude:{" "}
          {position.lng.toFixed(3)}
        </Popup>
      </Marker>
    );
  }

  return (
    <div className="relative z-10 hidden h-56 w-full max-w-md bg-teal-500 md:block">
      <MapContainer
        center={{ lat: 35.7219, lng: 51.3347 }}
        zoom={10}
        scrollWheelZoom={true}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <LocationMarker />
      </MapContainer>
    </div>
  );
}

export default FranchiseMapContainer;
