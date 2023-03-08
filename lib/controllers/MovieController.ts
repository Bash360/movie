import { Application, Request, Response } from "express";
import { Routes } from "../utils/routes";
import { MovieService } from "../services/MovieService";
import { addMovieValidator } from "../data/dtos/add-movie-dto";
import { queryValidator } from '../data/dtos/pagination-query-dto'
import { titleValidator, genreValidator } from '../data/dtos/search-validator';

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
    this.SearchMoviesByTitle();
    this.SearchMoviesByGenre();
    this.GetMovie();
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
      try {
        const movie = await this.movieService.addMovie(req.body);

        res.status(201).json(movie);
      } catch (error) {
        return res.status(400).json(error.message);
      }
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
      const movie = await this.movieService.findAll(+skip, +limit);

      res.status(200).json(movie);
    });
  }

  /**
   * @method: GET
   */

  private GetMovie(): void {
    this.app.get(Routes.GET_MOVIE, async (req: Request, res: Response) => {
      try {
        const id = req.params.id;
        const movie = await this.movieService.findOne(id);
        if (!movie) throw new Error('Movie with ID not found');
        res.status(200).json(movie);
      } catch (error) {
          return res.status(404).json(error.message);
      }
    });
  }

  /**
   * @method: GET
   */

  private SearchMoviesByTitle(): void {
    this.app.get(
      Routes.SEARCH_MOVIES_BY_TITLE,
      async (req: Request, res: Response) => {
        const error = titleValidator(req.query);

        if (error) {
          return res.status(400).json(error.message);
        }
        try {
          const { title } = req.query;
          const movie = await this.movieService.searchByTitle(title.toString());

          res.status(200).json(movie);
        } catch (error) {
          return res.status(404).json(error.message);
        }
      }
    );
  }

  /**
   * @method: GET
   */

  private SearchMoviesByGenre(): void {
    this.app.get(
      Routes.SEARCH_MOVIES_BY_GENRE,
      async (req: Request, res: Response) => {
        const error = genreValidator(req.query);

        if (error) {
          return res.status(400).json(error.message);
        }
        try {
          const { genre } = req.query;
          const movie = await this.movieService.searchByGenre(genre.toString());

          res.status(200).json(movie);
        } catch (error) {
          return res.status(404).json(error.message);
        }
      }
    );
  }
}
