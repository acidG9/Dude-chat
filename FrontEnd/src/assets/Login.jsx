import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const [isRegistered, setIsRegistered]=React.useState(true);
    const navigate= useNavigate();

    function toggle(){
        setIsRegistered(!isRegistered);
    }
    
    return (
        <div className="login-container">
            <div className="login-logo">
                <img src="/bgLess.png" alt="" />
            </div>
            <div className="login-form">
                <div>
                    {isRegistered?(<h1>Login to your Account</h1>):(<h1>Register your Account</h1>)}
                    <TextField id="outlined-basic" className='login-input' label="UserName" variant="outlined" />
                    {isRegistered||(<TextField id="outlined-basic" className='login-input' label="Email" variant="outlined" />)}
                    <TextField id="outlined-basic" className='login-input' label="Password" variant="outlined" />
                    <Button variant="outlined" color="success" onClick={
                        ()=>{
                            navigate('app/welcome')
                        }
                    }>{isRegistered?(<p>Login</p>):(<p>Register</p>)}</Button>
                    {isRegistered?(<p>Don&apos;t have an account...    <span onClick={toggle} >register</span></p>):(<p>Already have an account...    <span onClick={toggle} >login</span></p>)}
                </div>
            </div>
        </div>
    );
};

export default Login;