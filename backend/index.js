import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();
const app = express();

// middleware to handle cors
app.use(
  cors({
    origin: process.env.FRONT_END_URL || "http://localhost:5173/",
    method: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// Middleware to handle JSON object in req body
app.use(express.json())

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`server is running at port ${port}`);
});
