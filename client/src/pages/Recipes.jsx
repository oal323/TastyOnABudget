import React from 'react'
import TextField from '@mui/material/TextField';
import { Button, Card, Grid, Typography, CardMedia , Autocomplete, CardHeader, CardContent } from '@mui/material';
import RestAPI from '../RestAPI';
import BannerImage from "../assets/morefood.png";
import { useNavigate } from 'react-router';
import jwt from 'jwt-decode';
import SearchIcon from '@mui/icons-material/Search';



const Recipes = () => {
    const [loading, setLoading] = React.useState(false);
    const [recipes, setRecipes] = React.useState([]);
    const [filterText, setFilterText] = React.useState("");
    function unicodeToChar(text) {
        return text.replace(/\\u[\dA-F]{4}/gi,
            function (match) {
                return String.fromCharCode(parseInt(match.replace(/\\u/g, ''), 16));
            });
    }
    
    
    const handleSearch = () => {
        setRecipes([])
        RestAPI.getRecipesSearch(filterText).then((res) => {
            res.data.map((resData) => {
                setRecipes(prev => [
                    ...prev,
                    {
                        label: unicodeToChar(resData.title).replace(/['"]+/g, ''),
                        thumbnail: resData.thumbnail.replace(/['"]+/g, '')
                    }
                ]
                )

            })
        })
    }
    return (
        <div >
            <TextField
                style={{padding:"5px", width:"99%", justifySelf:"center"}}
                onChange={(e)=>{
                    setFilterText(e.target.value);
                }}
                
            />

           <Button
                onClick={()=>handleSearch()}
           
           >
            Search
           </Button>
            <div>
                
                    <Grid
                        container
                        spacing={2}
                        direction="row"
                        justify="flex-start"
                        alignItems="flex-start"
                    >
                {recipes.map((recipe) => (
                        <Grid item xs={6}>
                            <Card style={{width: '100%'}}>
                                <CardHeader
                                    title={recipe.label}
                                />
                                <CardContent>
                                    
                                <CardMedia 
                                square='false' 
                                component="img"
                                height="500"
                                image={recipe.thumbnail} />
                                </CardContent>
                                
                            </Card>
                        </Grid>
                    
                ))}
                </Grid>
            </div>
            

        </div>

    )

}
export default Recipes