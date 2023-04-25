import React from 'react'
import "../styles/Home.css";
import { Link } from "react-router-dom";
import BannerImage from "../assets/morefood.png";
import PadThai from "../assets/padthai.jpg";
import Panang from "../assets/panang.jpg";
import jwt from 'jwt-decode';
import Typewriter from 'typewriter-effect';
import { Button, Card, Grid, Typography, CardContent } from '@mui/material';
import TextField from '@mui/material/TextField';
import { CardActionArea } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';

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
                            <h1> <Typewriter
                                onInit={(typewriter) => {
                                    typewriter.typeString('Welcome')
                                        .callFunction(() => {
                                            console.log('String typed out!');
                                        })
                                        .pauseFor(500)
                                        .deleteAll()
                                    typewriter.typeString(user.username)
                                        .callFunction(() => {
                                            console.log('String typed out!');
                                        })
                                        .pauseFor(200)
                                        .deleteAll()
                                        .start();

                                }}

                            /></h1>
                            <Link to="/survey">
                                <button> Survey </button>
                            </Link>
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
                            <p> <Typewriter
                                onInit={(typewriter) => {
                                    typewriter.typeString('Curated Meal Plans ')
                                        .callFunction(() => {
                                            console.log('String typed out!');
                                        })
                                        .pauseFor(500)
                                        .deleteAll()
                                    typewriter.typeString('For All Taste Buds')
                                        .callFunction(() => {
                                            console.log('String typed out!');
                                        })
                                        .pauseFor(200)
                                        .deleteAll()
                                        .start();

                                }}
                            /></p>

                            <Link to="/signup">
                                <button> Sign Up Now</button>
                            </Link>
                            <Link to="/login">
                                <button> Login </button>
                            </Link>

                        </div>
                    </div>
                </div>
                <Grid style={{ marginTop: "20px", marginBottom: "20px" }}>

                    <Typography gutterBottom variant="h4" align="center" sx={{ fontWeight: 'bold', color: '#7A562E' }} >
                        Recipes of the Week
                    </Typography>
                    <Grid container >
                        <Grid item xs={12} style={{ marginTop: "20px", marginBottom: "20px" }}>
                            <Card variant='outlined' style={{ maxWidth: 1000, padding: "20px 5px ", margin: "0 auto" }}>
                                <Grid container spacing={4}>
                                    <Grid item xs={6} sm={6} ms={4}>
                                        <Card sx={{ maxWidth: 345 }}>
                                            <CardActionArea>
                                                <CardMedia
                                                    component="img"
                                                    height="140"
                                                    image={PadThai}
                                                    alt="padthai"
                                                />
                                                <CardContent>
                                                    <Typography gutterBottom variant="h5" component="div">
                                                        Pad Thai
                                                    </Typography>
                                                    <Typography variant="body2" color="text.secondary">
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra orci sagittis eu volutpat odio. Ipsum nunc aliquet bibendum enim.
                                                    </Typography>
                                                </CardContent>
                                            </CardActionArea>
                                        </Card>
                                    </Grid>
                                </Grid>

                                <Grid container spacing={4}>
                                    <Grid item xs={6} sm={6} ms={4}>
                                        <Card sx={{ maxWidth: 345 }}>
                                            <CardActionArea>
                                                <CardMedia
                                                    component="img"
                                                    height="140"
                                                    image={Panang}
                                                    alt="padthai"
                                                />
                                                <CardContent>
                                                    <Typography gutterBottom variant="h5" component="div">
                                                        Panang Curry
                                                    </Typography>
                                                    <Typography variant="body2" color="text.secondary">
                                                        Integer maximus interdum posuere. Pellentesque nunc enim, cursus eget erat ac, pharetra ullamcorper erat. Nullam fringilla laoreet bibendum.
                                                    </Typography>
                                                </CardContent>
                                            </CardActionArea>
                                        </Card>
                                    </Grid>
                                </Grid>

                            </Card>
                        </Grid>
                    </Grid>

                </Grid>


            </div>
        )
    }
}

export default Home
