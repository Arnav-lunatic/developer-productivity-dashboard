import express from "express";
import { connectDB } from "./config/db.ts";
import authRouter from "./routes/auth.route.ts";
import cookieParser from "cookie-parser";
import "dotenv/config";
import { authMiddleware } from "./middleware/auth.middleware.ts";
import { User } from "./models/user.model.ts";
import cors from "cors";
const app = express();
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
const PORT = process.env.PORT;

connectDB(process.env.MONGO_URI!);

app.use(express.json());
app.use(cookieParser());


app.get("/", (req, res) => {
    return res.status(200).json({ success: true, message: "Welcome to the GitHub OAuth App" });
});

app.get("/profile", authMiddleware, async (req:any , res:any) => {
    const user = await User.findById(req.user.id);
    return res.status(200).json({ success: true, message: "You are authenticated", user });
});

app.get("/api/user/data", authMiddleware, async (req: any, res: any) => {
    const user = await User.findById(req.user.id);
    return res.status(200).json({ success: true, user });
});

app.use("/auth/github", authRouter);

app.listen(PORT, () => console.log(`Server is listening on PORT: ${PORT}`));