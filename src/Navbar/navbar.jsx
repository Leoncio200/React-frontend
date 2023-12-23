import React, { useState } from 'react'
import { IoMenu } from "react-icons/io5";
import { AiOutlineClose } from "react-icons/ai";
import "./navbar.css";

export default function navbar() {
    const [isOpen, setIsOpen] = useState(false);
    
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

  return (
    <div className='navbar'>
        <div className="logo"><a href="#">Japan World</a></div>
        <ul className='links'>
            <li><a href="#">Home</a></li>
            <li><a href="#">Contactos</a></li>
            <li><a href="#">Friends</a></li>
            <li><a href="#">Carrito</a></li>
        </ul>
        <div onClick={toggleDropdown} className={'toggle-btn'}>
            {isOpen ? <AiOutlineClose className='icon'/> : <IoMenu className='icon'/>}
        </div>
        <div className={`dropdown-menu ${isOpen ? 'open' : ''}`}>
            <li><a href="#">Home</a></li>
            <li><a href="#">Contactos</a></li>
            <li><a href="#">Friends</a></li>
            <li><a href="#">Carrito</a></li>
        </div>
    </div>
  )
}
