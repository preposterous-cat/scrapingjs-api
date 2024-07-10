import express from "express";
import scrapWebsite from "./scraper.js";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.get("/scrap", scrapWebsite);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
