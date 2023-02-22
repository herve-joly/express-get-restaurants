const express = require("express"); // Imported the express function
const app = express(); // Captures the return value of express() in app
const { Restaurant } = require("./models/index");
const { sequelize } = require("./db");

const port = 3000;

//TODO: Create your GET Request Route Below:
app.use(express.json());

app.get("/restaurants/:id", async (request, response) => {
  const respond = await Restaurant.findByPk(request.params.id);
  response.json(respond);
});
app.post("/restaurants", async (request, response) => {
  const respond = await Restaurant.create(request.body);
  response.json(respond);
});
app.put("/restaurants/:id", async (request, response) => {
  const respond = await Restaurant.update(request.body.update, {
    where: request.body.where,
  });
  response.json(respond);
});
app.delete("/restaurants/:id", async (request, response) => {
  const respond = await Restaurant.destroy({
    where: { id: request.params.id },
  });
  response.json(respond);
});

app.listen(port, () => {
  sequelize.sync();
  console.log("Your server is listening on port " + port);
});
