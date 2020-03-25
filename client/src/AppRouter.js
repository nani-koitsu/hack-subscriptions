import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import ToolBar from "./components/Toolbar/Toolbar";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

// const Navbar = React.lazy(() => import("./components/Navbar/Navbar"));
const Signin = React.lazy(() => import("./components/Signin/SignIn"));
const Signup = React.lazy(() => import("./components/Signup/SignUp"));
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
        <ToolBar />
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/signin" component={Signin} />
          <PrivateRoute exact path="/dashboard" component={Dashboard} />
        </Switch>
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
