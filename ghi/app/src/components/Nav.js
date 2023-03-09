import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">CarCar</Link>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Employees
            </a>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              <li >
                <Link className="dropdown-item" to="/employees/sales/new/">Add sales person</Link>
                <hr style={{margin: 5}} />
              </li>
              <li >
                <Link className="dropdown-item" to="/employees/service/new/">Add technician</Link>
                <hr style={{margin: 5}} />
              </li>
              <li >
                <Link className="dropdown-item" to="/employees/">Employee list</Link>
              </li>
            </ul>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Sales
            </a>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              <li>
                <Link className="dropdown-item" to="/records/new/">Record a sale</Link>
                <hr className="dropdown-divider" style={{margin: 5}} />
              </li>
              <li >
                <Link className="dropdown-item" to="/records/">All sales</Link>
                <hr className="dropdown-divider" style={{margin: 5}} />
              </li>
              <li >
                <Link className="dropdown-item" to="/records/employee/">Sales by employee</Link>
              </li>
            </ul>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Service
            </a>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              <li >
                <Link className="dropdown-item" to="/service/schedule/">Schedule appointment</Link>
                <hr className="dropdown-divider" style={{margin: 5}} />
              </li>
              <li >
                <Link className="dropdown-item" to="/service/">Upcoming appointments</Link>
                <hr className="dropdown-divider" style={{margin: 5}} />
              </li>
              <li >
                <Link className="dropdown-item" to="/service/history/">Service history</Link>
              </li>
            </ul>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Inventory
            </a>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              <li >
                <Link className="dropdown-item" to="/models/">Vehicle models</Link>
                <hr className="dropdown-divider" style={{margin: 5}} />
              </li>
              <li >
                <Link className="dropdown-item" to="/models/new/">Add vehicle model</Link>
                <hr className="dropdown-divider" style={{margin: 5}} />
              </li>
              <li >
                <Link className="dropdown-item" to="/automobiles/">View automobiles</Link>
                <hr className="dropdown-divider" style={{margin: 5}} />
              </li>
              <li >
                <Link className="dropdown-item" to="/automobiles/new/">Add automobile</Link>
                <hr className="dropdown-divider" style={{margin: 5}} />
              </li>
              <li >
                <Link className="dropdown-item" to="/manufacturers/">View manufacturers</Link>
                <hr className="dropdown-divider" style={{margin: 5}} />
              </li>
              <li >
                <Link className="dropdown-item" to="/manufacturers/new/">Add manufacturer</Link>
              </li>
            </ul>
          </li>
            <li >
              <Link className="nav-link" to="/customers/new/">Add customer</Link>
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
