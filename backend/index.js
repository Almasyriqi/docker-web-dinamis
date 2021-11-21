import express from "express";
import db from "./config/db.js"
import productRoutes from "./routes/index.js";
import cors from "cors";

const app = express();

try {
    await db.authenticate();
    console.log('Database connected...');
} catch (error) {
    console.error('connection error:', error);
}

app.use(cors());
app.use(express.json());
app.use(productRoutes);

app.listen(4000, () => console.log('Server running at port 4000'));