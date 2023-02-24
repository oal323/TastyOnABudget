import React, {useState} from 'react'
import Logo from '../assets/buypotatobakepotato.png';
import{ Link } from "react-router-dom";
import ReorderIcon from '@mui/icons-material/Reorder';
import "../styles/NavBar.css";


function NavBar() {

    const [openLinks, setOpenLinks] = useState(false);

    const toggleNavbar = ()=> {
        setOpenLinks(!openLinks);
    }

    return (
        <div className='navbar'>
            <div className='leftSide' id={openLinks ? "open" : "close"}> 
                <img src={Logo}  alt="word logo" />
                <div className='hiddenLinks'>
                    <Link to="/"> Home </Link>
                    <Link to="/about"> About</Link>
                    <Link to="/contact"> Contact </Link>
                    <Link to="/signup"> Sign Up </Link>
                    <Link to="/login"> Login </Link>
                </div>
            </div>
            <div className='rightSide'> 
                <Link to="/home"> Home </Link>
                <Link to="/about"> About</Link>
                <Link to="/contact"> Contact </Link>
                <Link to="/signup"> Sign Up </Link>
                <Link to="/login"> Login </Link>
                <button onClick={toggleNavbar}>
                <ReorderIcon/>
                </button>
            </div>
    
        </div>
    )
}

export default NavBar
