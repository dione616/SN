//libs
import { Route, Switch, BrowserRouter } from "react-router-dom";
//component
import { AppWrapper } from "./views";
import Header from "./components/Header";
import Main from "./components/Main";
import Friends from "./components/Friends";
import Profile from "./components/Profile";
import Sign from "./components/Sign";
//styled-components

import { ThemeProvider } from "styled-components";
import { theme } from "./shared/views/views";
import { Content } from "./components/shared/Content/views";
import { AppBLContextProvider } from "./components/App/layers/business";

const AppInit = () => {
  return (
    <AppWrapper>
      <Header />

      <Content>
        <Switch>
          <Route exact path="/" render={() => <Main />} />
          <Route path="/sign" render={() => <Sign />} />
          <Route path="/profile" render={() => <Profile />} />
          <Route path="/friends" render={() => <Friends />} />
        </Switch>
      </Content>
      {/* <Footer /> */}
    </AppWrapper>
  );
};
const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <AppBLContextProvider>
          <AppInit />
        </AppBLContextProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
