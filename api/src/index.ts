import Express from "express";
import config from "../config";

const express = Express();

const { PORT } = config;

express.get("/", (req, res) => res.send("Hello world!"));

express.listen(PORT, () => {
  console.log(`API ready on http://localhost:${PORT}`);
});
