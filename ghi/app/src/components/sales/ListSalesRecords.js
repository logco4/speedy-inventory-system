import { useEffect, useState } from "react"

function ListSalesRecords () {
    const [salesRecords, setSalesRecords] = useState([])

    const fetchData = async () => {
        const response = await fetch('http://localhost:8090/api/records/')
        if (response.ok) {
            const data = await response.json()
            setSalesRecords(data.sales_records)
        } else {
            console.error(response)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <>
        <div >
            <h2 className="text-center" ><b>All sales records</b></h2>
            <table className="table table-striped shadow p-4 mt-4 rounded">
                <thead>
                    <th>Purchaser</th>
                    <th>Sales person</th>
                    <th>Employeee ID</th>
                    <th>Price</th>
                    <th>Vehicle VIN</th>
                </thead>
                <tbody>
                    {
                        salesRecords.map(record => {
                            return <tr key={record.id}>
                                <td>{record.customer.name}</td>
                                <td>{record.sales_person.name}</td>
                                <td>{record.sales_person.employee_id}</td>
                                <td>{record.price}</td>
                                <td>{record.automobile.vin}</td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </div>
        </>
    )
}


export default ListSalesRecords
