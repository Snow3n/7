import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const Profile = () => {
    const [user, setUser] = useState();

    useEffect(() => {
        axios.get('http://localhost:4000/user', { headers: { 'Content-Type': 'application/json', mode: "no-cors" } }).then((res) => {
            setUser(res.data);
        });
    }, [])

    return (
        <>
            <h1>{`Hello ${user?.login}`}</h1>
        </>
    )
}