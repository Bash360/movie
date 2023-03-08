import { IMovie } from "data/models/IMovie";
import { Movies } from "../data/schema/Movie.schema";

export class MovieService {
  async addMovie(movie): Promise<IMovie> {
    const savedMovie = await Movies.create(movie);

    return savedMovie.save();
  }

  async findAll(skip: number, limit: number): Promise<IMovie[]> {
    return Movies.find({}, { __v: 0 }).limit(limit).skip(skip).exec();
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
      const movies = await Movies.find({
        title: { $regex: search, $options: "i" },
      });

      if (!movies) throw new Error("No Movie");
      return movies;
    } catch (error) {
      return { message: "No Movie" };
    }
  }
  async searchByGenre(search: string): Promise<IMovie | object> {
    try {
      const movies = await Movies.find({
        genre: { $regex: search, $options: "i" },
      });

      if (!movies) throw new Error("No Movie");
      return movies;
    } catch (error) {
      return { message: "No Movie" };
    }
  }
}
