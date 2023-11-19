import React, { useState } from 'react';
import axios from 'axios';
import logo from '../assets/logo_transparent.png';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router';

const RegistrationForm = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState({
        name: '',
        username: '',
        password: '',
        phoneNumber: '',
    });

    const handleInputChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // const response = await axios.post('http://localhost:3001/register', user)
            await axios.post('http://localhost:3001/register', user)
                .then(res => {
                    if (res.data === "exist") {
                        alert("User already registered !!")
                    }
                    else if (res.data === "notexist") {
                        navigate("/home", { state: { id: user.name } })
                    }
                })
                .catch(e => {
                    alert("Wrong Details !!");
                    console.log(e);
                })
            // console.log(response.data); // Assuming the server sends back a success message
            // alert("User registered Successfully !!!");
            // navigate("/");
        }
        catch (error) {
            console.error('Registration failed due to error !!', error);
        }
        // navigate('/');
    };

    return (


        <div className='logBack '>
            <div id='logleftlogo'>
                <img src={logo} alt="" />
            </div>
            <div id='logDiv' className='py-3 '>
                <form onSubmit={handleSubmit}>
                    <img src={logo} alt="" />
                    <h1 className='m-4'>Register a New Employee</h1>

                    <div id='logItem' className='mb-2'>
                        <label>
                            <p>Name</p>
                            <input type="text" name="name" value={user.name} onChange={handleInputChange} placeholder='Enter your Full Name' />
                        </label>
                    </div>
                    <div id="logItem" className='mb-2'>
                        <label>
                            <p>Employee ID</p>
                            <input type="text" name="username" value={user.username} onChange={handleInputChange} placeholder='Employee ID here' />
                        </label>
                    </div>
                    <div id='logItem' className='mb-2'>
                        <label>
                            <p>Password</p>
                            <input type="password" name="password" value={user.password} onChange={handleInputChange} placeholder='Enter your Password ' />
                        </label>
                    </div>
                    <div id="logItem" className='mb-2'>
                        <label>
                            <p>Phone Number</p>
                            <input type="text" name="phoneNumber" value={user.phoneNumber} onChange={handleInputChange} placeholder='+91 XXXXXXXXXX' />
                        </label>
                    </div>
                    <div id='belButt'>
                        <button type='submit' className='mt-4'>Register</button>
                        <p>OR</p>
                        <Link to="/">
                            <button>
                                Login here
                            </button>
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default RegistrationForm;