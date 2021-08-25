import './App.scss';
import { Component } from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";

//pages
import MainPage from "./pages/index";
import ProjectSum from "./pages/projects";
import MusicMain from "./pages/musicMain";

class App extends Component {
    render() {
        return(
            <Router>
                <Route exact path="/" component={MainPage} self={true} />
                <Route exact path="/projects" component={ProjectSum} self={true}/>
                <Route exact path="/musicMain" component={MusicMain} self={true}/>
            </Router>
        );
    }
}

export default App;

