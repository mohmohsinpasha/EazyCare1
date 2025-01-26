import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Signin from './components/user/Signin'
import Register from './components/user/Register';
import Profile from './components/user/Profile';
import Navbar from './components/user/Navbar';
import Home from './components/user/Home';
function App() {
  return (
    <>
   
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Signin/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/user-profile' element={<Profile/>}/>
        <Route path='/Home' element={<Home/>}/>
      </Routes>
      </BrowserRouter>  
 </>
  )



}

export default App;
