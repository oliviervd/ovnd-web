import './App.css';
import { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Link, Redirect} from "react-router-dom";

//pages
import MainPage from "./pages";

class App extends Component {
    render() {
        return(
            <Router>
                <Route exact path="/" component={MainPage} />
            </Router>
        );
    }
}

export default App;

