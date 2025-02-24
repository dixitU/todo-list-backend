const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const authRouter = require("./routes/AuthRoutes");
const tokenRouter = require("./routes/TokenRoutes");
const taskRouter = require("./routes/TaskRoutes");

require("dotenv").config();

const app = express();

app.use(cors());

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//v1 API endpoints
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/generateAccess", tokenRouter);
app.use("/api/v1/tasks", taskRouter);

//configure mongoose
mongoose.connect(
  process.env.MONGODB_URI ||
    "mongodb+srv://dixitukani2:Dixit%40123@cluster0.rjsxi.mongodb.net/TodoList?retryWrites=true&w=majority&appName=Cluster0",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
).then(() => {
  console.log('Connected to MongoDB', process.env.MONGODB_URI);
}).catch((error) => {
  console.error('Error connecting to MongoDB', error);
});

app.listen(process.env.PORT || 3001, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});

module.exports = app;
