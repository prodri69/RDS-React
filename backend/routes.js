import express from "express";
import db from "./db.js";

const router = express.Router();

router.post("/login", async (req, res) => {
    try {
        const { username, password } = req.body;
        const result = await db.query("SELECT * FROM users WHERE username = $1 AND password = $2", [username, password]);

        if (result.rows.length > 0) {
            const user = result.rows[0];
            res.json({ message: `Welcome back, ${user.username}.` });
        } else {
            res.json({ message: "Wrong username/credentials." });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error." });
    }
});

export default router;