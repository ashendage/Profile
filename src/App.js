
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from './NavBar';
import Home from './component/Home';
import About from './component/About';
import Contact from './component/Contact';
import Portfolio from './component/Portfolio';
import { CSSTransition } from 'react-transition-group';
import 'animate.css';
import React from 'react';

const routes = [
  { path: '/', name: 'Home', Component: Home },
  { path: '/about', name: 'About', Component: About },
  { path: '/contact', name: 'Contact', Component: Contact },
  { path: '/portfolio', name: 'Portfolio', Component: Portfolio },
]
function App() {
  return (<Router>
    <>
      <NavBar />

      <div className="container">
        {routes.map(({ path, Component }) => (
          <Route key={path} exact path={path}>
            {({ match }) => (

              <CSSTransition
                in={match != null}
                timeout={1000}
                classNames="page"
                unmountOnExit
              >
                <div className="page">

                  <Component />
                </div>

              </CSSTransition>
            )}
          </Route>
        ))}
      </div>
    </>
  </Router>);
}

export default App;
