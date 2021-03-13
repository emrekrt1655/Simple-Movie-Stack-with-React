import React from 'react'
import {Link} from 'react-router-dom'
import {StyledNavbar, StyledRightDiv} from './Navbar.style'

const Navbar = () => {
    return (

        <StyledNavbar>
            <Link to='/' > 
            <img src="https://img.icons8.com/doodle/28/000000/popcorn.png" alt='Logo'/>
             </Link>
             <h3 style={{marginLeft:'2.9rem'}}>
                 MOVIE STACK
             </h3>
             <StyledRightDiv>
                 <Link style={{marginRight:'0.3rem'}} to='/aboutus'>
                    About Us
                 </Link>
                 <Link to='/contact'>
                    Contact
                 </Link>
             </StyledRightDiv>
        </StyledNavbar>

    )
}

export default Navbar
