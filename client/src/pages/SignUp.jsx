import React from 'react'
import TextField from '@mui/material/TextField';
import { Button, Card, Grid, Typography, CardContent, Checkbox } from '@mui/material';
import RestAPI from '../RestAPI';
import FormControlLabel from '@mui/material/FormControlLabel';
import BannerImage from "../assets/morefood.png";


const SignUp = () => {

    const [email, setEmail] = React.useState("");
    const [userName, setUserName] = React.useState("");
    const [pass, setPass] = React.useState("");
    const [pass2, setPass2] = React.useState("");
    const [firstName, setFirstName] = React.useState("");
    const [userNameError, setUserNameError] = React.useState(false);
    const [passError, setPassError] = React.useState(false);
    const [emailError, setEmailError] = React.useState(false);
    const [firstNameError, setFirstNameError] = React.useState(false);
    const [lastNameError, setLastNameError] = React.useState(false);



    const handleClick = (e) => {
        if (userName || pass || pass2 || email !== "") {
            RestAPI.addUser(userName, pass, email, firstName).then((res) => {
            }).catch(err => {
                if (err["response"]["status"] === 400) {
                    setUserNameError(true)
                    alert("Username Taken")
                    setUserName("")
                }
                console.log()
            })
        }

        else {
            setPassError(true);
            setUserNameError(true);
            setEmailError(true);
        }
        /* setPass("");
        setUserName(""); */
    }
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const handleFnameChange = (e) => {
        setFirstName(e.target.value);
    }
    const handleUsrNameChange = (e) => {
        setUserName(e.target.value);
    }
    const handlePassChange = (e) => {
        setPass(e.target.value);
    }
    const handlePassChange2 = (e) => {
        setPass2(e.target.value);
    }
    return (
        <div style={{ backgroundImage: `url(${BannerImage})` }}>
            <Grid style={{ marginTop: "20px", marginBottom: "20px" }}>
                <Card variant='outlined' style={{ maxWidth: 450, padding: "20px 5px ", margin: "0 auto" }}>
                    <CardContent>
                        <Typography gutterBottom variant="h3" align="center" sx={{ fontWeight: 'bold', color: '#7A562E' }} >
                            Sign Up
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p" gutterBottom sx={{ textAlign: 'center' }}>
                            Create an account and start planing out your meals!
                        </Typography>
                        <form>
                            <Grid container >
                                <Grid item xs={12}>
                                    <TextField
                                        id="fname"
                                        label="First Name"
                                        variant="outlined"
                                        margin="normal"
                                        fullWidth
                                        required
                                        value={firstName}
                                        onChange={handleFnameChange}
                                        error={firstNameError}
                                        helperText={firstNameError ? "Enter a First Name" : ""}
                                        onBlur={() => (firstName === "" || firstName === null ? setFirstNameError(true) : null)}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        id="user-name"
                                        label="User Name"
                                        variant="outlined"
                                        margin="normal"
                                        fullWidth
                                        required
                                        value={userName}
                                        onChange={handleUsrNameChange}
                                        error={userNameError}
                                        helperText={userNameError ? "Enter a username" : ""}
                                        onBlur={() => (userName === "" || userName === null ? setUserNameError(true) : null)}

                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        id="email"
                                        label="Email"
                                        variant="outlined"
                                        margin="normal"
                                        fullWidth
                                        required
                                        value={email}
                                        onChange={handleEmailChange}
                                        error={emailError}
                                        helperText={emailError ? "Enter a Email" : ""}
                                        onBlur={() => (email === "" || email === null ? setEmailError(true) : null)}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        id="password"
                                        label="Password"
                                        variant="outlined"
                                        margin="normal"
                                        type="password"
                                        fullWidth
                                        required
                                        value={pass}
                                        onChange={handlePassChange}
                                        error={passError}
                                        helperText={passError ? "Enter a password" : ""}
                                        onBlur={() => (userName === "" || userName === null ? setPassError(true) : null)}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        id="password2"
                                        label="Re-type password"
                                        variant="outlined"
                                        margin="normal"
                                        type="password"
                                        fullWidth
                                        required
                                        value={pass2}
                                        onChange={handlePassChange2}
                                        error={passError}
                                        helperText={passError ? "Enter a password" : ""}
                                        onBlur={() => (userName === "" || userName === null ? setPassError(true) : null)}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <FormControlLabel
                                        value="termOfServ"
                                        control={<Checkbox />}
                                        label="Accept the Terms of Service"
                                        labelPlacement="end"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <Button variant="contained" fullWidth onClick={handleClick} style={{ padding: "0px,0px,5px,0px", backgroundColor: "#7A562E", marginTop: "10px", marginBottom: "20px" }}>Sign Up</Button>
                                </Grid>

                            </Grid>
                        </form>
                    </CardContent>

                </Card>
            </Grid>
        </div>
    )
}

export default SignUp
