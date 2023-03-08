import { useState, useEffect } from "react"

function SalesRecordForm () {
    const [formData, setFormData] = useState({
        price: "",
        automobile: "",
        salesPerson: "",
        customer: "",
    })

    const [autos, setAutos] = useState([])

    const [salesPeople, setSalesPeople] = useState([])

    const [customers, setCustomers] = useState([])

    async function fetchData () {
        const autosResponse = await fetch('http://localhost:8090/api/automobiles/')
        if (autosResponse.ok) {
            const data = await autosResponse.json()
            setAutos(data.autos)
        } else {
            console.error(autosResponse)
        }

        const salesPeopleResponse = await fetch('http://localhost:8090/api/employees/')
        if (salesPeopleResponse.ok) {
            const data = await salesPeopleResponse.json()
            setSalesPeople(data.sales_people)
        } else {
            console.error(salesPeopleResponse)
        }

        const customersResponse = await fetch('http://localhost:8090/api/customers/')
        if (customersResponse.ok) {
            const data = await customersResponse.json()
            setCustomers(data.customers)
        } else {
            console.error(customersResponse)
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const data = {
            price: formData.price,
            automobile: formData.automobile,
            sales_person: formData.salesPerson,
            customer: formData.customer,
        }

        const recordsUrl = 'http://localhost:8090/api/records/'
        const fetchConfig = {
            method: "post",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            }
        }
        const response = await fetch(recordsUrl, fetchConfig)
        if (response.ok) {
            setFormData({
                price: "",
                automobile: "",
                salesPerson: "",
                customer: "",
            })
        }
    }

    const handleFieldChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <>
        <form onSubmit={handleSubmit} id="sales-record-form">
            <div>
                <input onChange={handleFieldChange} value={formData.price} required name="price" placeholder="Price" type="text" id="price" />
                <label htmlFor="price">Price</label>
            </div>
            <select onChange={handleFieldChange} value={formData.automobile} required name="automobile" id="automobile" className="form-select">
                <option value="">Choose an automobile</option>
                {
                    autos.map(automobile => {
                        return (
                        <option value={automobile.vin} key={automobile.vin}>{automobile.year} {automobile.manufacturer} {automobile.model} | Vin # {automobile.vin}</option>
                        )
                })}
            </select>
            <select onChange={handleFieldChange} value={formData.customer} required name="customer" id="customer" className="form-select">
                <option value="">Choose a customer</option>
                {
                    customers.map(customer => {
                        return (
                        <option value={customer.id} key={customer.id}>{customer.name} | Customer ID: {customer.id}</option>
                        )
                })}
            </select>
            <select onChange={handleFieldChange} value={formData.salesPerson} required name="salesPerson" id="salesPerson" className="form-select">
                <option value="">Choose a sales person</option>
                {
                    salesPeople.map(salesPerson => {
                        return (
                        <option value={salesPerson.employee_id} key={salesPerson.employee_id}>{salesPerson.name} | Employee ID: {salesPerson.employee_id}</option>
                        )
                })}
            </select>
            <button>Create</button>
        </form>
        </>
    )
}

export default SalesRecordForm
