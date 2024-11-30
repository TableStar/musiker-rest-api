import dotenv from "dotenv";
dotenv.config();

import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import { initDB } from "./data-source";

const app = express();
const PORT = process.env.PORT;

const startServer = () => {
  try {
    app.use(cors());
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    initDB()

    app.get("/", (req, res) => {
      res.send("hello");
    });
    app.get("/error", (req, res, next) => {
      next(new Error());
    });

    app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
      console.log(err.message);
      res.status(500).json({
        success: false,
        message: err.message || "Internal Server Error",
      });
    });

    app.listen(PORT, () => {
      console.log(`running on port ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

startServer();
