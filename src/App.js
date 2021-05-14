import "./App.css";
import Header from "./Components/Header";
import TinderCards from "./Components/TinderCards";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SwipeButtons from "./Components/SwipeButtons";
import Chats from "./Components/Chats";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/chats">
            <Header backButton="/" />
            <Chats/>
          </Route>
          <Route path="/">
            <Header />
            <TinderCards />
            <SwipeButtons />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
