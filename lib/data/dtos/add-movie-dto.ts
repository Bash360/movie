// create a validation schema with joi
import Joi from "joi";
import { IMovie } from '../models/IMovie';

const schema = Joi.object({
  title: Joi.string().required().lowercase(),
  genre: Joi.string().required(),
  description: Joi.string().required(),
  language: Joi.string().required(),
  released: Joi.date().required(),
  runtime: Joi.string().required(),
  rated: Joi.string().required(),
});
function addMovieValidator(movie) {
  const { error } = schema.validate(movie, { convert:true ,abortEarly: false});
  return error;
}

export { addMovieValidator };