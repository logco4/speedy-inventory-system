import { useState } from "react"

function CustomerForm () {
    const [formData, setFormData] = useState({
        name: "",
        address: "",
        phoneNumber: ""
    })

    const handleSubmit = async (e) => {
        e.preventDefault()
        const data = {
            name: formData.name,
            address: formData.address,
            phone_number: formData.phoneNumber
        }

        const customersUrl = 'http://localhost:8090/api/customers/'
        const fetchConfig = {
            method: "post",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            }
        }
        const response = await fetch(customersUrl, fetchConfig)
        if (response.ok) {
            setFormData({
                name: "",
                address: "",
                phoneNumber: ""
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
                    <h2 className="text-center" >Add customer</h2>
                    <form onSubmit={handleSubmit} id="sales-person-form">
                        <div className="form-floating mb-3">
                            <input onChange={handleFieldChange} value={formData.name} required name="name" className="form-control" placeholder="Name" type="text" id="name" />
                            <label htmlFor="name">Name</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input onChange={handleFieldChange} value={formData.address} required name="address" className="form-control" placeholder="Address" type="text" id="address" />
                            <label htmlFor="address">Address</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input onChange={handleFieldChange} value={formData.phoneNumber} required name="phoneNumber" className="form-control" placeholder="Phone number" type="text" id="phoneNumber" />
                            <label htmlFor="phoneNumber">Phone number</label>
                        </div>
                        <button className="btn btn-success">Create</button>
                    </form>
                </div>
            </div>
        </div>
        </>
    )
}

export default CustomerForm
