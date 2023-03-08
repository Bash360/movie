// create a validation schema with joi
import Joi from "joi";

const titleSchema = Joi.object({
  title: Joi.string().required()
});

const genreSchema = Joi.object({
  genre: Joi.string().required(),
});
function titleValidator(movie) {
  const { error } = titleSchema.validate(movie, { abortEarly: false });
  return error;
}
function genreValidator(movie) {
  const { error } = genreSchema.validate(movie, { abortEarly: false });
  return error;
}

export { titleValidator, genreValidator };
