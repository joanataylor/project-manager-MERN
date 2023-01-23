const express = require("express");
const app = express();

//ability to use .env {port of choice}
const dotenv = require("dotenv");
dotenv.config();

const cors = require("cors");
app.use(cors(), express.json());

const connectDb = require('./config/mongoose.config')
connectDb()
// require('./server/routes/person.routes')(app) <- another version
const projectRouter = require("./routes/project.routes");
app.use("/api", projectRouter);

// const port = 8000;
const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`Listening on port: ${port}`));
