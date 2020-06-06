export interface AuthState {
  loggedIn: boolean;
  username: string;
  jwt: string;
}

const InitialAuthState = {
  loggedIn: false,
  username: "",
  jwt: ""
};

export interface PayloadInterface {
  jwt: string | null;
  loggedIn: boolean | null;
  username: boolean | null;
}

export interface ActionInterface {
  type: string;
  payload: PayloadInterface;
}

const auth = (state: AuthState = InitialAuthState, action: ActionInterface) => {
  switch (action.type) {
    case "UPDATE_JWT_WITH_USERNAME":
      console.log("IN REducer");
      return {
        jwt: action.payload.jwt,
        username: action.payload.username,
        loggedIn: action.payload.loggedIn
      };
    default:
      return state;
  }
};

export default auth;
