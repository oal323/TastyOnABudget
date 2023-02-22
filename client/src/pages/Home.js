import React from 'react'
import "../styles/Home.css";
import { Link } from "react-router-dom";
import BannerImage from "../assets/morefood.png";

function Home() {
    return (
        <div className='home' style={{ backgroundImage: `url(${BannerImage})` }}>
            <div className='headerContainer'>
                <div className='header'>
                    <h1> Buy Potato Bake Potato </h1>
                    <p> Curated Meal Plans For All Tatste Buds</p>
                    <Link to="/signup">
                        <button> Sign Up Now</button>
                    </Link>
                    <Link to="/login">
                        <button> Login </button>
                    </Link>

                </div>
            </div>

        </div>
    )
}

export default Home
