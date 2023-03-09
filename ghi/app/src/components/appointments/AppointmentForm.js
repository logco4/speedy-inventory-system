import { useEffect, useState } from "react";


function AppointmentForm() {
    const [technicians, setTechnicians] = useState([]);
    const [formData, setFormData] = useState({
        vin: "",
        customer_name: "",
        appt_date: "",
        appt_time: "",
        technician: "",
        reason: "",
    })

    const getTechnicianData = async () => {
        const url = 'http://localhost:8080/api/technicians/';
        const response = await fetch(url);

        if (response.ok) {
            const data = await response.json();
            setTechnicians(data.technicians);
        }
    }


    useEffect(() => {
        getTechnicianData();
    }, []);


    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = {
            vin: formData.vin,
            customer_name: formData.customer_name,
            appt_date: formData.appt_date,
            appt_time: formData.appt_time,
            reason: formData.reason,
            technician: formData.technician,
        }


        const locationUrl = 'http://localhost:8080/api/appointments/';

        const fetchConfig = {
            method: "post",
            body: JSON.stringify(formData),
            headers: {
                "Content-Type": "application/json",
            }
        };

        const response = await fetch(locationUrl, fetchConfig);

        if (response.ok) {
            setFormData({
                vin: "",
                customer_name: "",
                appt_date: "",
                appt_time: "",
                technician: "",
                reason: "",
            })
        }
    }

    const handleFormChange = (e) => {
        const value = e.target.value;
        const inputName = e.target.name;
        setFormData({
            ...formData,
            [inputName]: value
        });
    }

    return (
        <div className="row">
          <div className="offset-3 col-6">
            <div className="shadow p-4 mt-4">
              <h1>Create a new appointment</h1>
              <form onSubmit={handleSubmit} id="create-appointment-form">
                <div className="form-floating mb-3">
                  <input onChange={handleFormChange} value={formData.vin} placeholder="VIN" required type="text" name="vin" id="vin" className="form-control" />
                  <label htmlFor="manufacturer">VIN</label>
                </div>
                <div className="form-floating mb-3">
                  <input onChange={handleFormChange} value={formData.customer_name} placeholder="Customer name" required type="text" name="customer_name" id="customer_name" className="form-control" />
                  <label htmlFor="customer_name">Customer name</label>
                </div>
                <div className="form-floating mb-3">
                  <input onChange={handleFormChange} value={formData.appt_date} placeholder="Appointment date" required type="date" name="appt_date" id="appt_date" className="form-control" />
                  <label htmlFor="appt_date">Appointment date</label>
                </div>
                <div className="mb-3">
                  <label htmlFor="appt_time">Appointment time</label>
                  <input type="time" placeholder='Appointment time' value={formData.appt_time} onChange={handleFormChange} className="form-control" id="appt_time" rows="3" name="appt_time"></input>
                </div>
                <div className="form-floating mb-3"></div>
                <div className="mb-3">
                  <select onChange={handleFormChange} value={formData.technician} required name="technician" id="technician" className="form-select">
                    <option value="">Choose a technician</option>
                    {technicians.map(technician => {
                      return (
                        <option key={technician.id} value={technician.employee_number}>{technician.name}</option>
                      );
                    })}
                  </select>
                  </div>
                <div className="mb-3">
                  <label htmlFor="reason">Reason</label>
                  <input type="text" placeholder='Reason' value={formData.reason} onChange={handleFormChange} className="form-control" id="reason" rows="3" name="reason"></input>
                </div>
                <button className="btn btn-success">Create appointment</button>
              </form>
            </div>
          </div>
        </div>
        );


}

export default AppointmentForm;
