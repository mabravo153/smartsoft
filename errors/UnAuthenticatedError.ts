import CustomApiError from "./CustomApiError";

class UnAuthenticatedError extends CustomApiError {
  constructor(msg: string, statusCode: number) {
    super(msg, statusCode);
    this.statusCode = statusCode;
  }
}

export default UnAuthenticatedError;
