import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from './components/About';
import Features from './components/Features';
import Specifications from './components/Specifications';
import Footer from './components/Footer';


function App() {
  return (
    <>
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/About">
            <About/>
          </Route>
          <Route exact path="/Features">
            <Features/>
          </Route>
          <Route exact path="/Specifications">
            <Specifications/>
          </Route>
        </Switch>
        <Footer/>
      </Router>
      </div>
    </>
  );
}

export default App;
