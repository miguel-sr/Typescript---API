import express from "express";
import { config } from "dotenv";
config();

const app = express();

const port = process.env.PORT || 8089;

app.listen(port, () => console.log(`listening on port ${port}!`));

app.get("/api/v1", (req, res) => {
  res.send("hello world!");
});
