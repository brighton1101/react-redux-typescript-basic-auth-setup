import * as React from "react";
import LoginContainer from "./components/LoginContainer";
import "./styles.css";

import PropTypes from "prop-types";
import { connect } from "react-redux";

interface AppProps {
  loggedIn: boolean;
  dispatch: Function;
}

function App({ dispatch, loggedIn }: AppProps) {
  return <div className="App">{!loggedIn && <LoginContainer />}</div>;
}

App.propTypes = {
  dispatch: PropTypes.func.isRequired,
  loggedIn: PropTypes.bool.isRequired
};

const mapStateToProps = (state: any) => {
  return {
    loggedIn: state.auth.loggedIn
  };
};
export default connect(mapStateToProps)(App);
