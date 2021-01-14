const express = require("express");
const app = express();
const cors = require("cors");
const multer = require("multer");

// ROUTES
const indexRoute = require("./routes/index");
const plantsRoute = require("./routes/plants");
const usersRoute = require("./routes/users");

// MIDDLEWARE
app.use(cors());
app.use("/", indexRoute);
app.use("/plants", plantsRoute);
app.use("/users", usersRoute);

// TODO replace with dotenv package stuff probably
// PORT
const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
