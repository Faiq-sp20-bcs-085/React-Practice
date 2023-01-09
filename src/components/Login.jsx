import { Button, Grid, Stack, TextField } from '@mui/material';
import { Box, Container } from '@mui/system';
import React from 'react'
import {useState,useEffect} from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';


const Login = () => {



    const navigate=useNavigate();
    let [email,setEmail]=useState('');
    let [password,setPassword]=useState('');

useEffect(()=>{
    const user=sessionStorage.getItem('token');
    if(user) return navigate('/Profile');
})

    return ( <>
    
    <Container>
     <Grid container justifyContent='center' sx={{marginTop:'40px'}} >
      <Grid item md={4}  >
        <Box sx={{marginTop:'10px',boxShadow:10}} >
         <TextField label='Enter Email'  value={email} onChange={(e)=>{
            setEmail(e.target.value);
         }} />

<TextField label='Enter Password'  value={password} onChange={(e)=>{
            setPassword(e.target.value);
         }} />
               
<Button variant='outlined' color='primary' onClick={()=>{
axios.post('http://localhost:5000/Login',{email,password}).then((res)=>{
sessionStorage.setItem('token',res.data);
navigate('/Profile');
window.location.reload();
}).catch((e)=>{
    console.log(e);
})
}}  >  Submit  </Button>
        </Box>

        


      </Grid>
        
     </Grid>
       
    </Container>
    
    </> );
}
 
export default Login;