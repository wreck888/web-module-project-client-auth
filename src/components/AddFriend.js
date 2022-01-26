import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axiosWithAuth from "../utility/axiosWithAuth";

const AddFriend = () => {
    const { push } = useHistory();
    const [friend, setFriend] = useState({
        name:'',
        email:'',
    })

    const handleChange = (event) => {
        setFriend({ 
            ...friend,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        axiosWithAuth()
            .post("/friends", friend)
            .then(res => {
               push('/friendslist')
            })
             .catch((error) => {
                console.error(error);
        });
    }
    return (
        <div>
        <h2>New Friends</h2>
        <div className="friend-form">
                        <h3>Add A New Friend!</h3>
                        <form onSubmit={handleSubmit}>
                            <label htmlFor='name' >Name:</label>
                            <input
                                id="name"
                                type="text"
                                name="name"
                                onChange={handleChange}
                            />
                            <br/>
                            <label htmlFor='email'>Email:</label>
                            <input
                                id="email"
                                type="text"
                                name="email"
                                onChange={handleChange}
                            />
                            <br/>
                        <button>Add Friend</button>
                        </form>
                    </div>
        </div>
    )
}

export default AddFriend;