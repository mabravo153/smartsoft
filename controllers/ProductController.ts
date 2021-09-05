import { Response, Request } from "express";

class ProductController {
  async index(req: Request, res: Response): Promise<Response> {
    return res.json({
      code: 200,
      msg: "funciona",
    });
  }
}

export default ProductController;
