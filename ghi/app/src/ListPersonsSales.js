import { useEffect, useState } from "react";


function ListPersonsSales () {
    const [salesPeople, setSalesPeople] = useState([])

    const [salesPersonId, setSalesPersonId] = useState()

    const [salesRecords, setSalesRecords] = useState([])

    async function fetchData () {
        const salesPeopleResponse = await fetch('http://localhost:8090/api/employees/')
        if (salesPeopleResponse.ok) {
            const data = await salesPeopleResponse.json()
            setSalesPeople(data.sales_people)
        } else {
            console.error(salesPeopleResponse)
        }

        const recordsResponse = await fetch(`http://localhost:8090/api/records/`)
        if (recordsResponse.ok) {
            const data = await recordsResponse.json()
            setSalesRecords(data.sales_records)
        } else {
            console.error(recordsResponse)
        }
    }

    const handleSalesPersonIdChange = (e) => {
        const value = e.target.value
        setSalesPersonId(value)
    }

    useEffect(() => {
        fetchData()
    }, [])

    const getRecordsFiltered = () => {
        return (
            salesRecords.filter(r => r.sales_person.employee_id === parseInt(salesPersonId))
        )
    }

    return (
        <>
        <select onChange={handleSalesPersonIdChange} value={salesPersonId} required name="salesPerson" id="salesPerson" className="form-select">
            <option value="" >Choose a sales person</option>
            {
                salesPeople.map(p => {
                    return (
                    <option value={p.employee_id} key={p.employee_id}>{p.name} | Employee ID: {p.employee_id}</option>
                    )
            })}
        </select>
        <table>
            <thead>
                <tr>
                    <th>Sales person</th>
                    <th>Employeee ID</th>
                    <th>Purchaser</th>
                    <th>Price</th>
                    <th>Vehicle VIN</th>
                </tr>
            </thead>
            <tbody>
                {
                    getRecordsFiltered().map(record => {
                        return <tr key={record.id}>
                            <td>{record.sales_person.name}</td>
                            <td>{record.sales_person.employee_id}</td>
                            <td>{record.customer.name}</td>
                            <td>{record.price}</td>
                            <td>{record.automobile.vin}</td>
                        </tr>
                    })
                }
            </tbody>
        </table>
        </>
    )
}


export default ListPersonsSales
