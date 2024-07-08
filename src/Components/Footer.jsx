import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css';
export default function App() {
  return (
    <MDBFooter style={{ backgroundColor: '#0a4275' }} className='text-center text-lg-start text-white fixed-bottom'>
      <section className='d-flex justify-content-center justify-content-lg-between p-3 border-bottom'>
        <div className='ms-5 d-none d-lg-block'>
          <span>Get connected with us on social networks:</span>
        </div>
        <div>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='white' fab icon='facebook-f' />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='white' fab icon='twitter' />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='white' fab icon='google' />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='white' fab icon='instagram' />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='white' fab icon='linkedin' />
          </a>
          <a href='' className='me-5 text-reset'>
            <MDBIcon color='white' fab icon='github' />
          </a>
        </div>
      </section>

      <section>
        <MDBContainer className='text-center text-md-start mt-4'>
          <MDBRow className='m-1'>
            <MDBCol md='3' lg='4' xl='3' className='mx-auto m-1'>
              <h6 className='text-uppercase fw-bold mb-2'>
                <MDBIcon color='secondary' icon='gem' className='me-3' />
                Company name
              </h6>
              <p>
                Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit
                amet, consectetur adipisicing elit.
              </p>
            </MDBCol>

            <MDBCol md='2' lg='2' xl='2' className='my-auto mx-auto'>
              <h6 className='text-uppercase fw-bold mb-2'>Products</h6>
              <div className='d-flex flex-column gap-1'>
              <a href='#!' className='text-reset'>
                  Angular
                </a>
                <a href='#!' className='text-reset'>
                  React
                </a>
                <a href='#!' className='text-reset'>
                  Vue
                </a>
                <a href='#!' className='text-reset'>
                  Laravel
                </a>
              </div>
            </MDBCol>

            <MDBCol md='3' lg='2' xl='2' className='mx-auto my-auto'>
              <h6 className='text-uppercase fw-bold mb-2'>Useful links</h6>
              <div className='d-flex flex-column gap-1'>
              <a href='#!' className='text-reset'>
                  Pricing
                </a>
                <a href='#!' className='text-reset'>
                  Settings
                </a>
                <a href='#!' className='text-reset'>
                  Orders
                </a>
                <a href='#!' className='text-reset'>
                  Help
                </a>
              </div>
            </MDBCol>

            <MDBCol md='4' lg='3' xl='3' className='mx-auto my-md-auto'>
              <h6 className='text-uppercase fw-bold mb-2'>Contact</h6>
              <div className='d-flex flex-column gap-1'>
              <span>
                <MDBIcon color='white' icon='home' className='me-2' />&nbsp;New York, NY 10012, US
              </span>
              <span>
                <MDBIcon color='white' icon='envelope' className='me-3' />
                info@example.com
              </span>
              <span>
                <MDBIcon color='white' icon='phone' className='me-3' /> + 01 234 567 88
              </span>
              <span>
                <MDBIcon color='white' icon='print' className='me-3' /> + 01 234 567 89
              </span>
              </div>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        &copy; 2021 Copyright:
        <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
          MDBootstrap.com
        </a>
      </div>
    </MDBFooter>
  );
}
