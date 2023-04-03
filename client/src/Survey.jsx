import React from 'react'
import TextField from '@mui/material/TextField';
import { Button, ButtonGroup } from '@mui/material';
import RestAPI from '../RestAPI';

const UserSurvey = () =>{


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
    const [breakfast, setBreakfast] = React.useState("")
    const [lunch, setLunch] = React.useState("")
    const [dinner, setDinner] = React.useState("")

    /**
     * 
     * 
     * Error handlers
     * 
     */
    const [calorie_error , setCalorieError] = React.userState(false);
    const [gender_error , setGenderError] = React.userState(false);
    const [height_error , setHeightError] = React.userState(false);
    const [weight_error , setWeightError] = React.userState(false);
    const [age_error , setAgeError] = React.userState(false);
    const [cooking_exp_error , setCookingError] = React.userState(false);
    const [days_error , setDaysError] = React.userState(false);
    const [meals_error , setMealsError] = React.userState(false);
    const [act_lvl_error , setActLvlError] = React.userState(false);


    const handleClick = (e) => {
        if(calorie_goal||gender||height||weight||age||cooking_exp||num_days||num_meals||activity_level!==""){
            RestAPI.addUserData().then((res)=> {
            }).catch(err => {
                if(err["response"]["status"] === 400){

                }
                console.log()
            })
        }
        else{

        }
    }

    /**
     * 
     * Change Handler
     * 
     */

    const handleCalorieChange = (e) =>{
        setGoal(e.target.value);
    }
    const handleGenderChange = (e) =>{
        setGender(e.target.value);
    }
    const handleWeightChange = (e) =>{
        setWeight(e.target.value);
    }
    const handleHieghtChange = (e) =>{
        setHeight(e.target.value);
    }
    const handleAgeChange = (e) =>{
        setAge(e.target.value);
    }
    const handleExpChange = (e) =>{
        setCookingExp(e.target.value);
    }
    const handleDaysChange = (e) =>{
        setNumDays(e.target.value);
    }
    const handleMealsChange = (e) =>{
        setNumMeals(e.target.value);
    }
    const handleActLvlChange = (e) =>{
        setActLvl(e.target.value);
    }
    
    /**
     * 
     * Style of the page
     * 
     */

    return (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',}}>
            <TextField
            id="calories"
            label="Enter Calorie Goal"
            variant="outlined"
            margin="normal"
            value={calorie_goal}
            onChange={handleCalorieChange}
            error={setCalorieError}
            helperText={calorie_error?"Enter your Daily Calorie Goal":""}
            onBlur = {()=>(calorie_goal===""||calorie_goal===null?setCalorieError(true):null)}
            />
            <ButtonGroup size="lg" id="gender">
                <Button
                id="male"
                label="Male"
                value="male"
                onClick={handleGenderChange}
                error={setGenderError}
                helperText={gender_error?"You must select a gender":""}
                />
                <Button
                id="female"
                label="FEMALE"
                value="female"
                onClick={handleGenderChange}
                error={setGenderError}
                helperText={gender_error?"You must select a gender":""}
                />
            </ButtonGroup>
            <TextField
            id="weight"
            label="Enter weight in lbs"
            variant="outlined"
            margin="normal"
            value={weight}
            onChange={handleWeightChange}
            error={setWeightError}
            helperText={weight_error?"Enter your weight in lbs":""}
            onBlur = {()=>(weight===""||weight===null?setWeightError(true):null)}
            />
            <TextField
            id="height"
            label="Enter height in inches"
            variant="outlined"
            margin="normal"
            value={height}
            onChange={handleHieghtChange}
            error={setHeightError}
            helperText={height_error?"Enter your height inches":""}
            onBlur = {()=>(height===""||height===null?setHeightError(true):null)}
            />
            <TextField
            id="age"
            label="Enter Age"
            variant="outlined"
            margin="normal"
            value={age}
            onChange={handleAgeChange}
            error={age_error}
            helperText={age_error?"Enter your Age":""}
            onBlur = {()=>(age===""||age===null?setAgeError(true):null)}
            />
            <ButtonGroup size="lg" id="exp">
                <Button
                id="NEW"
                label="Novice"
                value="new"
                onClick={handleExpChange}
                error={setCookingError}
                helperText={cooking_exp_error?"You must select a experience level":""}
                />
                <Button
                id="imm"
                label="Intermediate"
                value="imm"
                onClick={handleExpChange}
                error={setCookingError}
                helperText={cooking_exp_error?"You must select a experience level":""}
                />
                <Button
                id="adv"
                label="Advanced"
                value="adv"
                onClick={handleExpChange}
                error={setCookingError}
                helperText={cooking_exp_error?"You must select a experience level":""}
                />
            </ButtonGroup>
            <TextField
            id="days"
            label="Enter the amount of days you plan on cooking"
            variant="outlined"
            margin="normal"
            value={num_days}
            onChange={handleDaysChange}
            error={setDaysError}
            helperText={days_error?"Enter days from 1-7":""}
            onBlur = {()=>(num_days===""||num_days===null||(num_days>7&&num_days<0)?setDaysError(true):null)}
            />
            <ButtonGroup size="lg" id="activity">
            <Button
                id="none"
                label="None"
                value="none"
                onClick={handleActLvlChange}
                error={setActLvlError}
                helperText={act_lvl_error?"You must select a Activity Lvl":""}
                />
                <Button
                id="some"
                label="Some (1-3 days)"
                value="some"
                onClick={handleActLvlChange}
                error={setActLvlError}
                helperText={act_lvl_error?"You must select a Activity Lvl":""}
                />
                <Button
                id="alot"
                label="Active(3+days)"
                value="act"
                onClick={handleActLvlChange}
                error={setActLvlError}
                helperText={act_lvl_error?"You must select a Activity Lvl":""}
                />
            </ButtonGroup>
            <ButtonGroup>
            <Button
                id="break"
                label="Breakfast"
                value="breakfast"
                onClick={handleMealsChange}
                error={setMealsError}
                helperText={meals_error?"You must select at least one meal":""}
                />
                <Button
                id="lunch"
                label="Lunch"
                value="lunch"
                onClick={handleMealsChange}
                error={setMealsError}
                helperText={meals_error?"You must select at least one meal":""}
                />
                <Button
                id="din"
                label="Dinner"
                value="dinner"
                onClick={handleMealsChange}
                error={setMealsError}
                helperText={meals_error?"You must select at least one meal":""}
                />
            </ButtonGroup>
            <Button variant="contained" onClick={handleClick} style={{padding:"0px,0px,5px,0px"}}>Submit</Button>
        </div>

    )

}

export default UserSurvey