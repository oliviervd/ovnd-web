import './App.scss';
import { Component } from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";

//pages
import MainPage from "./pages/index";
import ProjectSum from "./pages/projects";
import MusicMain from "./pages/musicMain";
import about from "./pages/about";
import contact from "./pages/contact";
import project from "./pages/project";

//data
import projectData from "./components/data/projects.json";

class App extends Component {

    render() {
        return(
            <div>
                <Router>
                    <Route exact path="/" component={MainPage} self={true} />
                    <Route exact path="/projects" component={ProjectSum} self={true}/>
                    <Route exact path="/music" component={MusicMain} self={true}/>
                    <Route exact path="/about" component={about} self={true}/>
                    <Route exact path="/contact" component={contact} self={true}/>

                    {projectData.map((postDetail, index) => {
                        const _href = "/music/"+ postDetail.title;
                        return(
                            <Route exact path={_href} component={project} self={true}/>
                        )
                    })}
                </Router>
            </div>
        )
    };
}

export default App;

