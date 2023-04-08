import React from 'react'
import '../scss/navbar.css'
import {SiMyanimelist} from 'react-icons/si'
import {AiFillCloseCircle} from 'react-icons/ai'
import {TbGridDots} from 'react-icons/tb'
import { useState } from 'react'

const Navbar = () => {
    const [active, setActive] = useState("navBar")
    // function to toogle navigation
    const showNav = () =>{
        setActive("navBar activeNavbar")
    }
    const removeNavbar = () =>{
        setActive("navBar")
    }
    return (
        <section className='navBarSection'>
            <header className="header flex">
    
                <div className="logoDiv">
                    <a href="#" className='logo flex'>
                        <SiMyanimelist className="icon"/>
                        {/* <h1>MyAnimeList</h1> */}
                    </a>
                </div>
    
            <div className={active}>
                <ul className="navLists flex">
                    <li className="navItem"><a href="#" className="navLink">Home</a></li>
                    <li className="navItem"><a href="#" className="navLink">Package</a></li>
                    <li className="navItem"><a href="#" className="navLink">Prices</a></li>
                    <li className="navItem"><a href="#" className="navLink">Shop</a></li>
                    <li className="navItem"><a href="#" className="navLink">About</a></li>
                
                <button className='btn'>
                    <a href="#">BOOK NOW</a>
                </button>
            </ul>

            <div onClick={removeNavbar} className="closeNavbar">
                <AiFillCloseCircle className='icon'/>
            </div>

            </div>

            <div onClick={showNav} className="toggleNavbar">
            <TbGridDots className='icon'/>
            </div>
            </header>
        </section>
      )
}

export default Navbar