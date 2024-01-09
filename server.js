const express = require("express");
const errorHandler = require("./middleware/errorHandler");
const connectDb = require("./config/dbConnection");
const dotenv = require("dotenv").config();

connectDb();
const app =express();

const port = process.env.PORT || 5000;
//provide the parseer for the request for body
app.use(express.json());
app.use("/api/contacts" , require("./routes/contactRoutes"));
app.use(errorHandler);

app.listen(port, () =>{
    console.log(`server running on the port ${port}`)
});
