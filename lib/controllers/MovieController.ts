import { Application, Request, Response } from "express";
import { Routes } from "../utils/routes";
import { MovieService } from "../services/MovieService";


export class MovieController {
  private app?: Application = null;
  private readonly MovieService = new MovieService();

  constructor(app: Application) {
    this.app = app;
  }

  /**
   * route
   */
  public route() {
   this.AddMovies()
  }

  /**
   * @method: POST
   */

  private AddMovies(): void {
    this.app.post(Routes.ADD_MOVIE, async (req: Request, res: Response) => {});
  }

 
}
