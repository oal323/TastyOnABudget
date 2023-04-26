import React from 'react'
import TextField from '@mui/material/TextField';
import { Button, Card, Grid, Typography, CardMedia, Autocomplete, CardHeader, CardContent, ButtonBase } from '@mui/material';
import RestAPI from '../RestAPI';
import BannerImage from "../assets/morefood.png";
import { useNavigate } from 'react-router';
import jwt from 'jwt-decode';
import SearchIcon from '@mui/icons-material/Search';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Link } from 'react-router-dom';


const Recipes = () => {
    const [loading, setLoading] = React.useState(false);
    const [recipes, setRecipes] = React.useState();
    const [filterText, setFilterText] = React.useState("");
    const [value, setValue] = React.useState("");
    const [tagsOrTitle, setTagsOrTitle] = React.useState(false);
    const navigate = useNavigate();
    function unicodeToChar(text) {
        return text.replace(/\\u[\dA-F]{4}/gi,
            function (match) {
                return String.fromCharCode(parseInt(match.replace(/\\u/g, ''), 16));
            });
    }

    console.log(filterText)
    const handleSearch = () => {
        setRecipes([])
        
        RestAPI.getRecipesSearchTitle(filterText).then((res) => {
            res.data.map((resData) => {
                setRecipes(prev => [
                    ...prev,
                    {
                        id: resData.id,
                        label: unicodeToChar(resData.title).replace(/['"]+/g, ''),
                        thumbnail: resData.thumbnail.replace(/['"]+/g, '')
                        
                    }
                ]
                )

            })
        })
    }


    return (
        <div style={{display:"flex", justifyContent:"center"}}>
            <div style={{padding:"20px 5px 5px 5px", width:"250px"}}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Select Tag or Title</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={tagsOrTitle}
                    label="Age"
                    onChange={(e) => {setTagsOrTitle(e.target.value)}}
                >
                    <MenuItem value={true}>Tags</MenuItem>
                    <MenuItem value={false}>Title</MenuItem>
                </Select>
            </FormControl>
            
            

            <TextField
                style={{ padding: "5px", width: "99%", justifySelf: "center" }}
                onChange={(e) => {
                    setFilterText(e.target.value);
                }}

            />
            
            <Button
                style={{width:"250px"}}
                onClick={() => handleSearch()}
            >
                Search
            </Button>
            </div>
            <div >
            {!recipes &&
                <div style={{ height: "500px", width: "100%", backgroundColor: "#e0e0e0", padding: "5px" }}>
                    Please enter a recipe name or a tag
                </div>
            }
            {recipes &&
                <div id="test" >

                    <Grid
                        container
                        spacing={2}
                        direction="row"
                        justify="flex-start"
                        alignItems="flex-start"
                    >
                        {recipes.map((recipe) => (
                            <Grid item xs={4}>
                                <Card style={{ width: '100%' }}>
                                    <CardHeader
                                        title={recipe.label}
                                    />
                                     <ButtonBase
                                        
                                        onClick={event => { navigate(`/recipe/${recipe.id}`) }}
                                    >
                                    <CardContent>
                                   
                                        <CardMedia
                                            square='true'
                                            component="img"
                                            height="500"
                                            image={recipe.thumbnail} />
                                    </CardContent>
                                    </ButtonBase>
                                </Card>
                            </Grid>

                        ))}
                    </Grid>
                </div>

            }
        </div>


        </div>

    )

}
export default Recipes