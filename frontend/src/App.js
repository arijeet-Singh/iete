import "./App.css";
import Homepage from "./components/Homepage/Homepage";
import Coordinator from "./components/Coordinator/Coordinator";
import Members from "./components/Members/Members";
import News from "./components/News/News";
import Contact from "./components/Contact/Contact";
import AddNews from "./components/AddNews/AddNews";
import { Switch, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Homepage />
          <Coordinator />
          <Members />
          <News />
          <Contact />
        </Route>
        <Route exact path="/:id">
          <AddNews />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
