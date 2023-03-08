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
        <form onSubmit={handleSubmit} id="sales-person-form">
            <div>
                <input onChange={handleFieldChange} value={formData.name} required name="name" placeholder="Name" type="text" id="name" />
                <label htmlFor="name">Name</label>
            </div>
            <div>
                <input onChange={handleFieldChange} value={formData.address} required name="address" placeholder="Address" type="text" id="address" />
                <label htmlFor="address">Address</label>
            </div>
            <div>
                <input onChange={handleFieldChange} value={formData.phoneNumber} required name="phoneNumber" placeholder="Phone number" type="text" id="phoneNumber" />
                <label htmlFor="phoneNumber">Phone number</label>
            </div>
            <button>Create</button>
        </form>
        </>
    )
}

export default CustomerForm
