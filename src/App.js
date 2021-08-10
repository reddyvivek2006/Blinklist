import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import store from "./store/store";
import { Provider } from "react-redux";
import AddButton from "./AddButton";
import BookStatus from "./BookStatus";
import { ThemeProvider } from "@material-ui/core";
import customtheme from "./customeTheme";

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={customtheme}>
        <AddButton />
        <BookStatus />
        <Router>
          <React.Fragment></React.Fragment>
        </Router>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
