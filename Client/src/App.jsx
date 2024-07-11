import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home.jsx'
import Login from './Pages/Login.jsx'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/home' element={<Home />} />
        <Route path='/login' element={<Login/>} />
      </Routes>
    </div>
  )
}

export default App