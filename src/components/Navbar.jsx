import React from 'react'
import reactLogo from '../assets/react.svg'

export default function Navbar(){
    return(
            <nav>
                <img className='nav-img' src={reactLogo} />
                <h1 className='nav-title'>ReactFacts</h1>
                <p className='nav-desc'>React Course - Project 1</p>
            </nav>
    )
}