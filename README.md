# React-Redux Typescript Auth Container Example

### Essentially, this is just an example for how to create an auth reducer and load auth into app's Redux state.
- Conditionally shows LoginContainer in App Component if not logged in per redux state
- Binds login state to App component
- Binds dispatch to both App / LoginContainer components
- Uses an Auth class' static methods to perform mock login actions
- Separates logic component (LoginContainer) from presentational components (LoginButton and LoginModal)

### Tech Used
- React
- Redux
- react-redux
- react-bootstrap
- Typescript