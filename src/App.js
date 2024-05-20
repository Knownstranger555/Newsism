import "./App.css";

import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <Routes>
            <Route
              exact
              path="/"
              key="t"
              element={<News country="us" category="technology" />}
            />
            <Route
              exact
              path="/technology"
              element={
                <News country="us" category="technology" key="technology" />
              }
            />
            <Route
              exact
              path="/entertainment"
              element={
                <News
                  country="us"
                  category="entertainment"
                  key="entertainment"
                />
              }
            />
            <Route
              exact
              path="/sports"
              element={<News country="us" category="sports" key="sports" />}
            />
            <Route
              exact
              path="/science"
              element={<News country="us" category="science" key="science" />}
            />
            <Route
              exact
              path="/general"
              element={<News country="us" category="general" key="general" />}
            />
            <Route
              exact
              path="/health"
              element={<News country="us" category="health" key="health" />}
            />
            <Route
              exact
              path="/business"
              element={<News country="us" category="business" key="business" />}
            />
          </Routes>
        </Router>
      </div>
    );
  }
}


