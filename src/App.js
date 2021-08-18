// redux
import { Provider } from "react-redux";
import store from "./store";
//components
import GameContainer from "./components/GameContainer/GameContainer";
import Header from "./components/Header/Header";

import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <GameContainer />
      </div>
    </Provider>
  );
}

export default App;
