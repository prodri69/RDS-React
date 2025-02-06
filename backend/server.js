import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import db from "./db.js";
import router from "./routes.js";  

dotenv.config();

const PORT = 3005;
const app = express(); 

app.use(cors({origin:"http://localhost:3000"  }));
app.use(express.json());
app.use("/api", router); 

app.get("/", (req, res) => {
    res.send("Server is running");
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});