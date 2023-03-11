import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import multer from "multer";
import dotenv from "dotenv";
import helmet, { crossOriginResourcePolicy } from "helmet";
import morgan from "morgan";
import path from "path";
import { fileURLToPath } from "url";
import authRoutes from "./routes/auth.js";
import postRoutes from "./Routes/posts.js";
import userRoutes from "./Routes/Users.js";
import { register } from "./controller/auth.js";
import { verifytoken } from "./middleware/auth.js";
import { createPost } from "./controller/posts.js";
import User from "./model/User.js";
import Post from "./model/posts.js";
import { users, posts } from "./data/index.js";

//configuration
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use("/assets", express.static(path.join(__dirname, "public/assets")));

//File Storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/assets");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage });

// Routes with file
app.post("/auth/register", upload.single("picture"), register);
app.post("/posts", verifytoken, upload.single("picture"), createPost);

//Routs
app.post("/auth", authRoutes);
app.post("/Users", userRoutes);
app.post("/posts", postRoutes);

//mongoose setup
const PORT = process.env.PORT || 6001;
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => console.log(`server running on port ${PORT}`));
  })
  .catch((error) => {
    console.log(`${error} did not connect`);
  });
