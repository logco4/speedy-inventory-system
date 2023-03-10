import { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';


function ListEmployees() {
    const [technicians, setTechnicians] = useState([]);
    const [salesPeople, setSalesPeople] = useState([]);

    const getData = async () => {
        const techniciansResponse = await fetch("http://localhost:8080/api/technicians/");

        if (techniciansResponse.ok) {
            const data = await techniciansResponse.json();
            setTechnicians(data.technicians)
        }

        const salesPeopleResponse = await fetch("http://localhost:8090/api/employees/");

        if (salesPeopleResponse.ok) {
            const data = await salesPeopleResponse.json();
            setSalesPeople(data.sales_people)
        }
    }

    useEffect(() => {
        getData();
    }, []);

    return (
        <>
        <div className="row">
            <div className="col">
                <div>
                    <div className='row' style={{width:"100%"}}>
                        <div style={{paddingLeft:10}} className='col-8'>
                            <h1>Technicians</h1>
                        </div>
                        <div className='col-4 justify-content-end'>
                            <Link to="/employees/service/new/">
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
            </div>
            <div className="col">
                <div>
                    <div className='row' style={{width:"100%"}}>
                        <div style={{paddingLeft:10}} className='col-8'>
                            <h1>Sales people</h1>
                        </div>
                        <div className='col-4 justify-content-end'>
                            <Link to="/employees/sales/new/">
                                <button  className='btn btn-success justify-content-end mt-2'>Add sales person</button>
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
                        {salesPeople.map(salesPerson => {
                            return (
                                <tr key={salesPerson.id}>
                                    <td>{salesPerson.name}</td>
                                    <td>{salesPerson.employee_id}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
        </>
    )
}

export default ListEmployees;
