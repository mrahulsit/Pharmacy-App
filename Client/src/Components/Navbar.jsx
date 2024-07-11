import PharmacyLogo from '../assets/PHARMACY.png';
import '../Styles/Navbar.css';
import Sidebar from './Sidebar';
import { Navbar } from 'react-bootstrap';
import 'font-awesome/css/font-awesome.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons/faCartShopping';
import { faMobile, faUser } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import Login from '../Pages/Login';

const NavbarMain = () => {
  return (
    <>
      <Navbar
        style={{ backgroundColor: '#0a4275' }}
        className='w-100 fixed-top border-0 navbar'>
        <div className="d-flex flex-wrap align-items-center justify-content-between">
          <div className="d-flex align-items-center">
            <a href="/" className="d-inline-flex link-body-emphasis text-decoration-none text-white me-3">
              <img src={PharmacyLogo} alt="Pharmacy Logo" className='logo' />
            </a>
            <div className='horizontal-line'></div>
            <Sidebar />
          </div>

          <div className="text-center d-flex align-items-center text-white margin-navbar">
            <div className='px-3 d-flex text-light align-items-center link-tag' style={{ boxShadow: 'none' }}>
              <FontAwesomeIcon icon={faMobile} size="lg" style={{ color: "#ffffff", }} className='mt-1' />&nbsp;&nbsp;&nbsp;
              <span className="cart-name mt-1">Download App</span>
            </div>

            <div className="px-3 d-flex text-light align-items-center link-tag" style={{ boxShadow: 'none' }} size='lg'>
              <FontAwesomeIcon icon={faUser} style={{ color: "#ffffff" }} size='lg' />&nbsp;&nbsp;&nbsp;
              <Link to='#'><span className="cart-name"><Login /></span></Link>
            </div>

            <div className='px-3 d-flex text-light align-items-center link-tag' style={{ boxShadow: 'none' }} size='lg'>
              <FontAwesomeIcon icon={faCartShopping} size="lg" style={{ color: "#ffffff", }} />&nbsp;&nbsp;&nbsp;
              <span className="cart-name">Cart</span>
            </div>
          </div>
        </div>
      </Navbar>
      <div className='linktag py-3'>
        <a href="#" className="px-2 text-white">Medicine</a>
        <a href="#" className="px-2 text-white">Health Blogs</a>
        <a href="#" className="px-2 text-white">PLUS</a>
        <a href="#" className="px-2 text-white">Offers</a>
        <a href="#" className="px-2 text-white">Value Store</a>
      </div>
    </>
  );
};

export default NavbarMain;
