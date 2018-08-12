const express = require("express");
const next = require("next");
const knexConfig = require("./knexfile.js");
const Knex = require("knex");
const bodyParser = require("body-parser");

const knex = Knex(knexConfig.development);
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();
const jsonParser = bodyParser.json();

app
  .prepare()
  .then(() => {
    const server = express();
    server.get("*", (req, res) => {
      return handle(req, res);
    });

    server.post("/properties", jsonParser, async (req, res) => {
      let properties = await knex
        .select(
          "properties.*",
          "addresses.full_address",
          "addresses.state",
          "addresses.postcode",
          "lgas.name as lga_name",
          "lgas.long_name as lga_long_name"
        )
        .from("properties")
        .leftJoin("addresses", "properties.id", "addresses.property_id")
        .leftJoin("lgas", "properties.lga_code", "lgas.code");
      res.json({ properties });
      res.end();
    });

    server.listen(8302, err => {
      if (err) throw err;
      console.log(">landchecker-code-sample Ready on http://localhost:8302");
    });
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });
