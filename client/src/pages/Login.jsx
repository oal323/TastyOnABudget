import React from 'react';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';

const Login = () => {
    const [userName, setUserName] = React.useState("");
    const [pass, setPass] = React.useState("");
    const handleClick = (e) => {
        console.log(userName,pass);
        setPass("");
        setUserName("");
    }
    const handleUsrNameChange = (e) => {
        setUserName(e.target.value);
    }
    const handlePassChange = (e) => {
        setPass(e.target.value);
    }
    return (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>

            <TextField
                id="user-name"
                label="User Name"
                variant="outlined"
                margin="normal"
                value={userName}
                onChange={handleUsrNameChange} 
                
            />

            <TextField
                id="password"
                label="Password"
                variant="outlined"
                margin="normal"
                type = "password"
                value={pass}
                onChange={handlePassChange}

            />

            <Button varient="contained" onClick={handleClick}>Login</Button>
        </div>
    )
}

export default Login
