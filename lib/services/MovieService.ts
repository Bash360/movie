import { IMovie } from "data/models/IMovie";
import { Movies } from "../data/schema/Movie.schema";

export class MovieService {
  async addMovie(movie: IMovie): Promise<IMovie> {
    const exists = await Movies.findOne({ title: movie.title.toLowerCase() });

    if (exists) throw new Error("movie with title already exists");
    movie = { ...movie, title: movie.title.toLowerCase() };
    const savedMovie = await Movies.create(movie);

    return savedMovie.save();
  }

  async findAll(skip: number, limit: number): Promise<IMovie[] | object> {
    const count = await Movies.find(
      {}
    ).count();
    const movies = await Movies.find({}, { __v: 0, description: 0, released: 0, runtime: 0, rated: 0 }).limit(limit).skip(skip).exec();
    
    return {movies,count};
  }

  async findOne(id: string): Promise<IMovie | object> {
    try {
      const movie = Movies.findById(id);
      if (!movie) throw new Error("Movie with ID not found");
      return movie;
    } catch (error) {
      return { message: "Movie with ID not found" };
    }
  }

  async searchByTitle(search: string): Promise<IMovie | object> {
    try {
      const movies = await Movies.find(
        {
          title: { $regex: search, $options: "i" },
        },
        { __v: 0, description: 0, released: 0, runtime: 0, rated: 0 }
      ).limit(10);

      if (!movies) throw new Error("No Movie");
      return movies;
    } catch (error) {
      return { message: "No Movie" };
    }
  }
  async searchByGenre(search: string): Promise<IMovie | object> {
    try {
      const movies = await Movies.find(
        {
          genre: { $regex: search, $options: "i" },
        },
        { __v: 0, description: 0, released: 0, runtime: 0, rated: 0 }
      ).limit(10);

      if (!movies) throw new Error("No Movie");
      return movies;
    } catch (error) {
      return { message: "No Movie" };
    }
  }
}
