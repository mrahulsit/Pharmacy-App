import {Route, Routes } from 'react-router-dom';
import Home from './Pages/Home.jsx';
import { Footer, NavMain } from './Components/index.js';
import { Fitness, MustHave, WomenBaby } from './Pages/index.js';

function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/musthave' element={<MustHave />} />
          <Route path='/fitness' element={<Fitness />} />
          <Route path='/women&baby' element={<WomenBaby />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
