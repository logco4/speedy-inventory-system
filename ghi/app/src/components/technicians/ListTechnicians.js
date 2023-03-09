import { useEffect, useState } from 'react';
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
        <div>
            <div className='row' style={{width:"100%"}}>
                <div style={{paddingLeft:10}} className='col-10'>
                    <h1>Technicians</h1>
                </div>
                <div className='col-2 justify-content-end'>
                    <Link to="/technicians/new">
                        <button  className='btn btn-success justify-content-end mt-2'>Add technician</button>
                    </Link>
                </div>
            </div>
        </div>
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
        </>
    )
}

export default ListTechnicians;
