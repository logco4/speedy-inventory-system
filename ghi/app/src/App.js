import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
import SalesPersonForm from './SalesPersonForm';
import CustomerForm from './CustomerForm';
import SalesRecordForm from './SalesRecordForm';

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
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
