import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppointmentForm from './AppointmentForm';
import ListAppointments from './ListAppointments';
import ListTechnicians from './ListTechnicians';
import MainPage from './MainPage';
import Nav from './Nav';
import SalesPersonForm from './SalesPersonForm';
import CustomerForm from './CustomerForm';
import SalesRecordForm from './SalesRecordForm';
import TechnicianForm from './TechnicianForm';
import ServiceHistory from './ServiceHistory';
import ListSalesRecords from './ListSalesRecords';
import ListPersonsSales from './ListPersonsSales';
import ListManufacturers from './ListManufacturers';
import ManufacturerForm from './ManufacturerForm';
import ListVehicleModels from './ListVehicleModels';
import VehicleModelForm from './VehicleModelForm';
import ListAutomobiles from './ListAutomobiles';
import AutomobileForm from './AutomobileForm';

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
