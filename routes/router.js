const express = require("express");
const router = express.Router();
const { Restaurant } = require("../models/index");

router.get("/restaurants/:id", async (request, response) => {
  const respond = await Restaurant.findByPk(request.params.id);
  response.json(respond);
});
router.post("/restaurants", async (request, response) => {
  const respond = await Restaurant.create(request.body);
  response.json(respond);
});
router.put("/restaurants/:id", async (request, response) => {
  const respond = await Restaurant.update(request.body.update, {
    where: request.body.where,
  });
  response.json(respond);
});
router.delete("/restaurants/:id", async (request, response) => {
  const respond = await Restaurant.destroy({
    where: { id: request.params.id },
  });
  response.json(respond);
});
module.exports = router;
