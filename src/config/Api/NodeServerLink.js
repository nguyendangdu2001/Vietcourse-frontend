import dotenv from "dotenv";
dotenv.config();

export const nodeApiLink = process.env.nodeApiLink || "http://localhost:5000";
