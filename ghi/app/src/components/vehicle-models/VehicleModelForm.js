import { useEffect, useState } from "react";


function VehicleModelForm() {
    const [manufacturers, setManufacturers] = useState([]);
    const [formData, setFormData] = useState({
        name: "",
        picture_url: "",
        manufacturer: "",
    })

    const getData = async () => {
        const url = 'http://localhost:8100/api/manufacturers/';
        const response = await fetch(url);

        if (response.ok) {
            const data = await response.json();
            setManufacturers(data.manufacturers);
        }
    }


    useEffect(() => {
        getData();
    }, []);


    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = {
            name: formData.name,
            picture_url: formData.picture_url,
            manufacturer_id: formData.manufacturer,
        }


        const locationUrl = 'http://localhost:8100/api/models/';

        const fetchConfig = {
            method: "post",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
            }
        };

        const response = await fetch(locationUrl, fetchConfig);

        if (response.ok) {
            setFormData({
                name: "",
                picture_url: "",
                manufacturer: "",
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
              <h1>Create a vehicle model</h1>
              <form onSubmit={handleSubmit} id="create-model-form">
                <div className="form-floating mb-3">
                  <input onChange={handleFormChange} value={formData.name} placeholder="Name" required type="text" name="name" id="name" className="form-control" />
                  <label htmlFor="name">Name</label>
                </div>
                <div className="form-floating mb-3">
                  <input onChange={handleFormChange} value={formData.picture_url} placeholder="Picture URL" required type="text" name="picture_url" id="picture_url" className="form-control" />
                  <label htmlFor="picture_url">Picture URL</label>
                </div>
                <div className="form-floating mb-3"></div>
                <div className="mb-3">
                  <select onChange={handleFormChange} value={formData.manufacturer} required name="manufacturer" id="manufacturer" className="form-select">
                    <option value="">Choose a manufacturer</option>
                    {manufacturers.map(manufacturer => {
                      return (
                        <option key={manufacturer.id} value={manufacturer.id}>{manufacturer.name}</option>
                      );
                    })}
                  </select>
                  </div>
                <button className="btn btn-primary">Create</button>
              </form>
            </div>
          </div>
        </div>
        );


}

export default VehicleModelForm;
