import React from 'react'
import "../styles/Home.css";
import BannerImage from "../assets/morefood.png";
import jwt from 'jwt-decode';
import { Button, Card, Grid, Typography, CardContent, CardHeader } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';
import { useParams } from "react-router-dom"
import RestAPI from '../RestAPI';

const Recipe = () => {
    const [user, setUser] = React.useState();
    const [recipe, setRecipe] = React.useState({});
    const id = useParams()
    console.log(id)

    function unicodeToChar(text) {
        return text.replace(/\\u[\dA-F]{4}/gi,
            function (match) {
                return String.fromCharCode(parseInt(match.replace(/\\u/g, ''), 16));
            });

    }
    function splitText(text) {
        const myArray = text.split(",");
    }

    React.useMemo(() => {
        if (sessionStorage.getItem("user") !== null) {
            setUser(JSON.parse(sessionStorage.getItem("user")));
            console.log(user)
        }
        RestAPI.getRecipeByID(id.recipeGUID).then((res) => {
            console.log(res.data.thumbnail)
            setRecipe(
                {
                    label: unicodeToChar(res.data.title).replace(/['"]+/g, ''),
                    thumbnail: res.data.thumbnail.replace(/['"]+/g, ''),
                    servings: res.data.servings.replace(/['"]+/g, ''),
                    description: unicodeToChar(splitText(res.data.description)).replace(/['"]+/g, '',),
                    ingredients: res.data.ingredients.replace(/['"]+/g, ''),
                    nutrition: res.data.nutrition.replace(/['"]+/g, ''),
                    steps: unicodeToChar(res.data.steps).replace(/['"]+/g, ''),
                }
            )
        })

    }, [])

    return (

        <div style={{ backgroundImage: `url(${BannerImage})` }}>
            <Grid style={{ marginTop: "20px", marginBottom: "20px" }}>
                <Card variant='outlined' style={{ maxWidth: 800, padding: "20px 5px ", margin: "0 auto", marginTop: '10px' }}>
                    <CardContent>

                        <Typography gutterBottom variant="h4" align="center" sx={{ fontWeight: 'bold', color: '#7A562E' }} >
                            {recipe.label}
                        </Typography>
                        <CardMedia
                            square='false'
                            component="img"
                            height="200"
                            image={recipe.thumbnail} />

                        <Typography gutterBottom variant="h5" align="left" sx={{ fontWeight: 'bold', color: '#7A562E', marginTop: '10px' }} >
                            Description
                        </Typography>
                        <Typography gutterBottom variant="p" align="left" sx={{ marginTop: '10px' }} >
                            {recipe.description}
                        </Typography>
                        <Typography gutterBottom variant="h5" align="left" sx={{ fontWeight: 'bold', color: '#7A562E', marginTop: '10px' }} >
                            Servings: {recipe.servings}
                        </Typography>
                        <Typography gutterBottom variant="h5" align="left" sx={{ fontWeight: 'bold', color: '#7A562E', marginTop: '10px' }} >
                            Ingredients
                        </Typography>
                        <Typography gutterBottom variant="p" align="left" sx={{ marginTop: '10px' }} >
                            {recipe.ingredients}
                        </Typography>
                        <Typography gutterBottom variant="h5" align="left" sx={{ fontWeight: 'bold', color: '#7A562E', marginTop: '10px' }} >
                            Steps:
                        </Typography>
                        <Typography gutterBottom variant="p" align="left" sx={{ marginTop: '10px' }} >
                            {recipe.steps}
                        </Typography>
                        <Typography gutterBottom variant="h5" align="left" sx={{ fontWeight: 'bold', color: '#7A562E', marginTop: '10px' }} >
                            Nutritional Information
                        </Typography>
                        <Typography gutterBottom variant="p" align="left" sx={{ marginTop: '10px' }} >
                            {recipe.nutrition}
                        </Typography>


                    </CardContent>
                </Card>
            </Grid>

        </div>

    )
}


export default Recipe