import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';
// import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

// App components
import Header from './Header';
import Landing from './Landing';
import About from './About';
import Projects from './Projects';
import ContactMe from './ContactMe';
import NotFound from './NotFound';
import Featured from './Featured';

const App = () => (
  <BrowserRouter>
    <div className="container">
      <Header />

      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/about" render={ () => <About title='About' /> } />
        <Route exact path="/projects" component={Projects} />
        <Route path="/projects/:topic/:name" component={Featured} />
        <Route path="/contact" component={ContactMe} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;
