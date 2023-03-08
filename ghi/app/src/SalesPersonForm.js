import { useState } from "react"

function SalesPersonForm () {
    const [formData, setFormData] = useState({
        name: "",
        employeeId: ""
    })

    const handleSubmit = async (e) => {
        e.preventDefault()
        const data = {
            name: formData.name,
            employee_id: formData.employeeId
        }

        const employeesUrl = 'http://localhost:8090/api/employees/'
        const fetchConfig = {
            method: "post",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            }
        }
        const response = await fetch(employeesUrl, fetchConfig)
        if (response.ok) {
            setFormData({
                name: "",
                employeeId: ""
            })
        }
    }

    const handleFieldChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    return (
        <>
        <div className="row">
            <div className="offset-3 col-6">
                <div className="shadow p-4 mt-4 rounded" style={{backgroundColor: 'white'}}>
                    <h2 className="text-center" >Add sales person</h2>
                    <form onSubmit={handleSubmit} id="sales-person-form">
                        <div className="form-floating mb-3">
                            <input onChange={handleFieldChange} value={formData.name} required name="name" className="form-control" placeholder="Name" type="text" id="name" />
                            <label htmlFor="name">Name</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input onChange={handleFieldChange} value={formData.employeeId} required name="employeeId" className="form-control" placeholder="Employee ID" type="number" id="employeeId" />
                            <label htmlFor="employeeId">Employee ID</label>
                        </div>
                        <button className="btn btn-success">Create</button>
                    </form>
                </div>
            </div>
        </div>
        </>
    )
}

export default SalesPersonForm
