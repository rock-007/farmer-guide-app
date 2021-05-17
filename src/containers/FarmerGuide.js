import React, { useState, useEffect } from "react";
import "./FarmerGuide.css";
import CoordinateForm from "../components/CoordinateForm";
import DisplayInfo from "../components/DisplayInfo";
import {
    GoogleMap,
    useLoadScript,
    Marker,
    InfoWindow,
} from "@react-google-maps/api";
const FarmerGuide = function () {
    const [marker, setMarkers] = useState([{ lat: null, lng: null }]);
    const [userSelections, setUserSelections] = useState([]);
    const libraries = ["places"];
    const containerStyle = {
        position: "static",
        margin: "34px",
        width: "60vw",
        height: "60vh",
    };
    useEffect(() => userSelections);
    const options = {};
    const handleMap = function (event) {
        const lat = event.latLng.lat();
        const lng = event.latLng.lng();
        console.log(lat);
        console.log(marker);
        setMarkers([{ lat: lat, lng: lng, soil: null }]);
        console.log(marker);
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
        console.log(process.env.REACT_APP_GETAMBEE_API_KEY);

        fetch(
            `https://api.ambeedata.com/soil/latest/by-lat-lng?lat=${lat}&lng=${lng}`,
            {
                method: "GET",
                headers: {
                    "x-api-key": "dF0pEYr94FaP5U12xBEF2xj9DOgzw6L5MCGF5OX1",
                    "Content-type": "application/json",
                    credentials: "include",
                    "Access-Control-Allow-Origin": "*",
                },
            }
        )
            .then((response) => response.json())
            .then((result) => {
                //console.log(result.data[0]["soil_moisture"]);
                const setSoil = [...marker];
                setSoil[0]["soil"] = result.data[0]["soil_moisture"];
                //setSoil[0]["soil"] = 55;

                console.log(setSoil);

                setUserSelections([...userSelections, ...setSoil]);
                console.log(userSelections);
                // setUserSelections(...userSelections, function(marker, result)  {
                //     console.log(result);
                //     marker[0]["soil"] = result.data;
                //     console.log(marker);
                //     return marker;
                // });
                //updateSelection(marker,result)
            })
            .catch((err) => {
                console.error(err);
            });
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
            <DisplayInfo userSelections={userSelections} />
        </>
    );
};

export default FarmerGuide;
