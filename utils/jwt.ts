import jwt from "jsonwebtoken";

const createToken = (data: string) => {
  let secret = process.env.SECRET_KEY || "llavesecreta";
  const token = jwt.sign(
    {
      exp: Math.floor(Date.now() / 1000) + 60 * 60,
      user_id: data,
    },
    secret
  );

  return token;
};

const validateToken = (token: any) => {
  let secret = process.env.SECRET_KEY || "llavesecreta";

  return token;
};

export { createToken };
