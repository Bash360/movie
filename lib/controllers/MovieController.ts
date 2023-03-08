import { Application, Request, Response } from "express";
import { Routes } from "../utils/routes";
import { MovieService } from "../services/MovieService";
import { addMovieValidator } from "../data/dtos/add-movie-dto";
import {queryValidator} from '../data/dtos/pagination-query-dto'

export class MovieController {
  private app?: Application = null;
  private readonly movieService = new MovieService();

  constructor(app: Application) {
    this.app = app;
  }

  /**
   * route
   */
  public route() {
    this.AddMovies();
    this.GetMovies();
  }

  /**
   * @method: POST
   */

  private AddMovies(): void {
    this.app.post(Routes.ADD_MOVIE, async (req: Request, res: Response) => {
      const error = addMovieValidator(req.body);
      if (error) {
        return res.status(400).json(error.message);
      }

      const movie = await this.movieService.addMovie(req.body);

      res.status(201).json(movie);
    });
  }

  /**
   * @method: GET
   */

  private GetMovies(): void {
    this.app.get(Routes.GET_ALL_MOVIES, async (req: Request, res: Response) => {
      const error = queryValidator(req.query);
    
      if (error) {
        return res.status(400).json(error.message);
      }
  const { skip, limit } = req.query;
      const movie = await this.movieService.findAll(+skip,+limit);

      res.status(201).json(movie);
    });
  }
  
}
