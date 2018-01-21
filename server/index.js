const express = require("express");
const app = express();
const port = process.env.PORT || 8080;
const bodyParser = require("body-parser");
const path = require('path');

// render from client build
app.use(express.static(path.resolve(__dirname, '../client/build')));
// apply middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// require routes
app.use(require("./routes/index"));

// make server run on port
app.listen(port,()=>{
   console.log(`server running on port ${port}`);
});