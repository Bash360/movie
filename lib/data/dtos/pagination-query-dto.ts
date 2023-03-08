// create a validation schema with joi
import Joi from "joi";


const schema = Joi.object({
  skip: Joi.number().required().min(0),
  limit: Joi.number().required().max(1000).min(100),
});
function queryValidator(movie) {
  const { error } = schema.validate(movie, { abortEarly: false });
  return error;
}

export { queryValidator };
