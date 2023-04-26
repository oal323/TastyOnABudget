import React from 'react'
import TextField from '@mui/material/TextField';
import { Button, ButtonGroup, Checkbox } from '@mui/material';
import RestAPI from '../RestAPI';
import { Card, Grid, Typography, CardContent } from '@mui/material';
import BannerImage from "../assets/morefood.png";
import { useNavigate } from 'react-router';
import jwt from 'jwt-decode'

const UserSurvey = () => {
    /**
     * 
     * 
     * User Information 
     * 
     */
    const [calorie_goal, setGoal] = React.useState(""); //Stores the calorie goals of the user
    const [gender, setGender] = React.useState(""); //User gender
    const [height, setHeight] = React.useState(""); //User height 
    const [weight, setWeight] = React.useState(""); //User Weight
    const [age, setAge] = React.useState(""); //Set age
    const [cooking_exp, setCookingExp] = React.useState(""); //set cookign exp
    const [num_days, setNumDays] = React.useState(""); //setNumDays
    const [num_meals, setNumMeals] = React.useState(""); //setNumMeals
    const [activity_level, setActLvl] = React.useState(""); //Set Act Lvl
    const [breakfast, setBreakfast] = React.useState("");
    const [lunch, setLunch] = React.useState("");
    const [dinner, setDinner] = React.useState("");
    const [surveyData, setSurveyData] = React.useState({
        calorie_goal: "",
        gender: "",
        height: "",
        weight: "",
        age: "",
        cooking_exp: "",
        num_days: "",
        num_meals: "",
        activity_level: "",
        breakfast: "",
        lunch: "",
        dinner: ""
    });

    /**
     * 
     * 
     * Error handlers
     * 
     */
    const [calorie_error, setCalorieError] = React.useState(false);
    const [gender_error, setGenderError] = React.useState(false);
    const [height_error, setHeightError] = React.useState(false);
    const [weight_error, setWeightError] = React.useState(false);
    const [age_error, setAgeError] = React.useState(false);
    const [cooking_exp_error, setCookingError] = React.useState(false);
    const [days_error, setDaysError] = React.useState(false);
    const [meals_error, setMealsError] = React.useState(false);
    const [act_lvl_error, setActLvlError] = React.useState(false);


    const handleClick = (e) => {

        if (calorie_goal !== "" || gender !== "" || height !== "" || weight !== "" || age !== "" || cooking_exp !== "" || num_days !== "" || num_meals !== "" || activity_level !== "") {
            setSurveyData({
                userID: "1",
                calorie_goal: calorie_goal,
                gender: gender,
                height: height,
                weight: weight,
                age: age,
                cooking_exp: cooking_exp,
                num_days: num_days,
                num_meals: num_meals,
                activity_level: activity_level,
                breakfast: breakfast,
                lunch: lunch,
                dinner: dinner
            })
            console.log(surveyData)
            RestAPI.putUserData(surveyData).then((res) => {
            })

        }

    }

    /**
     * 
     * Change Handler
     * 
     */

    const handleCalorieChange = (e) => {
        setGoal(e.target.value);
    }
    const handleGenderChange = (e) => {
        setGender(e.target.value);
    }
    const handleWeightChange = (e) => {
        setWeight(e.target.value);
    }
    const handleHieghtChange = (e) => {
        setHeight(e.target.value);
    }
    const handleAgeChange = (e) => {
        setAge(e.target.value);
    }
    const handleExpChange = (e) => {
        setCookingExp(e.target.value);
    }
    const handleDaysChange = (e) => {
        setNumDays(e.target.value);
    }
    const handleMealsChange = (e) => {
        setNumMeals(e.target.value);
        if (e.target.value === "breakfast") {
            setBreakfast(e.target.value);
        }
        if (e.target.value === "lunch") {
            setLunch(e.target.value);
        }
        if (dinner !== "") {
            setDinner(e.target.value === "dinner");
        }
    }
    const handleActLvlChange = (e) => {
        setActLvl(e.target.value);
    }

    /**
     * 
     * Style of the page
     * 
     */

    return (
        <div>
            <div style={{ backgroundImage: `url(${BannerImage})` }}>
                <Grid style={{ marginTop: "20px", marginBottom: "20px" }}>
                    <Card variant='outlined' style={{ maxWidth: 600, padding: "20px 5px ", margin: "0 auto" }}>
                        <CardContent>
                            <Typography gutterBottom variant="h3" align="center" sx={{ fontWeight: 'bold', color: '#7A562E' }} >
                                SURVEY
                            </Typography>
                            <form>
                                <Grid container >
                                    <Grid item xs={12} >
                                        <TextField
                                            id="calories"
                                            label="Enter Calorie Goal"
                                            variant="outlined"
                                            margin="normal"
                                            value={calorie_goal}
                                            onChange={handleCalorieChange}
                                            error={calorie_error}
                                            helperText={calorie_error ? "Enter your Daily Calorie Goal" : ""}
                                            onBlur={() => (calorie_goal === "" || calorie_goal === null ? setCalorieError(true) : setCalorieError(false))}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <ButtonGroup size="lg" id="gender">
                                            <Button
                                                id="male"
                                                label="Male"
                                                value="male"
                                                onClick={handleGenderChange}
                                                error={setGenderError}
                                                helperText={gender_error ? "You must select a gender" : ""}

                                            >Male</Button>
                                            <Button
                                                id="female"
                                                label="FEMALE"
                                                value="female"
                                                onClick={handleGenderChange}
                                                error={setGenderError}
                                                helperText={gender_error ? "You must select a gender" : ""}
                                            >Female</Button>
                                        </ButtonGroup>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            id="weight"
                                            label="Enter weight in lbs"
                                            variant="outlined"
                                            margin="normal"
                                            value={weight}
                                            onChange={handleWeightChange}
                                            error={weight_error}
                                            helperText={weight_error ? "Enter your weight in lbs" : ""}
                                            onBlur={() => (weight === "" || weight === null ? setWeightError(true) : setWeightError(false))}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            id="height"
                                            label="Enter height in inches"
                                            variant="outlined"
                                            margin="normal"
                                            value={height}
                                            onChange={handleHieghtChange}
                                            error={height_error}
                                            helperText={height_error ? "Enter your height inches" : ""}
                                            onBlur={() => (height === "" || height === null ? setHeightError(true) : setHeightError(false))}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            id="age"
                                            label="Enter Age"
                                            variant="outlined"
                                            margin="normal"
                                            value={age}
                                            onChange={handleAgeChange}
                                            error={age_error}
                                            helperText={age_error ? "Enter your Age" : ""}
                                            onBlur={() => (age === "" || age === null ? setAgeError(true) : setAgeError(false))}
                                        />
                                    </Grid>

                                    <Grid item xs={12}>
                                        <ButtonGroup size="lg" id="exp">
                                            <Button
                                                id="NEW"
                                                label="Novice"
                                                value="new"
                                                onClick={handleExpChange}
                                                error={setCookingError}
                                                helperText={cooking_exp_error ? "You must select a experience level" : ""}
                                            >Novice</Button>
                                            <Button
                                                id="imm"
                                                label="Intermediate"
                                                value="imm"
                                                onClick={handleExpChange}
                                                error={setCookingError}
                                                helperText={cooking_exp_error ? "You must select a experience level" : ""}
                                            >Intermediate</Button>
                                            <Button
                                                id="adv"
                                                label="Advanced"
                                                value="adv"
                                                onClick={handleExpChange}
                                                error={setCookingError}
                                                helperText={cooking_exp_error ? "You must select a experience level" : ""}
                                            >Advanced</Button>
                                        </ButtonGroup>
                                    </Grid>

                                    <Grid item xs={12}>
                                        <TextField
                                            id="days"
                                            label="Enter the amount of days you plan on cooking"
                                            variant="outlined"
                                            margin="normal"
                                            value={num_days}
                                            onChange={handleDaysChange}
                                            error={days_error}
                                            helperText={days_error ? "Enter days from 1-7" : ""}
                                            onBlur={() => (num_days === "" || num_days === null || (num_days > 7 && num_days < 0) ? setDaysError(true) : setDaysError(false))}
                                        />
                                    </Grid>

                                    <Grid item xs={12}>
                                        <ButtonGroup size="lg" id="activity">
                                            <Button
                                                id="none"
                                                label="None"
                                                value="none"
                                                onClick={handleActLvlChange}
                                                error={setActLvlError}
                                                helperText={act_lvl_error ? "You must select a Activity Lvl" : ""}
                                            >None</Button>
                                            <Button
                                                id="some"
                                                label="Some (1-3 days)"
                                                value="some"
                                                onClick={handleActLvlChange}
                                                error={setActLvlError}
                                                helperText={act_lvl_error ? "You must select a Activity Lvl" : ""}
                                            >Some (1-3 days)</Button>
                                            <Button
                                                id="alot"
                                                label="Active(3+days)"
                                                value="act"
                                                onClick={handleActLvlChange}
                                                error={setActLvlError}
                                                helperText={act_lvl_error ? "You must select a Activity Lvl" : ""}
                                            >Active(3+days)</Button>
                                        </ButtonGroup>
                                    </Grid>

                                    <Grid item xs={12}>
                                        <ButtonGroup>
                                            <Button
                                                id="break"
                                                label="Breakfast"
                                                value="breakfast"
                                                onClick={handleMealsChange}
                                                error={setMealsError}
                                                helperText={meals_error ? "You must select at least one meal" : ""}
                                            >Breakfast</Button>
                                            <Button
                                                id="lunch"
                                                label="Lunch"
                                                value="lunch"
                                                onClick={handleMealsChange}
                                                error={setMealsError}
                                                helperText={meals_error ? "You must select at least one meal" : ""}
                                            >Lunch</Button>
                                            <Button
                                                id="din"
                                                label="Dinner"
                                                value="dinner"
                                                onClick={handleMealsChange}
                                                error={setMealsError}
                                                helperText={meals_error ? "You must select at least one meal" : ""}
                                            >Dinner</Button>
                                        </ButtonGroup>
                                    </Grid>



                                    <Grid item xs={12}>
                                        <Button variant="contained" fullWidth onClick={handleClick} style={{ padding: "0px,0px,5px,0px", backgroundColor: "#7A562E", marginTop: "10px", marginBottom: "20px" }}>SUBMIT</Button>
                                    </Grid>

                                </Grid>
                            </form>
                        </CardContent>

                    </Card>
                </Grid>
            </div>
        </div>

    )


}

export default UserSurvey