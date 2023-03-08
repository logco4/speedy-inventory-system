import { useEffect, useState } from 'react';
import App from './App';
import {Link} from 'react-router-dom';


function ListVehicleModels() {
    const [models, setModels] = useState([]);

    const getData = async () => {
        const response = await fetch("http://localhost:8100/api/models/");

        if (response.ok) {
            const data = await response.json();
            setModels(data.models)
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
                    <th>Name</th>
                    <th>Manufacturer</th>
                    <th>Picture</th>
                </tr>
            </thead>
            <tbody>
                {models.map(model => {
                    return (
                        <tr key={model.id}>
                            <td>{model.name}</td>
                            <td>{model.manufacturer.name}</td>
                            <td>
                                <img width="200" src={model.picture_url} alt="" />
                            </td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
        <Link to="/models/new">
            <button className='btn btn-primary'>Add vehicle model</button>
        </Link>
        </>
    )
}

export default ListVehicleModels;
