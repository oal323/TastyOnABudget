import React, { Component } from 'react'
import TextField from '@mui/material/TextField';
import { Button, IconButton, Icon, Card, Grid, Typography, CardMedia, Autocomplete, CardActions, CardHeader, CardContent, CardActionArea, Select, MenuItem } from '@mui/material';
import RestAPI from '../RestAPI';
import { Link } from 'react-router-dom';
import jwt from 'jwt-decode';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons';
import { faThumbsUp as regularFaThumbsUp, faThumbsDown as regularFaThumbsDown } from '@fortawesome/free-regular-svg-icons';
import regular from '@fortawesome/react-fontawesome';
import solid from '@fortawesome/react-fontawesome';
import "../styles/Recipes.css";
import SearchIcon from '@mui/icons-material/Search';
import DisLike from '@mui/icons-material/ThumbDownOffAlt';
import Like from '@mui/icons-material/ThumbUpOffAlt';
import { margin } from '@mui/system';



const RecipeCard = ({ recipe, numCards, user }) => {
    const [liked, setLiked] = React.useState(false)
    const [disliked, setDisliked] = React.useState(false)

    React.useEffect(() => {
        setLiked(recipe.likedBy ? recipe.likedBy.includes(user.id.toString()) : false)
        setDisliked(recipe.dislikedBy ? recipe.dislikedBy.includes(user.id.toString()) : false)
    }, [])
    const putLikedRecipie = (id) => {
        if (sessionStorage.getItem("user") !== null) {
            return RestAPI.putLikedRecipie(user.id, id)
        } else {
            alert("Must be logged in");
            return;
        }


    }

    const putDislikedRecipie = (id) => {
        if (sessionStorage.getItem("user") !== null) {
            RestAPI.putDislikedRecipie(user.id, id)
        } else {
            alert("Must be logged in");
            return;
        }
    }

    return (
        <Grid item sm={12 / numCards}>
            <Card sx={{ width: 550, height: 400 }} style={{ width: '100%', margin: '10px' }}>
                <CardActionArea >
                    <Link to={`/recipe/${recipe.id}`}>
                        <CardHeader
                            title={recipe.label}
                        />
                    </Link>
                    <CardContent alignItems='center' >
                        <CardMedia
                            square='false'
                            component="img"
                            height="200"
                            image={recipe.thumbnail} />

                        <CardActions>
                            <IconButton
                                onClick={() => {
                                    setLiked(!liked);
                                    putLikedRecipie(recipe.id)
                                }
                                }>
                                {liked
                                    ? <FontAwesomeIcon icon={faThumbsUp} />
                                    : <FontAwesomeIcon icon={regularFaThumbsUp} />
                                }
                            </IconButton>
                            <IconButton onClick={() => {
                                setDisliked(!disliked);
                                putDislikedRecipie(recipe.id)
                            }}>
                                {disliked
                                    ? <FontAwesomeIcon icon={faThumbsDown} />
                                    : <FontAwesomeIcon icon={regularFaThumbsDown} />
                                }
                            </IconButton>
                        </CardActions>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Grid>
    )
}


export default RecipeCard
