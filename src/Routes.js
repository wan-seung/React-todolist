import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PageNum1 from './Pages/1.Birthday Reminder/PageNum1';
// import ContextAPI from './Pages/ContextAPI/ContextAPI';
// import Redux from './Pages/Redux/Redux';
import Todo from './Pages/Todo';
class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Todo} />
          <Route exact path="/1" component={PageNum1} />
          {/* <Route exact path="/ContextAPI" component={ContextAPI} />
          <Route exact path="/redux" component={Redux} /> */}
        </Switch>
      </Router>
    );
  }
}
export default Routes;
