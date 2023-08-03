import React from 'react';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import NavContent from './components/NavContent';
import About from './components/About';
import Projects from './components/Projects';

const App = () => {

  return (
    <div>
    <NavBar />
    <NavContent/>
    <About/>
    <Projects/>
    {/* Rest of your portfolio content */}
    </div>

    // <Router>
    // <div>
    //     <NavBar />
    //     <Switch>
    //       <Route path="/" exact component={NavContent} />
    //       <Route path="/about" component={About} />
    //     </Switch>
    //   </div>
    // </Router>
  );
};

export default App;
