import Navbar from "./components/Navbar";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import NotFound from "./components/NotFound";
import Post from "./components/Post";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <div className="content">
          <Switch>
              <Route exact path="/">
                <Home/>
              </Route>
              <Route path="/about">
                <About/>
              </Route>
              <Route path="/contact">
                <Contact/>
              </Route>
              <Route path="/:post_id">
                <Post/>
              </Route>
              <Route path="*">
                <NotFound/>
              </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
