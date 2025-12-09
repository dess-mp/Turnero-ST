import './Navbar.css';
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg d-flex align-items-center fixed-top w-100">
      <div className="container-fluid d-flex align-items-center">

        <Link className="navbar-brand fw-bold fs-3 d-none d-sm-block link-primary" to="/" style={{ color:'#374151' }}>
          Apple Kingdom
        </Link>

        <Link className="navbar-brand d-block d-sm-none" to="/">
          <img src="/assets/logo.png" alt="Logo" width="60" height="50" />
        </Link>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNav">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="mainNav">
          <ul className="navbar-nav ms-auto" style={{ gap:'12px' }}>

            <li className="nav-item">
              <NavLink className="nav-link" to="/" style={{ color:'#374151' }}>
                Inicio
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/ingreso-reparacion" style={{ color:'#374151' }}>
                Ingresar Reparación
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/ver-reparaciones" style={{ color:'#374151' }}>
                Ver Reparaciones
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/clientes" style={{ color:'#374151' }}>
                Clientes
              </NavLink>
            </li>

          </ul>
        </div>

      </div>
    </nav>
  )
}

export default Navbar;
