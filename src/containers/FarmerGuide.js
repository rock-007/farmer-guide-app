import React, { useState } from "react";
import "./FarmerGuide.css";
import CoordinateForm from "../components/CoordinateForm";
import {
    GoogleMap,
    useLoadScript,
    Marker,
    InfoWindow,
} from "@react-google-maps/api";
const FarmerGuide = function () {
    const [marker, setMarkers] = useState({ lat: null, lng: null });
    const libraries = ["places"];
    const containerStyle = {
        position: "static",
        margin: "34px",
        width: "60vw",
        height: "60vh",
    };
    const options = {};
    const handleMap = function (event) {
        const lat = event.latLng.lat();
        const lng = event.latLng.lng();
        setMarkers({ lat, lng });
    };
    const center = {
        lat: 55.953251,
        lng: -3.188267,
    };
    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: process.env.React_APP_Google_MAPS_API_KEY,
        libraries,
    });
    if (loadError) return "Error loading Maps";
    if (!isLoaded) return "Loading Maps";

    const searchSuitability = (lat, lng) => {
        console.log(lat, lng);
    };

    return (
        <>
            <div className="map">
                <GoogleMap
                    mapContainerStyle={containerStyle}
                    zoom={12}
                    center={center}
                    options={options}
                    onClick={handleMap}
                />
                {/* Child components, such as markers, info windows, etc. */}
            </div>
            <CoordinateForm
                coordinates={marker}
                searchSuitability={searchSuitability}
            />
        </>
    );
};

export default FarmerGuide;
