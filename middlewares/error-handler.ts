import { Request, Response, NextFunction } from "express";
import CustomApiError from "../errors/CustomApiError";

const errorHandlerMiddleware = (
  err: CustomApiError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let customError = {
    statusCode: err.statusCode || 500,
    msg: err.message || "Something went wrong try again later",
  };

  return res.status(customError.statusCode).json({ msg: customError.msg });
};

export default errorHandlerMiddleware;
