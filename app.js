import express from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from 'mongoose';
import UserRoutes from './users/routes.js';

const CONNECTION_STRING = 'mongodb://localhost:27017/food';
mongoose.connect(CONNECTION_STRING);

const app = express();
app.use(cors());

  
app.use(express.json());

UserRoutes(app);
app.listen(4000);