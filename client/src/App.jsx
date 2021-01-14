import logo from './logo.svg';
import './App.css';
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import HomePage from "./pages/HomePage";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <>
    <Router>
      <Route exact path="/" component={HomePage}/>
      <Route path="/signin" component={SignIn}/>
      <Route path="/signup" component={SignUp}/>
    </Router>
    </>
  );
}

export default App;
