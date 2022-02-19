import './App.scss';
import { Component } from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";

//pages
import MainPage from "./pages/index";
import ProjectSum from "./pages/projects";
import MusicMain from "./pages/musicMain";
import about from "./pages/about";
import project from "./pages/project";
import bruises from "./projects/bruises"

class App extends Component {

    render() {
        return(

                <Router>
                    <Route exact path="/" component={MainPage} self={true} />
                    <Route exact path="/projects" component={ProjectSum} self={true}/>
                    <Route exact path="/projects/bruises" component={bruises} self={true}/>
                    <Route exact path="/music" component={MusicMain} self={true}/>
                    <Route exact path="/about" component={about} self={true}/>
                    <Route exact path="/music/:id" component={project} self={true}/>
                </Router>
        )
    };
}

export default App;

