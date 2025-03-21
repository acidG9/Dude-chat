import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import InputAdornment from '@mui/material/InputAdornment';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { IconButton } from '@mui/material';
import toast from 'react-hot-toast';
import { useAuthStore } from './store/useAuthStore';

const Login = () => {

    const { signup, isSigningUp, login, isLoggingIn } = useAuthStore();

    const [isRegistered, setIsRegistered]= React.useState(true);
    const [showPass, setShowPass]= React.useState(false);
    const [rFormData, setRFormData]= React.useState({
        fullName:"",
        password:"",
        email:"",
    });
    const [lFormData, setLFormData]= React.useState({
        password:"",
        email:"",
    });

    function rValidateForm(){
        if (!rFormData.fullName.trim()) return toast.error("UserName is required");
        if (!rFormData.email.trim()) return toast.error("Email is required");
        if (!/\S+@\S+\.\S+/.test(rFormData.email)) return toast.error("Invalid email format");
        if (!rFormData.password) return toast.error("Password is required");
        if (rFormData.password.length < 6) return toast.error("Password must be at least 6 characters");
    
        return true;
    }

    function lValidateForm(){
        if (!lFormData.email.trim()) return toast.error("Email is required");
        if (!/\S+@\S+\.\S+/.test(lFormData.email)) return toast.error("Invalid email format");
        if (!lFormData.password) return toast.error("Password is required");
        if (lFormData.password.length < 6) return toast.error("Password must be at least 6 characters");
    
        return true;
    }

    function handleSubmit(e){
        e.preventDefault();
        if (!isRegistered && !rValidateForm()) return;
        if (isRegistered && !lValidateForm()) return;
        if (!isRegistered) signup(rFormData);
        if (isRegistered) login(lFormData);
    }

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
                    <form onSubmit={handleSubmit}>
                        <TextField id="outlined-basic" className='login-input' label="Email" variant="outlined" 
                          value={ isRegistered ? (lFormData.email) : (rFormData.email) } 
                          onChange={ isRegistered ? ((e)=> setLFormData({ ...lFormData, email: e.target.value })) : ((e)=> setRFormData({ ...rFormData, email: e.target.value })) }
                        />
                        {isRegistered||(<TextField id="outlined-basic" className='login-input' label="UserName" variant="outlined" 
                          value={ rFormData.fullName }
                          onChange={ (e)=> setRFormData({ ...rFormData, fullName: e.target.value }) }
                        />)}
                        <TextField id="outlined-basic" className='login-input' label="Password" variant="outlined" 
                          type={ showPass ? "text" : "password" }
                          value={ isRegistered ? (lFormData.password) : (rFormData.password) }
                          onChange={ isRegistered ? ((e)=> setLFormData({ ...lFormData, password: e.target.value })) : ((e)=> setRFormData({ ...rFormData, password: e.target.value })) }
                          InputProps={{
                            endAdornment: (
                              <InputAdornment position="end">
                                { showPass ? (<IconButton onClick={()=>setShowPass(!showPass)}><VisibilityOffIcon /></IconButton>) : (<IconButton onClick={()=>setShowPass(!showPass)}><VisibilityIcon /></IconButton>) }
                              </InputAdornment>
                            ),
                          }}
                        />
                        <Button variant="outlined" color="success" type='submit' disabled={isSigningUp || isLoggingIn} >{isRegistered?(<p>Login</p>):(<p>Register</p>)}</Button>
                    </form>
                    {isRegistered?(<p>Don&apos;t have an account...    <span onClick={toggle} >register</span></p>):(<p>Already have an account...    <span onClick={toggle} >login</span></p>)}
                </div>
            </div>
        </div>
    );
};

export default Login;