import { Request, Response, NextFunction } from "express";
import { validateToken } from "../utils/jwt";
import CustomError from "../errors/CustomError";

const authenticateUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let { authorization } = req.headers;

  if (authorization) {
    try {
      const validate = validateToken(authorization);

      next();
    } catch (error) {
      next(new CustomError.UnAuthenticatedError("Authentication invalid", 401));
    }
  } else {
    next(new CustomError.UnAuthenticatedError("No credentials sent!", 401));
  }
};

export default authenticateUser;
