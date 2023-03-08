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
import ListSalesRecords from './ListSalesRecords';
import ListPersonsSales from './ListPersonsSales';

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
          </Route>

          <Route path='technicians'>
            <Route index element={<ListTechnicians />} />
            <Route path='new' element={<TechnicianForm />} />
          </Route>

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
