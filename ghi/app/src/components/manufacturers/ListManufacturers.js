import { useEffect, useState } from 'react';
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
        <div>
            <div className='row' style={{width:"100%"}}>
                <div style={{paddingLeft:10}} className='col-10'>
                    <h1>Manufacturers</h1>
                </div>
                <div className='col-2 justify-content-end'>
                    <Link to="/manufacturers/new">
                        <button  className='btn btn-success justify-content-end mt-2'>Add manufacturer</button>
                    </Link>
                </div>
            </div>
        </div>
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
        </>
    )
}

export default ListManufacturers;
