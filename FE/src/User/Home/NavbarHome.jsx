import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faBell } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
export const NavbarHome = () => {
    return(
        <>
            <nav
        className="navbar navbar-expand-lg navbar-light bg-light "
        style={{
          borderBottom: "0.4px solid #b2e6f3",
          position: "sticky",
          width: "100%",
          top: "0",
          zIndex: 10,
          boxShadow: "0 0.5rem 1rem rgba(0,0,0,0.15)",
          
        }}
      >
        <Link className="navbar-brand ml-3 mr-5" to={"/home"}>
          <img src="http://localhost:5173/logo.png" alt="logo" width={60} />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li
              className="nav-item mr-3 font-weight-bold active-nav"
              style={{ fontSize: "18px" }}
            >
              <a className="nav-link main-color-bold " href="#">
                Home 
              </a>
            </li>
            <li
              className="nav-item mr-3  main-color"
              style={{ fontSize: "18px" }}
            >
              <a className="nav-link main-color-bold" href="#">
                Link
              </a>
            </li>
            <li
              className="nav-item mr-3 "
              style={{ fontSize: "18px" }}
            >
              <a className="nav-link disabled main-color-bold">Disabled</a>
            </li>
          </ul>
          {/* <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" />
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form> */}

          <div className="d-flex align-items-center right">
            <i style={{ padding: "0 10px", flex: "1" }}>
              <FontAwesomeIcon
              
                icon={faHeart}
                className="me-2 main-color-bold"
                style={{ fontSize: "24px" }}
              />
            </i>
            <i style={{ padding: "0 10px", flex: "1" }}>
              <FontAwesomeIcon
                icon={faBell}
                className="me-2 main-color-bold"
                style={{ fontSize: "24px" }}
              />
            </i>
            <img src="http://localhost:5173/logo.png" alt="avatar" width={40} />
          </div>
        </div>
      </nav>
        </>
    )
}