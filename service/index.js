const express = require("express");
const app = express();
const cors = require("cors");
const Port =  8880;
const userRoute = require('./src/routes/user')
const connect = require('./src/db')
//db connection
connect();
//preDefine middleware
app.use(cors());
app.use(express.json());

app.use("/user", userRoute);

app.listen(Port, () => console.log(`Server is running on port ${Port}`));
