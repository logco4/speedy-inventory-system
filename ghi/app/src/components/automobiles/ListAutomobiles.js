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
        <div>
            <div className='row' style={{width:"100%"}}>
                <div style={{paddingLeft:12}} className='col-10'>
                    <h1>Automobiles</h1>
                </div>
                <div className='col-2 justify-content-end'>
                    <Link to="/automobiles/new">
                        <button  className='btn btn-success justify-content-end mt-2'>Create an automobile</button>
                    </Link>
                </div>
            </div>
        </div>
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
        </>
    )
}

export default ListAutomobiles;
