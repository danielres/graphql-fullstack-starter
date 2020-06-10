import SafeError from "./SafeError";

export default class SigninError extends SafeError {
  constructor(message = "Signin error") {
    super();
    this.message = message;
  }
}
