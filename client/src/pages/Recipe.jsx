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
import { useParams } from "react-router-dom"
import RestAPI from '../RestAPI';

const  Recipe = () => {
    const [user, setUser] = React.useState();
    const  id  = useParams()
    console.log(id)
    React.useEffect(() => {
        if (sessionStorage.getItem("user") !== null) {
            setUser(JSON.parse(sessionStorage.getItem("user")));
            console.log(user)
        }
        RestAPI.getRecipeByID(id.recipeGUID).then((res) => {console.log(res.data)})
    }, [])
    console.log(id)

        return (
            <div>
                {JSON.stringify(id)}
            </div>
        )
    }


export default Recipe
