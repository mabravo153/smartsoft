import { Response, Request } from "express";
const notFound = (req: Request, res: Response) => {
  return res.status(404).json({
    msg: "Route does not exist",
  });
};

export default notFound;
