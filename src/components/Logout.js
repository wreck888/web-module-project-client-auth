import React, { useEffect } from "react";
import { useHistory } from 'react-router-dom';

import axiosWithAuth from "../utility/axiosWithAuth";

const Logout = ()=> {
    const { push } = useHistory();

    useEffect(()=> {
        axiosWithAuth()
            .post('/logout')
            .then(resp=>{
                localStorage.removeItem("token");
                push('/login');
            }).catch(error=> {
                console.log(error);
            });
    }, []);
    
    return(
    <div>
    </div>
    );
}

export default Logout;