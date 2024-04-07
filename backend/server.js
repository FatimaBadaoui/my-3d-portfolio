import express from "express";
import Email from "./models/Email.js";
import cors from "cors";
import connectDB from "./config/connectDB.js";

const app = express();
const { PORT } = process.env;

await connectDB();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/", async (req, res) => {
  const { name, email, message } = req.body;
  const newEmail = await Email.create({ name, email, message });
  res.status(201).json(newEmail);
});

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
