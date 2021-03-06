import "./style";
import { h, Component } from "preact";
import { Router } from "preact-router";

import Header from "./components/header";
import Home from "async!./routes/home";
import Event from "async!./routes/event";

if (module.hot) {
  require("preact/debug");
}

export default class App extends Component {
  /** Gets fired when the route changes.
   *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
   *	@param {string} event.url	The newly routed URL
   */
  handleRoute = e => {
    this.currentUrl = e.url;
  };

  render() {
    return (
      <div id="app">
        <Header />
        <Router onChange={this.handleRoute}>
          <Home path="/" />
          <Event path="/event/:sku" />
        </Router>
      </div>
    );
  }
}
