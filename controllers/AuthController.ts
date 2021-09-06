import { Response, Request, NextFunction } from "express";
import { getRepository } from "typeorm";
import CustomError from "../errors/CustomError";
import UserModel from "../models/UserModel";
import { createToken } from "../utils/jwt";
import { encryptPwd, validatePassword } from "../utils/encryptpwd";

class AuthController {
  async signup(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response | void> {
    let { name, lastName, email, password, money } = req.body;
    let repo = getRepository(UserModel);

    let user = await repo.findOne({
      where: {
        email,
      },
    });

    if (user) {
      next(new CustomError.BadRequestError("Email Must be Unique", 400));
    } else {
      try {
        // almacenar los datos
        let newUser = new UserModel();
        let passwordHash = await encryptPwd(password);
        newUser.name = name;
        newUser.lastName = lastName;
        newUser.email = email;
        newUser.password = passwordHash;
        newUser.money = money;

        await repo.save(newUser);

        let token = createToken(newUser.id);

        return res.status(201).json({
          code: 201,
          msg: {
            userId: newUser.id,
            token,
          },
        });
      } catch (error) {
        console.log(error);
        next(
          new CustomError.BadRequestError(
            "Something went wrong try again later",
            500
          )
        );
      }
    }
  }

  async login(req: Request, res: Response, next: NextFunction) {}
}

export default AuthController;
