import bcrypt from "bcrypt";

export const hashPassword = async (password: string): Promise<string> => {
  const salt = await bcrypt.genSalt(10);
  return bcrypt.hash(password, salt);
};

export const comparePassword = async (
  password: string,
  hash: string
): Promise<boolean> => {
  return bcrypt.compare(password, hash);
};

export const passwordCheck = (password: string): boolean => {
  const regex = new RegExp(
    "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[.!@#\\$%^&\\*])(?=.{8,})" // Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character
  );
  console.log(regex.test(password));
  return regex.test(password);
};
