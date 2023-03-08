import { useEffect, useState } from 'react';
import App from './App';
import {Link} from 'react-router-dom';


function ListAppointments() {
    const [appointments, setAppointments] = useState([]);
    const [filteredAppointments, setFilteredAppointments] = useState([]);


    const getData = async () => {
        const response = await fetch("http://localhost:8080/api/appointments/");

        if (response.ok) {
            const data = await response.json();
            setAppointments(data.appointments.filter((appointment) => appointment.status === 'SUBMITTED'));
        }


    }

    useEffect(() => {
        getData();
    }, []);


    const handleStatusChange = async (e) => {
        e.preventDefault();
        const appointment = e.target.name
        const status = e.target.value
        const data = {status: status}


        const locationUrl = `http://localhost:8080/api/appointments/${appointment}/`;

        const fetchConfig = {
            method: "put",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
            }
        };

        const response = await fetch(locationUrl, fetchConfig);
        if (response.ok) {
            getData();
        }
    }



    return (
        <>
        <h1>Pending Appointments</h1>
        <table className='table table-striped'>
            <thead>
                <tr>
                    <th>VIN</th>
                    <th>Customer name</th>
                    <th>VIP</th>
                    <th>Date</th>
                    <th>Time</th>
                    <th>Technician</th>
                    <th>Reason</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {appointments.map(appointment => {
                    return (
                        <tr key={appointment.id}>
                            <td>{appointment.vin}</td>
                            <td>{appointment.customer_name}</td>
                            <td>{appointment.isVip}</td>
                            <td>{appointment.appt_date}</td>
                            <td>{appointment.appt_time}</td>
                            <td>{appointment.technician.name}</td>
                            <td>{appointment.reason}</td>
                            <td>
                                <button onClick={handleStatusChange} name={appointment.id} value="CANCELED" id={appointment.id} className='btn btn-danger'>Cancel</button>
                                <button onClick={handleStatusChange} name={appointment.id} value="FINISHED" className='btn btn-success'>Finished</button>
                            </td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
        <Link to="/appointments/new">
            <button className='btn btn-primary'>Create appointment</button>
        </Link>
        </>
    )
}

export default ListAppointments;
