import React, { useState } from 'react';
import axios from 'axios';
import { Routes } from './Router';

export const App = () => {
  const [user, setUser] = useState();

  const sendRequest = () => {
    axios.post("http://localhost:4000/user", { headers: { 'Content-Type': 'application/json', mode: "no-cors" } });
  }

  return (
    <>
      <Routes />
    </>
  );
}