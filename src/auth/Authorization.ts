export default class Authorization {
  static localStoragePath: string = "auth-token";

  static checkLocalStorageAuth(): boolean {
    const jwt: string | null = localStorage.getItem(this.localStoragePath);
    if (!jwt) {
      return false;
    }
    return true;
  }

  static getLocalStorageAuth(): string | null {
    return localStorage.getItem(this.localStoragePath);
  }

  static writeLocalStorageAuth(jwt: string): void {
    window.localStorage.setItem(this.localStoragePath, jwt);
  }

  static async getUserInfoFromJwt(jwt: string): Promise<string> {
    const sample_username: string = "example";
    return sample_username;
  }

  static async performInitialAuthProcess(dispatch: Function): Promise<boolean> {
    if (!this.checkLocalStorageAuth()) {
      return false;
    }
    const jwt: string = this.getLocalStorageAuth();
    const username = await this.getUserInfoFromJwt(jwt);
    this.updateJWTWithUsername(dispatch, {
      username,
      jwt
    });
    return true;
  }

  static async performLogin(
    dispatch: Function,
    user_credentials: { username: string; password: string }
  ): Promise<boolean> {
    if (!user_credentials.username || !user_credentials.password) {
      return false;
    }
    // Call out for JWT using user_credentials
    const jwt: string = "";
    this.writeLocalStorageAuth(jwt);
    // Using jwt, call out for user information
    const username: string = "";
    // Update auth state with user info and jwt
    this.updateJWTWithUsername(dispatch, {
      username,
      jwt
    });
    return true;
  }

  static updateJWTWithUsername(
    dispatch: Function,
    payload: { jwt: string; username: string }
  ): void {
    dispatch({
      type: "UPDATE_JWT_WITH_USERNAME",
      payload: {
        ...payload,
        loggedIn: true
      }
    });
  }
}
