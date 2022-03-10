const express = require("express");


const {
    bored 
} = require("./services/bored");

const app = express();

// for localhost:3000/bored
app.get("/", (req, res, next) => {
    res.status(200).send("Service is Working!!")
});

// get external service

app.get("/bored", (req, res, next) => {
    bored()
    .then(result => res.status(200).json(result))
    .catch(err => res.status(501).json({
        error: {
            message: err.message, 
            status: err.status,
            method: req.method
        }
    }))
});


app.use((req, res, next) => {
    const error = new Error("NOT FOUND!");
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500).json ({
        error: {
            message: error.message,
            status: error.status,
            method: req.method
        }
    })
});

app.listen(process.env.port, () => {
    console.log(`Server starting on port ${process.env.port} `);
});