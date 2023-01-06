import { Router } from "express";
import { db } from "../utils/db.js";

const urlRouter = Router();

urlRouter.get("/", async (req, res) => {
  const collection = db.collection("url");

  const urls = await collection;

  return res.json({ data: urls });
});

urlRouter.post("/", async (req, res) => {
  const collection = db.collection("Url");

  const urlData = { ...req.body };
  const urls = await collection.insertOne(urlData);

  return res.json({
    message: `Url record (${urls.insertedId}) has been created successfully`,
  });
});
export default urlRouter;
