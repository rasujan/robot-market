import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/store";

import Home from "./pages/home";

function App() {
  return (
    <Provider store={store}>
      <div className="container mx-auto">
        <Home />
      </div>
    </Provider>
  );
}

export default App;
