import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Signin from './components/user/Signin'
import Register from './components/user/Register';
import Profile from './components/user/Profile';
import Navbar from './components/user/Navbar';
import Home from './components/user/Home';
import Alldoctors from './components/user/Alldoctors';


function App() {


  return (
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Signin/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path ='/Alldoctors' element = {<Alldoctors/>}/>
          <Route path='/register' element={<Register />} />
          <Route path='/user-profile' element={<Profile />} />
        </Routes>
      </BrowserRouter>
  )
}
export default App;
