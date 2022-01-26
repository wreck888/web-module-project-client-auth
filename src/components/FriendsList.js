import axios from "axios";
import React, { useState, useEffect } from "react";
import axiosWithAuth from "../utility/axiosWithAuth";

const FriendsList = () => {

    const [ friends, setFriends ] = useState([]);

    useEffect(() => {
        axiosWithAuth()
          .get("/friends")
            .then((res) => {
                setFriends(res.data);
          })
            .catch((error) => {
                console.error(error);
          });
      }, []);

    return(
        <div>
            <h2>Friends List</h2>
            <ul>
             {

              friends.map(friend=> {
                return  <li>
                {friend.name} --- {friend.email}
            </li>
               
              })
            }
            </ul>
        </div>
    )
}

export default FriendsList;