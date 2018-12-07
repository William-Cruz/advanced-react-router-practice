import React from "react";
import TopNav from "./components/TopNav";
import SideNav from "./components/SideNav";
import Profiles from "./components/Profiles";
import Dashboard from "./components/Dashboard";
import Charts from "./components/Charts";
import Profile from "./components/Profile";
import Settings from "./components/Settings";
import Wall from "./components/Wall";
import {
  BrowserRouter as Router,
  Route,
  Link,
} from "react-router-dom";

function App() {
  return (
    <div>
      <div id="wrapper">
        <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
          <TopNav />
          <SideNav />
        </nav>
        <div style={{ backgroundColor: "white" }}>
          {/* PUT YOUR ROUTES HERE */}
          <BasicExample />
        </div>
      </div>
    </div>
  );
}

const BasicExample = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/">Dashboard</Link></li>
        <li><Link to="/profiles">Profiles</Link></li>
        <li><Link to="/charts">Charts</Link></li>
        <li><Link to="/profile">Profile</Link></li>
        <li><Link to="/wall">Wall</Link></li>
        <li><Link to="/settings">Settings</Link></li>
      </ul>

      <hr />

      <Route exact path="/" component={Dashboard} />
      <Route path="/profiles" component={Profiles} />
      <Route path="/charts" component={Charts} />
      <Route path="/profile" component={Profile} />
      <Route path="/settings" component={Settings} />
      <Route path="/wall" component={Wall} />
    </div>
  </Router>
);

export default App;
