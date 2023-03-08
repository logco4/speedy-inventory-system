import { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';


function ListAutomobiles() {
    const [automobiles, setAutomobiles] = useState([]);

    const getData = async () => {
        const response = await fetch("http://localhost:8100/api/automobiles/");

        if (response.ok) {
            const data = await response.json();
            setAutomobiles(data.autos)
        }
    }

    useEffect(() => {
        getData();
    }, []);

    return (
        <>
        <h1>Vehicle models</h1>
        <table className='table table-striped'>
            <thead>
                <tr>
                    <th>VIN</th>
                    <td>Color</td>
                    <td>Year</td>
                    <td>Model</td>
                    <td>Manufacturer</td>
                </tr>
            </thead>
            <tbody>
                {automobiles.map(automobile => {
                    return (
                        <tr key={automobile.id}>
                            <td>{automobile.vin}</td>
                            <td>{automobile.color}</td>
                            <td>{automobile.year}</td>
                            <td>{automobile.model.name}</td>
                            <td>{automobile.model.manufacturer.name}</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
        <Link to="/automobiles/new">
            <button className='btn btn-primary'>Add automobile</button>
        </Link>
        </>
    )
}

export default ListAutomobiles;
