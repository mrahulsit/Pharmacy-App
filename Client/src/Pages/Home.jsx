import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'
import { Button, Form, InputGroup } from 'react-bootstrap';
import '../Styles/Home.css'
import Card from '../Components/Card.jsx'
import CarouselSwipe from '../Components/CarouselSwipe.jsx';
import { wandc , medicine , healthcare, medicare} from '../assets/index.js';
import '../Styles/Card.css'
import Navbar from '../Components/Navbar.jsx'
import Footer from '../Components/Footer.jsx'

const titles = {
    'title1':'Medicines',
    'title2':'HealthCare',
    'title3':'Medicare',
    'title4':'Women and Child',
}

function Home() {
    const sources = [medicine,healthcare,medicare,wandc]
  return (
    <>
    <Navbar />
    <h2 className='aboutText'>What Are you Looking for ?</h2>
      <Form className="mb-5">
            <InputGroup>
               <input
                  type="search"
                  placeholder="Search"
                  className=" search p-3 searchbar ms-auto"
                  aria-label="Search"
                />
                  <Button className='search me-auto d-flex align-items-center' style={{boxShadow:'0 5px 10px rgba(0, 0, 0, 0.226)'}}>
                      <FontAwesomeIcon icon={faMagnifyingGlass} size='xl' style={{ color: "#ffffff" }} />&nbsp;&nbsp;
                      <span className='search-span'>Search</span>
                  </Button>
              </InputGroup>
          </Form>
          <div className="card-container">
            {Object.values(titles).map((title, index) => (
              <Card source={sources[index]} key={index} Title={title} />
            ))}
          </div>
         <CarouselSwipe />
         <Footer/> 
    </>
  )
}

export default Home
