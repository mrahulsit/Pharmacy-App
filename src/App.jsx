import 'bootstrap/dist/css/bootstrap.min.css';
// import React from 'react';
// import Header from './Header';
// import Banner from './Banner';
// import SimpleSlider from './Slider';
import HealthCare from './pages/HealthCare';
import { createBrowserRouter ,RouterProvider} from 'react-router-dom';
import Home from './pages/Home';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    // children: [
    //   // { index: true, element: <Home /> },
    //   {
    //     path: "healthcare",
    //     element: <HealthCare />,
    //   },
    // ],
  },
  {
    path:'/healthcare',
    element:<HealthCare />,
  }
]);



function App() {
  return <RouterProvider router={router} />;
  
}

export default App;

