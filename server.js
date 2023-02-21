const express = require("express"); // Imported the express function
const app = express(); // Captures the return value of express() in app
const { Restaurant } = require("./models/index");
const { sequelize } = require("./db");

const port = 3000;

//TODO: Create your GET Request Route Below:

app.get("/restaurants/:id", async (request, response) => {
  const respond = await Restaurant.findByPk(request.params.id);
  response.json(respond);
});

app.listen(port, () => {
  sequelize.sync();
  console.log("Your server is listening on port " + port);
});
