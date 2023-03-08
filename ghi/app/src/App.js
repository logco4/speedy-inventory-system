import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppointmentForm from './AppointmentForm';
import ListAppointments from './ListAppointments';
import ListTechnicians from './ListTechnicians';
import MainPage from './MainPage';
import Nav from './Nav';
import TechnicianForm from './TechnicianForm';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />

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
