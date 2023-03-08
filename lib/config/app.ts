import express from "express";
import { AppController } from "../controllers/AppController";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import { MovieController } from '../controllers/MovieController';

dotenv.config();

class App {
  public app: express.Application;

  public mongoUrl = process.env.MONGO_DB_URI;

  /**
   * Declare controllers objects.
   * */
  private commonRoutes: AppController = new AppController();

  private MovieRoutes: MovieController | null;

  constructor() {
    this.app = express();
    this.config();
    this.mongoSetup();
    this.initRouteClasses();
    this.useRoutes();
  }
  /**
   * Initialize all controllers classes.
   * */
  private initRouteClasses(): void {
    this.MovieRoutes = new MovieController(this.app);
  }

  /**
   * Kindly list your controllers
   * Note: No route should be listed below the commonRoutes
   */
  private useRoutes(): void {
  
    this.MovieRoutes.route();

    this.commonRoutes.route(this.app);
  }

  private config(): void {
    this.app.use(
      cors({
        origin: "*",
        methods: "GET,POST,PUT,DELETE,PATCH",
        credentials: true,
      })
    );
    this.app.enable("trust proxy");
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
  }

  private mongoSetup(): void {
    mongoose
      .connect(this.mongoUrl)
      .then(() => console.log("DB Connection Successful!"))
      .catch((err) => {
        console.log(err);
      });
  }
}

export const PORT = 5000;
export default new App().app;
