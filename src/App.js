import React from 'react';
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';
import { Container, AppBar, Toolbar, Typography } from '@material-ui/core';
import ComponentFactory from './components/ComponentFactory';

const App = () => {
  return (
      <Router>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6">Mock Tool</Typography>
          </Toolbar>
        </AppBar>
        <Container maxWidth="md">
          <nav>
            <ul>
              <li>
                <Link to="/">Editor</Link>
              </li>
              <li>
                <Link to="/mock-list">Mock List</Link>
              </li>
            </ul>
          </nav>
            <Routes>
                {/*<Route path="/" element={<ComponentFactory componentName="Editor" />} />*/}
                <Route path="/mock-list" element={<ComponentFactory componentName="MockList" />} />
            </Routes>
        </Container>
      </Router>
  );
};

export default App;