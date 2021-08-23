import { BrowserRouter, Route } from "react-router-dom";
import "./styles/App.scss";
import GameArea from "./components/pages/GameArea";
import Help from "./components/pages/Help";

const App = () => {
  return (
    <BrowserRouter>
      <div className="p-2 bg-charcoal">
        <Route exact path="/">
          <GameArea />
        </Route>
        <Route path="/help">
          <Help />
        </Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
