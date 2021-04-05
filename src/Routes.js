import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import ContextAPI from './Pages/ContextAPI/ContextAPI';
import Redux from './Pages/Redux/Redux';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={ContextAPI} />
          <Route exact path="/redux" component={Redux} />
        </Switch>
      </Router>
    );
  }
}
export default Routes;
