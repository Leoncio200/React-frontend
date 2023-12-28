import React, { useState } from 'react'
import { IoMenu } from "react-icons/io5";
import { AiOutlineClose } from "react-icons/ai";
import { FaUserCircle, FaSearch } from "react-icons/fa";
import "./navbar.css";
import { Link, useNavigate } from 'react-router-dom';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const acountOnClick = () => {
        navigate('/user');
    };

  return (
    <div className='navbar'>
        <div className="logo"><Link to='/' className='li'>Japan World</Link></div>
        <div className="search">
            <input type="text"  placeholder='Buscar...'/>
            <FaSearch className='search-icon'/>
        </div>
        <ul className='links'>
            <Link to='/' className='li'>Home</Link>
            <Link to='/' className='li'>Contactos</Link>
            <Link to='/' className='li'>Friends</Link>
            <Link to='/' className='li'>Carrito</Link>
        </ul>
        <div onClick={acountOnClick} className='user-btn'>
            <FaUserCircle />
        </div>
        <div onClick={toggleDropdown} className={'toggle-btn'}>
            {isOpen ? <AiOutlineClose className='icon'/> : <IoMenu className='icon'/>}
        </div>
        <div className={`dropdown-menu ${isOpen ? 'open' : ''}`}>
            <Link  to='/' className='li'>Home</Link>
            <Link  to='/' className='li'>Contactos</Link>
            <Link  to='/' className='li'>Friends</Link>
            <Link  to='/' className='li'>Carrito</Link>
            <Link  to='/' className='acount-btn'>Cuenta</Link>
        </div>
    </div>
  )
}
