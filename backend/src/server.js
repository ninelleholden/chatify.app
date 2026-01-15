//const express = require('express');

import express from "express";
import dotenv from "dotenv";

import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 3001;

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

/*
app.get("/api/auth/signup", (req, res) => {
    res.send("Signup endpoint");
});

app.get("/api/auth/login", (req,res) => {
    res.send("Login endpoint");
});

app.get("/api/auth/logout", (req,res) => {
    res.send("Logout endpoint");
});

*/



app.listen(PORT, () => console.log("Server running on port: " + PORT));
