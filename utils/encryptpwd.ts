import bcrypt from "bcryptjs";

const encryptPwd = async (password: string): Promise<string> => {
  return await bcrypt.hash(password, 12);
};

const validatePassword = async (
  password: string,
  hash: string
): Promise<boolean> => {
  return await bcrypt.compare(password, hash);
};

export { encryptPwd, validatePassword };
