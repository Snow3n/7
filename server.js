const express = require("express");
const cors = require('cors');

const app = express();

const user = {
    id: 0,
    login: "admin",
    password: "admin",
}

app.use(express.json())
app.use(cors());

app.get("/user", (req, res) => {
    res.send(user);
})

app.post("/user", (req, res) => {
    if (req.body.login === user.login && req.body.password === user.password) {
        res.sendStatus(200);
    }
    else if (req.body.login !== user.login || req.body.password !== user.password) {
        res.sendStatus(403);
    }
    else {
        res.sendStatus(400);
    }
})

app.listen(4000);
