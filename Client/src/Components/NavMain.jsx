import PharmacyLogo from "../assets/PHARMACY.png";
import "../Styles/Navbar.css";
import Sidebar from "./Sidebar";
import "font-awesome/css/font-awesome.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  faCartShopping,
  faMobile,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Login from "../Pages/Login";

function NavMain() {
  return (
    <div>
      <nav
        style={{ backgroundColor: "#00755E" }}
        className="w-100 fixed-top border-0 navbar"
      >
        <div className="d-flex align-items-center justify-content-between">
          <div className="d-flex flex-row align-items-center">
            <Link
              to="/"
              className="d-inline-flex link-body-emphasis text-decoration-none text-white me-3"
            >
              <img src={PharmacyLogo} alt="Pharmacy Logo" className="logo" />
            </Link>
            <div className="horizontal-line"></div>
            <Sidebar />
          </div>

          <div className="text-center d-flex align-items-center text-white margin-navbar">
            <div
              className="px-3 d-flex text-light align-items-center link-tag"
              style={{ boxShadow: "none" }}
            >
              <FontAwesomeIcon
                icon={faMobile}
                size="lg"
                style={{ color: "#ffffff" }}
                className="mt-1"
              />
              &nbsp;&nbsp;&nbsp;
              <Link to="/footer" className="text-decoration-none">
                <span className="cart-name mt-1 text-light">Download App</span>
              </Link>
            </div>

            <div
              className="px-3 d-flex text-light align-items-center link-tag"
              style={{ boxShadow: "none" }}
              size="lg"
            >
              <FontAwesomeIcon
                icon={faUser}
                style={{ color: "#ffffff" }}
                size="lg"
              />
              &nbsp;&nbsp;&nbsp;
              <Link to="#login" className="text-decoration-none cart-name">
                <span>
                  <Login />
                </span>
              </Link>
            </div>

            <div
              className="px-3 d-flex text-light align-items-center link-tag"
              style={{ boxShadow: "none" }}
              size="lg"
            >
              <FontAwesomeIcon
                icon={faCartShopping}
                size="lg"
                style={{ color: "#ffffff" }}
              />
              &nbsp;&nbsp;&nbsp;
              <Link to="/cart" className=" text-decoration-none">
                <span className="cart-name text-light">Cart</span>
              </Link>
            </div>
          </div>
        </div>
      </nav>
      <div className="linktag py-3">
        <Link to="/medicine" className="px-2 text-white">
          Medicine
        </Link>
        <Link to="/healthblogs" className="px-2 text-white">
          Health Blogs
        </Link>
        <Link to="/plus" className="px-2 text-white">
          PLUS
        </Link>
        <Link to="/offers" className="px-2 text-white">
          Offers
        </Link>
        <Link to="/valuestore" className="px-2 text-white">
          Value Store
        </Link>
      </div>
    </div>
  );
}

export default NavMain;
