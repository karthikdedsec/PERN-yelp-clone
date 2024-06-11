import express from "express";
import dotenv from "dotenv";
import restaurantsRouter from "./routes/restaurants.route.js";

const app = express();

app.use(express.json());

app.use("/api/v1", restaurantsRouter);

dotenv.config({ path: "config/config.env" });

app.listen(process.env.PORT, () => {
  console.log(`server running on port ${process.env.PORT}`);
});
