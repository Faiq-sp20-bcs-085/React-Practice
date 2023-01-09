import React from 'react'
import {useState,useEffect} from 'react';
import {useNavigate} from 'react-router-dom';

const Profile = () => {
const navigate=useNavigate();
    useEffect(()=>{
        const token=sessionStorage.getItem('token');
        if(!token) return navigate('/Login');
    })

    return ( <>
    <h4>Welcome to Profile.</h4>
    
    </> );
}
 
export default Profile;