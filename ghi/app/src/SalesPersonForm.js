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
        <form onSubmit={handleSubmit} id="sales-person-form">
            <div>
                <input onChange={handleFieldChange} value={formData.name} required name="name" placeholder="Name" type="text" id="name" />
                <label htmlFor="name">Name</label>
            </div>
            <div>
                <input onChange={handleFieldChange} value={formData.employeeId} required name="employeeId" placeholder="Employee ID" type="text" id="employeeId" />
                <label htmlFor="employeeId">Employee ID</label>
            </div>
            <button>Create</button>
        </form>
        </>
    )
}

export default SalesPersonForm
