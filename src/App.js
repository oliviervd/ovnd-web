import './App.scss';
import { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Link, Redirect} from "react-router-dom";

//pages
import MainPage from "./pages/index";
import ProjectSum from "./pages/projects";

class App extends Component {
    render() {
        return(
            <Router>
                <Route exact path="/" component={MainPage} />
                <Route exact path="/projects" component={ProjectSum} />
            </Router>
        );
    }
}

export default App;

