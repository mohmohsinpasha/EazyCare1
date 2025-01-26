import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Signin from './components/user/Signin'
import Register from './components/user/Register';
import Profile from './components/user/Profile';
import { useState, useEffect } from 'react';
import UserInfo from './components/user/UserInfo';
function App() {
  const [edit, setEdit] = useState(false)
  
  const [data, setData] = useState([])
  let handleEdit = ()=>{
    setEdit(!edit)
  }
  let onSave = (formdata) =>{
    setData(formdata);
    console.log(data)
  }
  useEffect(()=>{
    alert("saved changes",data)
  },[data])
  return (
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Signin/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/user-profile' element={<Profile data={data} handleEdit={handleEdit}/>}/>
      </Routes>
      {edit && <UserInfo onSave={onSave}  onClose={handleEdit} data={data}/>}
      </BrowserRouter>
      
      
 

    
  )

    

}

export default App;
