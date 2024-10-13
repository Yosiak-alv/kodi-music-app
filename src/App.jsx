import { Route, Routes, useLocation } from 'react-router-dom';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
const App = () => {
  return (
    <div className='h-screen bg-black text-white p-6'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </div>
    
  )
}

export default App
