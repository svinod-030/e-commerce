import express from "express";

const healthRoute = express.Router();

healthRoute.route("/").get((req, res) => {
    res.status(200).json({ status: "ok" });
});

export default healthRoute;
