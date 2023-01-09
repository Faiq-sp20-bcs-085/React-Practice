import React from 'react';
import {useState,useEffect}from 'react';
import axios from 'axios';
import { Button } from '@mui/material';
import { WindowSharp } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';




const Home = () => {
    
const navigate=useNavigate();

let [user,setUser]=useState([])
let [image,setImage]=useState();
let [name,setName]=useState('')

useEffect(()=>{
    axios.get('http://localhost:5000/users').then((res)=>{
        setUser(res.data);


console.log(user);

    }).catch((e)=>{
        console.log(e);
    })
},[])



    return ( <>
      
        {user.map((users,key)=>{
            return(
                <>
               <div className="card">
                <div className="card-img-top">
                   <img src={ `${users.image}`} style={{height:200,width:200}} alt="" />
                    </div>
                    <div className="card-body">
                        <h4>{users.name}</h4>
                    </div>
               
               </div>

                </>
            )
        })}

     <input type="file"     onChange={(e)=>{
        setImage(e.target.files[0])
       }  }  />

      <input type="text" placeholder='Enter name' value={name} onChange={(e)=>{
        setName(e.target.value);
      }} />
      
      <Button sx={{marginTop:'20px'}} variant='contained' color='primary' 
      onClick={()=>{
        // setTimeout(()=>{
            //window.location.reload();
        // },500)
        const formData=new FormData();
        formData.append('Avatar',image);
        formData.append('name',name);
        axios.post('http://localhost:5000/users',formData).then((res)=>{
            window.location.reload();
        }).catch((e)=>{
            console.log(e);
        })
      }}
      > Post </Button>

    </> );
    
}
 
export default Home;