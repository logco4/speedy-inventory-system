import { NavLink } from 'react-router-dom';

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">CarCar</NavLink>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <NavLink className="nav-link text-decorator-none" to="/employee/sales/new/">Add sales person</NavLink>
            </li>
            <li class="nav-item">
              <NavLink className="nav-link" to="/customers/new/">Add customer</NavLink>
            </li>
            <li class="nav-item">
              <NavLink className="nav-link" to="/records/new/">Record a sale</NavLink>
            </li>
            <li class="nav-item">
              <NavLink className="nav-link" to="/records/">All sales</NavLink>
            </li>
            <li class="nav-item">
              <NavLink className="nav-link" to="/records/employee/">Sales by employee</NavLink>
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
