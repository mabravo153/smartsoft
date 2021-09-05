import CustomApiError from "./CustomApiError";

class BadRequestError extends CustomApiError {
  constructor(msg: string, statusCode: number) {
    super(msg, statusCode);
    this.statusCode = statusCode;
  }
}

export default BadRequestError;
