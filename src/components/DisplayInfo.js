import DisplayList from "./DisplayList";
const DisplayInfo = ({ userSelections }) => {
    console.log(userSelections);
    const displaySoil = userSelections.map((eachCoordinate, index) => {
        console.log(eachCoordinate.lat);
        return (
            <DisplayList
                lat={eachCoordinate.lat}
                lng={eachCoordinate.lng}
                soil={eachCoordinate.soil}
                key={index}
            />
        );
    });

    return (
        <>
            <table>
                <tr>
                    <th>Lat</th>
                    <th>Lng</th>
                    <th>Soil Moisture</th>
                </tr>
                {displaySoil}
            </table>
        </>
    );
};

export default DisplayInfo;
