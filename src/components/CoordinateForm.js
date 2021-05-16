const CoordinateForm = function ({ coordinates, searchSuitability }) {
    console.log(coordinates.lat);
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(event.target.Lng.value);
        const lat = event.target.Lat.value;
        const lng = event.target.Lng.value;
        searchSuitability(lat, lng);
    };
    return (
        <>
            <div>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="Lat">Lat</label>
                    <input type="text" name="Lat" value={coordinates.lat} />
                    <label htmlFor="Lng">Lng</label>
                    <input type="text" name="Lng" value={coordinates.lng} />
                    <input type="submit" value="Submit" />
                </form>
            </div>
        </>
    );
};

export default CoordinateForm;
