import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Header from "./components/Header";
import Settings from "./components/Settings";
import MainContainer from "./components/MainContainer";

const App = () => {
  return (
    <Router>
      <Layout>
        <Header />
        <Switch>
          <Route path="/settings">
            <Settings />
          </Route>
          <Route path="/">
            <MainContainer />
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
};

export default App;
