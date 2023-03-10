import { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import { timeConvert, dateConvert } from '../../functions';


function ListAppointments() {
    const [appointments, setAppointments] = useState([]);


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
        const data = {"status": status}

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
        <div>
            <div className='row' style={{width:"100%"}}>
                <div style={{paddingLeft:10}} className='col-10'>
                    <h1>Upcoming Appointments</h1>
                </div>
                <div className='col-2 justify-content-end'>
                    <Link to="/service/schedule/">
                        <button  className='btn btn-success justify-content-end mt-2'>Schedule appointment</button>
                    </Link>
                </div>
            </div>
        </div>
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
                            <td>{dateConvert(appointment.appt_date)}</td>
                            <td>{timeConvert(appointment.appt_time)}</td>
                            <td>{appointment.technician.name}</td>
                            <td>{appointment.reason}</td>
                            <td>
                                <div className="dropdown me-1">
                                    <button type="button" className="btn btn-outline-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" data-bs-offset="10,20">
                                    Options
                                    </button>
                                    <ul className="dropdown-menu">
                                        <Link to='/service/reschedule/' state={{ appointment : appointment }} className="text-decoration-none" >
                                            <li value={appointment.id} className="dropdown-item btn-link-warning">
                                                Reschedule
                                            </li>
                                        </Link>
                                        <li className="btn dropdown-item">
                                            <button onClick={handleStatusChange} name={appointment.id} value="FINISHED" id={appointment.id} className='btn link-success' style={{padding:0}}>Finished</button>
                                        </li>
                                        <li className="btn dropdown-item">
                                            <button onClick={handleStatusChange} name={appointment.id} value="CANCELED" id={appointment.id} className='btn link-danger' style={{padding:0}}>Cancel</button>
                                        </li>
                                    </ul>
                                </div>
                            </td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
        </>
    )
}

export default ListAppointments;
