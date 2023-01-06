import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { client } from "./utils/db.js";
import urlRouter from "./routers/url-route.js";

async function init() {
  const app = express();
  const port = process.env.PORT || 4000;

  await client.connect();

  app.use(cors());
  app.use(bodyParser.json());
  app.use("/urls", urlRouter);

  app.get("/", (req, res) => {
    res.send("Success!");
  });

  app.listen(port, () => {
    console.log(`server is running on port ${port}`);
  });
}

init();
