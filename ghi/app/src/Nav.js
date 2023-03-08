import { NavLink } from 'react-router-dom';

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">CarCar</NavLink>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link text-decorator-none" to="/employee/sales/new/">Add sales person</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/customers/new/">Add customer</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/records/new/">Record a sale</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/records/">All sales</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/records/employee/">Sales by employee</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/appointments/">Pending appointments</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/appointments/history/">Service history</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/appointments/new/">Add appointment</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/technicians/">View technicians</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/technicians/new/">Add technician</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/models/">Vehicle models</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/models/new/">Add vehicle model</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/automobiles/">View automobiles</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/automobiles/new/">Add automobile</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/manufacturers/">View manufacturers</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/manufacturers/new/">Add manufacturer</NavLink>
            </li>
          </ul>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Nav;
