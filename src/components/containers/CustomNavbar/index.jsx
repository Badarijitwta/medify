import "./style.css";
import MedicationIcon from "@mui/icons-material/Medication";
import MyButton from "./../../Button/index";
import { Link } from "react-router-dom";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
export default function CustomNavbar() {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const toggleSideBar = () => {
    setIsSideBarOpen(!isSideBarOpen);
  };

  return (
    <>
      <div className="top-text-main">
        <h5 id="top-text-main-header">
          The health and well-being of our patients and their health care team
          will always be our priority, so we follow the best practices for
          cleanliness.
        </h5>
      </div>
      <nav className="navbar-main">
        <Link id="logo-text-wrapper">
          <MedicationIcon />
          <h3 id="nav-logo-text">Medify</h3>
        </Link>
        <ul id="navbar" className={isSideBarOpen ? "active" : "inactive"}>
          <li>
            <Link className="nav-link">Find Doctors</Link>
          </li>
          <li>
            <Link className="nav-link">Hospitals</Link>
          </li>
          <li>
            <Link className="nav-link">Medicines</Link>
          </li>
          <li>
            <Link className="nav-link">Surgeries</Link>
          </li>
          <li>
            <Link className="nav-link">Software for Provider</Link>
          </li>
          <li>
            <Link className="nav-link">Facilities</Link>
          </li>
          <li>
            <Link className="nav-link">
              <MyButton text={"My Bookings"} />
            </Link>
          </li>
        </ul>
        <div id="mobile" onClick={toggleSideBar}>
          {!isSideBarOpen ? (
            <MenuIcon className="menu-icon" />
          ) : (
            <CloseIcon className="menu-icon" id="wrong-icon" />
          )}
        </div>
      </nav>
    </>
  );
}
