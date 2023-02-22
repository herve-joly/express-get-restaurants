const express = require("express"); // Imported the express function
const app = express(); // Captures the return value of express() in app

const { sequelize } = require("./db");
const Router = require("./routes/router");
const port = 3000;

//TODO: Create your GET Request Route Below:
app.use(express.json());
app.use("/api", Router);

app.listen(port, () => {
  sequelize.sync();
  console.log("Your server is listening on port " + port);
});
