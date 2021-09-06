import { validate, ValidationError } from "class-validator";
import { plainToClass } from "class-transformer";
import { RequestHandler } from "express";
import CustomError from "../errors/CustomError";

function validationMiddleware(model: any): RequestHandler {
  return (req, res, next) => {
    validate(plainToClass(model, req.body)).then(
      (errors: ValidationError[]) => {
        if (errors.length) {
          const message = errors
            .map((error: ValidationError) =>
              Object.values(error.constraints || "error")
            )
            .join(", ");
          next(new CustomError.BadRequestError(JSON.stringify(message), 400));
        } else {
          next();
        }
      }
    );
  };
}

export default validationMiddleware;
