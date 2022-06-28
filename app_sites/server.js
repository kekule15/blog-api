require("dotenv").config(); 

const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const user = require("./User/userController");
const blog = require("./blog/blogController")


const app = express();

app.use(express.json())
app.use(cookieParser())

app.use("/api/app", user);
// app.use("/api/app", blog)



const uri = process.env.DATABASE_URLLink;
mongoose.Promise = global.Promise;
mongoose.connect(uri,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
)
    .then(() => {
        console.log("Successfully connected to the database");
    })
    .catch((err) => {
        console.log("Could not connect to the database. Error...", err);
        // process.exit();
    });

const port = process.env.PORT || 5000
app.listen(port, () => {
    console.log(process.env.DATABASE_URLLink);
    console.log(`Listening on ${port}`);
  
})

