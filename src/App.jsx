import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Signin from './components/user/Signin';
import Register from './components/user/Register';
import Profile from './components/user/Profile';
import Navbar from './components/user/Navbar';
import Home from './components/user/Home';
import Alldoctors from './components/user/Alldoctors';
import { Contact } from './components/user/Contact';
import { useState } from 'react';

function App() {
  const [isLogin, setIsLogin] = useState(true);
  console.log(isLogin)

  return (
    <BrowserRouter>
      {isLogin && <Navbar isLogin={isLogin} />}
      <Routes>
        <Route path="/" element={<Signin setIsLogin={setIsLogin} />} />
        <Route path="/home" element={isLogin ? <Home /> : <Navigate to="/" />} />
        <Route path="/alldoctors" element={isLogin ? <Alldoctors /> : <Navigate to="/" />} />
        <Route path="/register" element={<Register />} />
        <Route path="/user-profile" element={isLogin ? <Profile /> : <Navigate to="/" />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
