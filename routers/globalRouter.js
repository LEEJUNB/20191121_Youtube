import express from "express";
import routes from "../routes"
const globalRouter = express.Router();

globalRouter.get(routes.home, (req,res) => res.send("HOME"));
globalRouter.get(routes.join, (req,res) => res.send("JOIN"));

export default globalRouter;