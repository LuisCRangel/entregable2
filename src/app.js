// dependencies
const express = require("express");

const tasksRouter = require('./users/user.router')

const port = 9000;
const app = express();
//? localhost:9000/users
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "OK",
  });
});

app.use('/api/v1', tasksRouter)


app.listen(port, () => {
  console.log(`Server started at port ${port}`);
});