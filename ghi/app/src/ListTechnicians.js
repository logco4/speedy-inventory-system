import { useEffect, useState } from 'react';
import App from './App';
import {Link} from 'react-router-dom';


function ListTechnicians() {
    const [technicians, setTechnicians] = useState([]);

    const getData = async () => {
        const response = await fetch("http://localhost:8080/api/technicians/");

        if (response.ok) {
            const data = await response.json();
            setTechnicians(data.technicians)
        }
    }

    useEffect(() => {
        getData();
    }, []);

    return (
        <>
        <h1>Technicians</h1>
        <table className='table table-striped'>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Employee Number</th>
                </tr>
            </thead>
            <tbody>
                {technicians.map(technician => {
                    return (
                        <tr key={technician.id}>
                            <td>{technician.name}</td>
                            <td>{technician.employee_number}</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
        <Link to="/technicians/new">
            <button className='btn btn-primary'>Add technician</button>
        </Link>
        </>
    )
}

export default ListTechnicians;
