const CoordinateForm = function ({ coordinates, searchSuitability }) {
    console.log(coordinates);
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(coordinates);
        const lat = event.target.Lat.value;
        const lng = event.target.Lng.value;
        searchSuitability(lat, lng);
    };
    return (
        <>
            <div>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="Lat">Lat</label>
                    <input type="text" name="Lat" value={coordinates[0].lat} />
                    <label htmlFor="Lng">Lng</label>
                    <input type="text" name="Lng" value={coordinates[0].lng} />
                    <input type="submit" value="Submit" />
                </form>
            </div>
        </>
    );
};

export default CoordinateForm;
