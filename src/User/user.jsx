import React from 'react'
import './user.css'
import img from '../Assets/nasuverse.png'
import shizuki from '../Assets/shizuki soujuurou.jpg'

export default function User() {
  return (
    <div className='user-body'>
        <div className="user-header">
            <div className="header-background">
                <img src={shizuki} alt="shizuki" />
            </div>
            <div className="img">
                <img src={img} alt="hola" />
                <h1>Juan Antonio dias</h1>
            </div>
        </div>
        <div className="user-content">
            <p>Edad: 30</p>
            <p>Dirección: asdfghj...</p>
            <p>Correo: leoncio@gmail.com</p>
            <p>Telefono: 8716154148</p>
            <div className="option-buttons">
                <div className="edit-user">
                    <h4>Editar</h4>
                </div>
                <div className="password-btn">
                    <h4>Cambiar contraseña</h4>
                </div>
            </div>
        </div>
    </div>
  )
}
