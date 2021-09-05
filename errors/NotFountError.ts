import CustomApiError from "./CustomApiError";

class NotFoundError extends CustomApiError {
  constructor(msg: string, statusCode: number) {
    super(msg, statusCode);
    this.statusCode = statusCode;
  }
}

export default NotFoundError;
