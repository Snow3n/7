import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

export const Login = () => {
    const [form, setForm] = useState({
        login: "",
        password: "",
    });

    const [error, setError] = useState(false);

    const history = useHistory();

    const handleInputLogin = (e) => {
        setForm({ ...form, login: e.target.value })
    }

    const handleInputPassword = (e) => {
        setForm({ ...form, password: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axios({ method: "post", url: "http://localhost:4000/user", headers: { 'Content-Type': 'application/json', mode: 'no-cors' }, data: { login: form.login, password: form.password } })
            .then((res) => {
                if (res.status === 200) {
                    history.push("/profile");
                }
            })
            .catch((err) => {
                setError(true);
            })
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="login">login</label>
                <input id="login" name="login" type="text" placeholder="Enter your login" onChange={handleInputLogin} value={form.login} />
                <label htmlFor="password">password</label>
                <input id="password" name="password" type="password" placeholder="Enter your password" onChange={handleInputPassword} value={form.password} />
                <input type="submit" />
            </form>
            {error && (
                <div className="error">
                    <h3>Some Error</h3>
                </div>
            )}
        </div>
    );
}