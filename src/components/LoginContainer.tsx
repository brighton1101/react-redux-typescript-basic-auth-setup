import * as React from "react";
import LoginButton from "./LoginButton";
import LoginModal from "./LoginModal";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Authorization from "../auth/Authorization";

interface LoginContainerProps {
  dispatch: Function;
}

function LoginContainer({ dispatch }: LoginContainerProps) {
  const [showLoginDisplay, setShowLoginDisplay] = React.useState(false);

  const updateShowLoginDisplay = () => {
    setShowLoginDisplay(!showLoginDisplay);
  };

  const performLogin = (username: string, password: string) => {
    Authorization.performLogin(dispatch, { username, password });
  };

  return (
    <div>
      <LoginButton updateLoginDisplay={updateShowLoginDisplay} />
      <LoginModal
        show={showLoginDisplay}
        onHide={updateShowLoginDisplay}
        performLogin={performLogin}
      />
    </div>
  );
}

LoginContainer.propTypes = {
  dispatch: PropTypes.func.isRequired
};

export default connect()(LoginContainer);
