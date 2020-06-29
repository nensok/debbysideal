import React from 'react';
import NavBar from './components/NavBar';
import Search from './components/Search';
import Meal from './components/Meal';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'


function App() {
  return (
   <Router>
     <React.Fragment>
      <NavBar/>
        <div className="container">
            <Switch>
              <Route exact path="/" component ={ Search }/>
              <Route path="/meal" component ={ Meal }/>
            </Switch>
           
        </div>
     </React.Fragment>
   </Router>
  );
}

export default App;
