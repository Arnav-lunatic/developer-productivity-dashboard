import express from "express";
import { connectDB } from "./config/db.ts";
import authRouter from "./routes/auth.route.ts";
import "dotenv/config";

const app = express();

const PORT = process.env.PORT;

connectDB(process.env.MONGO_URI!);

app.use(express.json());

app.get("/", (req, res) => {
    return res.json({ status: "success" });
});

app.use("/auth/github", authRouter);

app.listen(PORT, () => console.log(`Server is listening on PORT: ${PORT}`));