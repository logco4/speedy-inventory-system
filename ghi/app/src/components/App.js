import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppointmentForm from './appointments/AppointmentForm';
import ListAppointments from './appointments/ListAppointments';
import ListTechnicians from './technicians/ListTechnicians';
import MainPage from './MainPage';
import Nav from './Nav';
import SalesPersonForm from './sales/SalesPersonForm';
import CustomerForm from './customers/CustomerForm';
import SalesRecordForm from './sales/SalesRecordForm';
import TechnicianForm from './technicians/TechnicianForm';
import ServiceHistory from './appointments/ServiceHistory';
import ListSalesRecords from './sales/ListSalesRecords';
import ListPersonsSales from './sales/ListPersonsSales';
import ListManufacturers from './manufacturers/ListManufacturers';
import ManufacturerForm from './manufacturers/ManufacturerForm';
import ListVehicleModels from './vehicle-models/ListVehicleModels';
import VehicleModelForm from './vehicle-models/VehicleModelForm';
import ListAutomobiles from './automobiles/ListAutomobiles';
import AutomobileForm from './automobiles/AutomobileForm';
import RescheduleForm from './appointments/RescheduleAppointment';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/employee/sales/new/" element={<SalesPersonForm />} />
          <Route path="/customers/new/" element={<CustomerForm />} />
          <Route path="/records/new/" element={<SalesRecordForm />} />
          <Route path="/records/" element={<ListSalesRecords />} />
          <Route path="/records/employee/" element={<ListPersonsSales />} />


          <Route path='appointments'>
            <Route index element={<ListAppointments />} />
            <Route path='new' element={<AppointmentForm />} />
            <Route path='history' element={<ServiceHistory />} />
            <Route path='reschedule' element={<RescheduleForm />} />
          </Route>

          <Route path='technicians'>
            <Route index element={<ListTechnicians />} />
            <Route path='new' element={<TechnicianForm />} />
          </Route>

          <Route path='manufacturers'>
            <Route index element={<ListManufacturers />} />
            <Route path='new' element={<ManufacturerForm />} />
          </Route>

          <Route path='models'>
            <Route index element={<ListVehicleModels />} />
            <Route path='new' element={<VehicleModelForm />} />
          </Route>

          <Route path='automobiles'>
            <Route index element={<ListAutomobiles />} />
            <Route path='new' element={<AutomobileForm />} />
          </Route>

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
