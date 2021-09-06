import bcrypt from "bcryptjs";

const encryptPwd = async (password: string): Promise<string> => {
  return await bcrypt.hash(password, 12);
};

const validatePassword = async (password: string): Promise<string> => {
  return await bcrypt.hash(password, 12);
};

export { encryptPwd, validatePassword };
