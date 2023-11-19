import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

import logo from '../assets/logo_transparent.png';


const LoginForm = () => {
    const navigate = useNavigate();
    // const [loggedIn, setLoggedIn] = useState(false);

    const [credentials, setCredentials] = useState({
        username: '',
        password: '',
    });

    const handleInputChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            // const response = await axios.post('http://localhost:3001/login', credentials)
            await axios.post('http://localhost:3001/login', credentials)
                .then(res => {
                    if (res.data === "exist") {
                        navigate("/home", { state: { id: credentials.username } })
                    }
                    else if (res.data === "notexist") {
                        alert("User not Registered yet !!");
                    }
                })
                .catch(e => {
                    alert("Wrong credentials !!")
                    console.log(e);
                })
            // console.log(response.data); // Assuming the server sends back a success message
            // alert("Login Successfull !!")
            // setLoggedIn(true);
        } catch (error) {
            alert("Login Failed !! Try again...")
            console.error('Login failed', error);
            console.log(error.request.response)
        }
    };

    // if (loggedIn) {
    //     navigate('/home');
    // }

    return (

        <div className='logBack'>
            <div id='logleftlogo'>
                <img src={logo} alt="" />
            </div>
            <div id='logDiv'>
                <form onSubmit={handleLogin}>
                    <img src={logo} alt="" />
                    <h1>Login here to continue...</h1>

                    <div id='logItem'>
                        <p>Employee ID</p>
                        <input type="text" name="username" value={credentials.username} onChange={handleInputChange} placeholder="Enter your EmployeeId"></input>
                    </div>
                    <div id='logItem'>
                        <p>Password</p>
                        <input type="password" name="password" value={credentials.password} onChange={handleInputChange} placeholder="Enter your Password" ></input>
                    </div>
                    <button type='submit' >Login</button>
                    <div>
                        <p style={{"margin" : "0px"}}>OR</p>
                        <Link to="/register">
                            <button>
                                Register Here
                            </button>
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LoginForm;
