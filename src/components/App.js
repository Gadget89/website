import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';

// App components
import Header from './Header';
import Landing from './Landing';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import NotFound from './NotFound';

const App = () => (
  <BrowserRouter>
    <div className="container">
      <Header />

      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/about" render={ () => <About title='About' /> } />
        <Route exact path="/projects" component={Projects} />
        <Route path="/teachers/:topic/:name" component={Projects} />
        <Route path="/skills" component={Skills} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;
