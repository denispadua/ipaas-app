const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const userRoutes = require("./routes/users");
const jobRoutes = require("./routes/jobs");
const connectDatabase = require('./database/database');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(userRoutes);
app.use(jobRoutes);
connectDatabase();

const port = process.env.PORT || 8081

app.listen(port, () => {
  console.log(`its running on http://localhost:${port}/`);
});
