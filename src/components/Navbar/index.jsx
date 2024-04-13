import "./style.css";
import { RiMedicineBottleLine } from "react-icons/ri";
// import { Link} from "react-router-dom";
import Button from "../Button";

// const CustomLink = (to, children, ...props) => {
//   const resolvedPath = useResolvedPath(to);
//   const isActive = useMatch({
//     path: resolvedPath.pathname,
//     end: true,
//   });
//   return (
//     <li className={isActive ? "active" : ""}>
//       <Link to={to} {...props}>
//         {children}
//       </Link>
//     </li>
//   );
// };

function Navbar() {
  return (
    <>
      <div className="top-text-container">
        <h5>
          The health and well-being of our patients and their health care team
          will always be our priority, so we follow the best practices for
          cleanliness.
        </h5>
      </div>
      <nav className="navbar-wrapper">
        <div className="logo-container">
          <RiMedicineBottleLine style={{ color: "rgba(42, 168, 255, 1)" }} />
          <p style={{ color: "rgba(42, 168, 255, 1)", fontWeight: "bolder" }}>
            Medify
          </p>
        </div>
        <div className="menu-container">
          <ul>
            <li>Find Doctor</li>
            <li>Hospitals</li>
            <li>Medicines</li>
            <li>Surgeries</li>
            <li>Software For Provider</li>
            <li>Facilities</li>
          </ul>
          <Button text={"My Bookings"} />
        </div>
      </nav>
    </>
  );
}

export default Navbar;
