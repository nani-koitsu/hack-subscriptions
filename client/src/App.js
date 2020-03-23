import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import AppRouter from "./AppRouter";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import { Provider } from "react-redux";

const App = () => (
  <>
    <Router>
      <Layout>
        <AppRouter />
      </Layout>
    </Router>
  </>
);

export default App;
