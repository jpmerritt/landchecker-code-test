const express = require("express");
const next = require("next");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const server = express();
    server.get("*", (req, res) => {
      return handle(req, res);
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
