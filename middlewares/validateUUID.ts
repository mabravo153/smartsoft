import { Request, Response, NextFunction } from "express";
import { validate as uuidValidate } from "uuid";
import BadRequestError from "../errors/BadRequestError";

const validateUUID = (req: Request, res: Response, next: NextFunction) => {
  let { id } = req.params;

  if (uuidValidate(id)) {
    next();
  } else {
    next(new BadRequestError("ID Must Be Valid", 400));
  }
};

export default validateUUID;
