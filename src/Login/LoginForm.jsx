import React, { useState } from 'react'
import './LoginForm.css'
import { FaUser, FaLock } from "react-icons/fa";
import axios from 'axios';
import Cookies from 'js-cookie';
import { MI_URL } from '../config';
import { useNavigate } from 'react-router-dom';

export default function LoginForm() {
    
    const navigate = useNavigate(); 

    function handleSubmit(e) {
        e.preventDefault();

        axios.post(`${MI_URL}/login`, {
            email: e.target.elements.email.value,
            password: e.target.elements.password.value
        })
        .then((response) =>{
            Cookies.set("Rol", response.data.rol)
            Cookies.set("Token", response.data.token)
        })
        .catch((err) => console.log(err))
        .finally(function(){
            if(Cookies.get("Rol") == 2){
             navigate('/component')
            }
        })
    }

  return (
    <div className="body">
        <div className='wrapper'>
            <form action="post" onSubmit={handleSubmit}>
                <h1>Login</h1>
                <div className='input-box'>
                    <input type="email" name='email' placeholder='Email' required/>
                    <FaUser className='icon'/>
                </div>
                <div className='input-box'>
                    <input type="password"  name='password' placeholder='Password' required/>
                    <FaLock className='icon'/>
                </div>

                <div className="remember-forgot">
                    <label><input type="checkbox" />Recordarmelo</label>
                    <a href="#">Olvido su contraseña?</a>
                </div>

                <button type='submit'>Login</button>

                <div className="register-link">
                    <p>No tiene cuenta? <a href="#">Registrarme</a></p>
                </div>
            </form>
        </div>
    </div>
  )
}
