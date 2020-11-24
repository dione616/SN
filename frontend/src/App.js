//styles
import { AppWrapper } from "./views";
//component
import Header from "./components/Header";
import Main from "./components/Main";

import Profile from "./components/Profile";
import Sign from "./components/Sign";
//libs
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Friends from "./components/Friends";

const AppInit = () => {
  return (
    <AppWrapper>
      <Header />
      <Switch>
        <Route exact path="/" render={() => <Main />} />
        <Route path="/sign" render={() => <Sign />} />
        <Route path="/profile" render={() => <Profile />} />
        <Route path="/friends" render={() => <Friends />} />
      </Switch>
      {/* <Footer /> */}
    </AppWrapper>
  );
};
const App = () => {
  return (
    <BrowserRouter>
      <AppInit />
    </BrowserRouter>
  );
};

export default App;
