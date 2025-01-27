import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Signin from './components/user/Signin'
import Register from './components/user/Register';
import Profile from './components/user/Profile';
import Navbar from './components/user/Navbar';
import Home from './components/user/Home';


function App() {


  return (
      <BrowserRouter>
        
        <Routes>
          <Route path='/' element={<Signin />} />
          <Route path='/register' element={<Register />} />
          <Route path='/user-profile' element={<Profile />} />
        </Routes>
      </BrowserRouter>
  )
}
export default App;
