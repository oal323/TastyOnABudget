import React from 'react'
import "../styles/Home.css";
import { Link } from "react-router-dom";
import BannerImage from "../assets/morefood.png";
import jwt from 'jwt-decode'

function Home() {
    const [user, setUser] = React.useState();

    React.useEffect(() => {
        if (sessionStorage.getItem("user") !== null) {
            setUser(JSON.parse(sessionStorage.getItem("user")));
            console.log(user)
        }
    }, [])
    
    if (user) {
        return (
            <div>
                <div className='home' style={{ backgroundImage: `url(${BannerImage})` }}>
                    <div className='headerContainer'>
                        <div className='header'>
                            <h1> Buy Potato Bake Potato </h1>
                            <p> Curated Meal Plans For All Taste Buds</p>
                            <Link to="/signup">
                                <button> Sign Up Now</button>
                            </Link>

                            Welcome {user.username}

                        </div>
                    </div>

                </div>
                <div>

                </div>
            </div>
        )
    } else {


        return (
            <div>
                <div className='home' style={{ backgroundImage: `url(${BannerImage})` }}>
                    <div className='headerContainer'>
                        <div className='header'>
                            <h1> Buy Potato Bake Potato </h1>
                            <p> Curated Meal Plans For All Taste Buds</p>
                            <Link to="/signup">
                                <button> Sign Up Now</button>
                            </Link>
                            <Link to="/login">
                                <button> Login </button>
                            </Link>

                        </div>
                    </div>

                </div>
                <div>

                </div>
            </div>
        )
    }
}

export default Home
