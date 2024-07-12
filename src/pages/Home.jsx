import 'bootstrap/dist/css/bootstrap.min.css';
// import React from 'react';
import Header from '../Header';
import Banner from '../Banner';
import SimpleSlider from '../Slider';



function Home() {
  return (
    <div className="home">
      <Header />
      <Banner/>
      {/* Other components or content can go here */}
      <SimpleSlider/>
    </div>
  );
}

export default Home;

