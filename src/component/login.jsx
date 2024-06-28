import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import { useState } from 'react';
function Login ()
    {
        const navigate=useNavigate();
        const[name,setName]=useState('');
        const[email,setEmail]=useState('');
        const[pass1,setPass1]=useState('');
         
        function handleChangeEmail(e) {
            setEmail(e.target.value)
        }
        function handleChangepass1(e) {
            setPass1(e.target.value)
        }
        async function handleLogin() {
            const response= await axios.post("http://localhost:5000/Login", {
                email,
                pass1,
        })
        console.log(response)
    }
    return(
        
        <div class="contents" style={{"backgroundImage":"url(bg.png)",'backgroundSize':"cover","height":"100vh"}}>
        <div class="content" style={{"display": "list-item",
                "justifyContent": "center",
                "paddingLeft": "40%",
                "width": "max-content",
                "position": "relative",
                "align": "center",
                "paddingTop": "30px"}}>
        <h1 style={{textAlign:"center"}}>LOGIN </h1>
        <div class="a" style={{"padding": "auto",
                "display": "flex",
                "paddingTop": "30px",
                "justifyContent": "space-between"}}>
            <label for="">Email</label>
            <input type="Email" placeholder="Enter the email" onChange={handleChangeEmail}/>
        </div>
        <div class="b" style={{"padding": "auto",
                "display": "flex",
                "paddingTop": "10px",
                "justifyContent": "space-between"}}>
            <label for="">Password</label>
            <input type="password" placeholder="Enter the password" onChange={handleChangepass1}/>
        </div>
        <div class="c" style={{ "paddingLeft": "230px",
                "paddingTop": "10px"}}><button onClick={handleLogin}>Login</button></div>
        <div class="d">
            <p>If you have not registered</p>
            <a href="./SignUp" style={{"color":"black"}}><button>Signup</button></a>
        </div>
    </div>
    </div>
    )
}

export default Login;