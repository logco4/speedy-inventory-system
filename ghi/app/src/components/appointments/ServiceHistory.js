import { useEffect, useState } from 'react';


function ServiceHistory() {
    const [appointments, setAppointments] = useState([]);
    const [filterTerm, setFilterTerm] = useState("");
    const [filterCategory, setFilterCategory] = useState("vin");
    const [filteredAppointments, setFilteredAppointments] = useState([]);

    const getData = async () => {
        const response = await fetch("http://localhost:8080/api/appointments/");

        if (response.ok) {
            const data = await response.json();
            setAppointments(data.appointments)
        }
    }

    useEffect(() => {
        getData();
    }, []);


    const handleFilterChange = (e) => {
        setFilterTerm(e.target.value);
    }

    const getFilteredAppointments = () => {
        setFilteredAppointments(appointments.filter((appointment) => appointment[filterCategory].toLowerCase().includes(filterTerm.toLowerCase())));
    };


    return (
        <>
        <div className='input-group mb-3 mt-3'>
            <input onChange={handleFilterChange} type="text" className='form-control' placeholder='VIN' aria-describedby='basic-addon2'></input>
            <div className='input-group-append'>
                <button onClick={getFilteredAppointments} className='btn btn-outline-secondary' type='button'>Search VIN</button>
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
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
                {filteredAppointments.map((appointment) => {
                    return (
                        <>
                        <tr key={appointment.id}>
                            <td>{appointment.vin}</td>
                            <td>{appointment.customer_name}</td>
                            <td>{appointment.isVip}</td>
                            <td>{appointment.appt_date}</td>
                            <td>{appointment.appt_time}</td>
                            <td>{appointment.technician.name}</td>
                            <td>{appointment.reason}</td>
                            <td>{appointment.status}</td>
                        </tr>
                        </>
                    );
                })}
            </tbody>
        </table>
        </>
    )
}

export default ServiceHistory;
