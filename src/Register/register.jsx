import React, { useState } from 'react'
import './register.css'
import { FaUser, FaLock, FaCalendar } from "react-icons/fa";
import axios from 'axios';
import Cookies from 'js-cookie';
import { MI_URL } from '../config';
import { Link, useNavigate } from 'react-router-dom';
import { MdOutlineDriveFileRenameOutline, MdOutlineAlternateEmail } from "react-icons/md";

export default function Register() {
    const [isActivated, setActivated] = useState(false)
    //const navigate = useNavigate(); 

    const inputOnChange = (e) => {
        if(e.target.value <= 0){
            setActivated(true)
        }
        else
            setActivated(false);
    }

    function handleSubmit(e) {
        e.preventDefault();

        
    }

  return (
    <div className="register-body">
        <div className='register-wrapper'>
            <form action="post" onSubmit={handleSubmit}>
                <h1>Registro</h1>
                <div className='input-box-register'>
                    <input type="text" name='nombre' placeholder='Nombre' required/>
                    <MdOutlineDriveFileRenameOutline className='icon'/>
                </div>
                <div className='input-box-register'>
                    <input type="text"  name='paterno' placeholder='Apellido Paterno' required/>
                    <MdOutlineDriveFileRenameOutline className='icon'/>
                </div>
                <div className='input-box-register'>
                    <input type="text"  name='materno' placeholder='Apellido Materno' required/>
                    <MdOutlineDriveFileRenameOutline className='icon'/>
                </div>
                <div className='input-box-register'>
                    <input className='edad' type="number" onChange={inputOnChange} name='edad' placeholder='Edad' required/>
                    <FaCalendar className='icon'/>
                </div>
                <div className={`alert ${isActivated ? 'activated' : ''}`}>
                    <p>La edad de ser mayor a 0</p>
                </div>
                <div className='input-box-register'>
                    <input type="email"  name='email' placeholder='Email' required/>
                    <MdOutlineAlternateEmail className='icon'/>
                </div>
                <div className='input-box-register'>
                    <input type="password"  name='password' placeholder='Password' required/>
                    <FaLock className='icon'/>
                </div>

                <button type='submit' className='register-btn'>Registrar</button>

                <div className="login-link">
                    <p>Ya tiene cuenta? <Link to="/login">Login</Link></p>
                </div>
            </form>
        </div>
    </div>
  )
}
