import express, { Application, Request, Response } from "express";
const app: Application = express();
require("dotenv").config(); // * This will load all the environment variables at the starting of the application
const port: number = Number(process.env.PORT) || 5174;
import { db_connection } from "./utils/db_connection";
db_connection(); // * Connecting to the database!
// * Importing all the Routes
import { router as UserRoutes } from "./routes/users";

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));

// Routers
app.use("/api/v1/user", UserRoutes); // user routes

app.get("*", function handler(req: Request, res: Response) {
  res.json({ status: "error", message: "no routes matched!" });
});

app.listen(port, () => console.log(`Server is running on PORT : ${port}`));
