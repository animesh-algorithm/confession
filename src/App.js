import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Container } from "react-bootstrap";

import HomeScreen from "./screens/HomeScreen";
import Header from "./components/Header/Header";
import SignIn from "./components/Auth/SignIn";
import SignUp from "./components/Auth/SignUp";
import CreateConfession from "./components/Confessions/CreateConfession";
import ConfessionDetail from "./components/Confessions/ConfessionDetail";
import Explore from "./components/Explore/Explore";

import "./App.css";
import ConfessionsGrid from "./components/Confessions/ConfessionsGrid";
import ProfileDetail from "./components/Profile/ProfileDetail";
import EditProfile from "./components/Profile/EditProfile";
import Chat from "./components/Chat/Chat";

const App = () => {
  return (
    <Router>
      <Header className="position-fixed" />
      <main
        className={`${
          window.location.href.includes("chat") ? "" : "py-3"
        } text-white container-fluid`}
      >
        <Switch>
          <Route path="/" exact component={HomeScreen} />
          <Route path="/profile/edit" component={EditProfile} />
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />
          <Route path="/confess" component={CreateConfession} />
          <Route path="/explore" component={Explore} />

          <Route path="/confession/:id" component={ConfessionDetail} />
          <Route path="/likes" component={ConfessionsGrid} />
          <Route path="/chat" exact component={Chat} />

          <Route path="/:username" component={ProfileDetail} />

          <Route path="/you" component={ProfileDetail} />
        </Switch>
      </main>
    </Router>
  );
};

export default App;
