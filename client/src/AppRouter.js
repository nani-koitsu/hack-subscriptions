import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

// const Navbar = React.lazy(() => import("./components/Navbar/Navbar"));
const Signin = React.lazy(() => import("./components/Signin/Signin"));
const Signup = React.lazy(() => import("./components/Signup/Signup"));
const Landing = React.lazy(() =>
  import("./components/containers/Landing/Landing")
);
const Dashboard = React.lazy(() =>
  import("./components/containers/Dashboard/Dashboard")
);

class AppRouter extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/signin" component={Signin} />
        </Switch>
        <PrivateRoute exact path="/dashboard" component={Dashboard} />
      </>
    );
  }
}
export default AppRouter;
// export default class AppRouter extends Component {
//   state = {
//     sideDrawerOpen: false
//   };

//   drawerToggleClickHandler = () => {
//     this.setState(prevState => {
//       return { sideDrawerOpen: !prevState.sideDrawerOpen };
//     });
//   };
//   backdropClickHandler = () => {
//     this.setState({ sideDrawerOpen: false });
//   };
//   render() {
//     let backdrop;
//     if (this.state.sideDrawerOpen) {
//       backdrop = <Backdrop click={this.backdropClickHandler} />;
//     }

//     return (
//       <div style={{ height: "100%" }}>
//         <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
//         <SideDrawer show={this.state.sideDrawerOpen} />
//         {backdrop}
//         <main style={{ marginTop: "64px" }}>
//           <Home />
//         </main>
//       </div>
//     );
//   }
// }
