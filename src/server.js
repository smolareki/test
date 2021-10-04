const express = require("express");


const routes = require("./routes")


const app = express();
const port = 9005;

app.use(express.json());
app.use(routes);

app.listen(port, () => {
    console.log("Backend Started")
});