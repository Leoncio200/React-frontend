import React from 'react'
import './LoginForm.css'
import { FaUser, FaLock } from "react-icons/fa";

export default function LoginForm() {
  return (
    <div className='wrapper'>
        <form action="">
            <h1>Login</h1>
            <div className='input-box'>
                <input type="text" placeholder='Username' required/>
                <FaUser className='icon'/>
            </div>
            <div className='input-box'>
                <input type="password" placeholder='Password' required/>
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
  )
}
