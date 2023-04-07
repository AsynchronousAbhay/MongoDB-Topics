const mongoose = require('mongoose');

mongoose
    .connect("mongodb://127.0.0.1:27017/firstDB")
    .then(() =>
        console.log("connection estabilished!!!")
    )
    .catch((err) => console.log(err.message));

    