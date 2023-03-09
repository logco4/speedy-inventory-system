import { NavLink } from 'react-router-dom';

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">CarCar</NavLink>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Employees
            </a>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              <li >
                <NavLink className="dropdown-item" to="/employee/sales/new/">Add sales person</NavLink>
                <hr style={{margin: 5}} />
              </li>
              <li >
                <NavLink className="dropdown-item" to="/technicians/new/">Add technician</NavLink>
                <hr style={{margin: 5}} />
              </li>
              <li >
                <NavLink className="dropdown-item" to="/technicians/">Employee list</NavLink>
              </li>
            </ul>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Sales
            </a>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              <li>
                <NavLink className="dropdown-item" to="/records/new/">Record a sale</NavLink>
                <hr className="dropdown-divider" style={{margin: 5}} />
              </li>
              <li >
                <NavLink className="dropdown-item" to="/records/">All sales</NavLink>
                <hr className="dropdown-divider" style={{margin: 5}} />
              </li>
              <li >
                <NavLink className="dropdown-item" to="/records/employee/">Sales by employee</NavLink>
              </li>
            </ul>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Service
            </a>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              <li >
                <NavLink className="dropdown-item" to="/appointments/new/">Schedule appointment</NavLink>
                <hr className="dropdown-divider" style={{margin: 5}} />
              </li>
              <li >
                <NavLink className="dropdown-item" to="/appointments/">Upcoming appointments</NavLink>
                <hr className="dropdown-divider" style={{margin: 5}} />
              </li>
              <li >
                <NavLink className="dropdown-item" to="/appointments/history/">Service history</NavLink>
              </li>
            </ul>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Inventory
            </a>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              <li >
                <NavLink className="dropdown-item" to="/models/">Vehicle models</NavLink>
                <hr className="dropdown-divider" style={{margin: 5}} />
              </li>
              <li >
                <NavLink className="dropdown-item" to="/models/new/">Add vehicle model</NavLink>
                <hr className="dropdown-divider" style={{margin: 5}} />
              </li>
              <li >
                <NavLink className="dropdown-item" to="/automobiles/">View automobiles</NavLink>
                <hr className="dropdown-divider" style={{margin: 5}} />
              </li>
              <li >
                <NavLink className="dropdown-item" to="/automobiles/new/">Add automobile</NavLink>
                <hr className="dropdown-divider" style={{margin: 5}} />
              </li>
              <li >
                <NavLink className="dropdown-item" to="/manufacturers/">View manufacturers</NavLink>
                <hr className="dropdown-divider" style={{margin: 5}} />
              </li>
              <li >
                <NavLink className="dropdown-item" to="/manufacturers/new/">Add manufacturer</NavLink>
              </li>
            </ul>
          </li>
            <li >
              <NavLink className="nav-link" to="/customers/new/">Add customer</NavLink>
            </li>


          </ul>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Nav;
