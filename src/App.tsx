import { Route, Switch } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import { ConnectedRouter } from "connected-react-router";
import Add from "./pages/Add";
import Error from "./pages/Error";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Signin from "./pages/Signin";
import history from "./redux/history";

function App() {
  return (
    <ErrorBoundary FallbackComponent={Error}>
      <ConnectedRouter history={history}>
        <Switch>
          <Route path="/add" component={Add} exact></Route>
          <Route path="/signin" component={Signin} exact></Route>
          <Route path="/" component={Home} exact></Route>
          <Route component={NotFound}></Route>
        </Switch>
      </ConnectedRouter>
    </ErrorBoundary>
  );
}

export default App;
