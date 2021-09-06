import { Request, Response, NextFunction } from "express";
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

const validateLoginMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let { email, password } = req.body;

  console.log(req.body);

  if (email && password) {
    next();
  } else {
    next(
      new CustomError.BadRequestError("email and password is required", 400)
    );
  }
};

export { validationMiddleware, validateLoginMiddleware };
