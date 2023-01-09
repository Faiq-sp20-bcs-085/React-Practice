
import { Facebook, FacebookOutlined, Navigation, Person, VerifiedUser } from '@mui/icons-material';
import { AppBar, Avatar, Fab, IconButton, Tab, Tabs, Toolbar, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { Profiler } from 'react'
import {useState,useEffect} from 'react';
import Image from './Images/logo512.png'
import { Link, NavLink } from 'react-router-dom';

const Menu = () => {



    const [element,setElement]=useState(null);
    const [user,setUser]=useState('');

    useEffect(()=>{
        const token=sessionStorage.getItem('token');
        if(!token) setUser('');
        setUser(token);
    })

    return ( <>
    

    <AppBar position='static' sx={{backgroundColor:'lightgrey'}}>
        <Toolbar sx={{display:'flex',justifyContent:'space-between'}} >
        <Box>
           <Tabs Active='true' textColor='white' indicatorColor='primary' value={element} onChange={(e,val)=>{
            setElement(val);
           }} >
            <Tab  component={NavLink} to='/'  label='Home'  /> 
            
           </Tabs>

</Box>

     {user? <Box> <Avatar sx={{size:'40px'}} > <Person fontSize='large' color='action' /> </Avatar> <Typography variant='body2' sx={{color:'black'}} > Profile </Typography> </Box> : <Avatar> <VerifiedUser/></Avatar> }

            </Toolbar>
    </AppBar>
    
    </> );
}
 
export default Menu;