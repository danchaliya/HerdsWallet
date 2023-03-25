import http from "http";

// A custom error class that extends the built-in Error class.
export default class RequestError extends Error {
  // The HTTP status code associated with the error.
  public statusCode: number;
  // The name of the error, defaults to an empty string.
  public name: string = "";

  // Constructor that takes the status code and error message.
  constructor(statusCode: number, message: string) {
    // Pass the error message to the parent constructor.
    super(message);

    // Set the status code and name properties of the error instance.
    this.statusCode = statusCode;
    this.name = http.STATUS_CODES[statusCode] || "Bad Request";
  }
}

// A custom error class that extends the RequestError class and represents a 400 Bad Request error.
export class BadRequestError extends RequestError {
  constructor(message: string) {
    // Call the constructor of the parent class with the status code and error message.
    super(400, message);
  }
}

// A custom error class that extends the RequestError class and represents a 500 Internal Server Error.
export class InternalServerError extends RequestError {
  constructor(message: string) {
    // Call the constructor of the parent class with the status code and error message.
    super(500, message);
  }
}
