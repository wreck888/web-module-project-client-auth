import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';


const Login = () => {
    const { push } = useHistory();
    const [credit, setCredit] = useState({
        username:"",
        password:""
    });

    const handleChange = (event) => {
        setCredit({
            ...credit,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(credit)
        axios.post('http://localhost:9000/api/login', credit)
        .then(resp =>{
            localStorage.setItem('token', resp.data.payload)
            push('/friendslist')
        })
        .catch(error=> {
            console.log(error)
        })
    }

    return (
                    <div className="login-form">
                        <h2>Log In!</h2>
                        <form onSubmit={handleSubmit}>
                            <label htmlFor='username' >Username:</label>
                            <input
                                id="username"
                                type="text"
                                name="username"
                                onChange={handleChange}
                                
                            />
                            <br/>
                            <label htmlFor='password'>Password:</label>
                            <input
                                id="password"
                                type="password"
                                name="password"
                                onChange={handleChange}
                            />
                            <br/>
                        <button>Log In</button>
                        </form>
                    </div>
                )
        
}

export default Login;