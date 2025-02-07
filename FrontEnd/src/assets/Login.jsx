import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const navigate= useNavigate();
    
    return (
        <div className="login-container">
            <div className="login-logo">
                <img src="/bgLess.png" alt="" />
            </div>
            <div className="login-form">
                <div>
                    <h1>Login to your Account</h1>
                    <TextField id="outlined-basic" className='login-input' label="UserName" variant="outlined" />
                    <TextField id="outlined-basic" className='login-input' label="Password" variant="outlined" />
                    <Button variant="outlined" color="success" onClick={
                        ()=>{
                            navigate('app/welcome')
                        }
                    }>Login</Button>
                </div>
            </div>
        </div>
    );
};

export default Login;