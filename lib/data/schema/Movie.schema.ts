import { IMovie } from "../models/IMovie";
import mongoose from "mongoose";

const MOVIES = "movies";
const Movies = mongoose.model(
  MOVIES,
  new mongoose.Schema<IMovie>(
    {
      title: { type: String, required: true, trim: true },
      genre: { type: String, required: true, trim: true },
      description: { type: String, required: true, trim: true },
      language: { type: String, required: true, trim: true },
      released: { type: Date, required: true, trim: true },
      runtime: { type: String, required: true, trim: true },
      rated: { type: String, required: true, trim: true },
    },
    { autoIndex: false }
  ).index({ title: "text", genre: "text" })
);

export { Movies };
