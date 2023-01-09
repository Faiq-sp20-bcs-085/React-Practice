import React from 'react'

import Menu from './components/MenuBar.jsx'
import {Route,Routes} from 'react-router-dom';
import Home from './components/Home.jsx';
import Login from './components/Login.jsx';
import Profile from './components/Profile.jsx';

function App() {
  return (
    <>

   <Menu />

    <Routes>
     <Route  path='/' element={<Home/>} />   
     <Route path='/Login' element={<Login/>}/>
      <Route path='/Profile' element={<Profile/>}/>

    </Routes>

    
    </>
  );
}

export default App;
