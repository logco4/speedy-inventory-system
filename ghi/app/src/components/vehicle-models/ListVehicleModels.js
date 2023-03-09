import { useEffect, useState } from 'react';
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
        <div>
            <div className='row' style={{width:"100%"}}>
                <div style={{paddingLeft:10}} className='col-10'>
                    <h1>Vehicle models</h1>
                </div>
                <div className='col-2 justify-content-end'>
                    <Link to="/models/new">
                        <button  className='btn btn-success justify-content-end mt-3'>Create vehicle model</button>
                    </Link>
                </div>
            </div>
        </div>
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
        </>
    )
}

export default ListVehicleModels;
