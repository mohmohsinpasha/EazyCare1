import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Signin from './components/user/Signin'
import Register from './components/user/Register';
import Profile from './components/user/Profile';
import { useState, useEffect } from 'react';
import UserInfo from './components/user/UserInfo';
function App() {


  return (
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Signin/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/user-profile' element={<Profile/>}/>
      </Routes>
      {/* {edit && <UserInfo onSave={onSave}  onClose={handleEdit} data={data}/>} */}
      </BrowserRouter>
      
      
 

    
  )

    

}

export default App;
