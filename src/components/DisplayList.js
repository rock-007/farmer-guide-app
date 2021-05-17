const DisplayList = ({ lat, lng, soil }) => {
    console.log(lat);
    return (
        <>
            <tr>
                <td>{lat}</td>
                <td>{lng}</td>
                <td>{soil}</td>
            </tr>
        </>
    );
};

export default DisplayList;
