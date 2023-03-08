import { useEffect, useState } from 'react';
import App from './App';
import {Link} from 'react-router-dom';


function ListManufacturers() {
    const [manufacturers, setManufacturer] = useState([]);

    const getData = async () => {
        const response = await fetch("http://localhost:8100/api/manufacturers/");

        if (response.ok) {
            const data = await response.json();
            setManufacturer(data.manufacturers)
        }
    }

    useEffect(() => {
        getData();
    }, []);

    return (
        <>
        <h1>Manufacturers</h1>
        <table className='table table-striped'>
            <thead>
                <tr>
                    <th>Name</th>
                </tr>
            </thead>
            <tbody>
                {manufacturers.map(manufacturer => {
                    return (
                        <tr key={manufacturer.id}>
                            <td>{manufacturer.name}</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
        <Link to="/manufacturers/new">
            <button className='btn btn-primary'>Add manufacturer</button>
        </Link>
        </>
    )
}

export default ListManufacturers;
