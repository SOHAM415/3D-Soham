import express from "express";
import cors from "cors";
import eclipsesRoute from "./routes/eclipses.js";

const app = express();


app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Astro backend running");
});

app.use("/api/eclipses", eclipsesRoute);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});

