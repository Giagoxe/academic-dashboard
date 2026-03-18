import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact>
                    <h1>Welcome to the Academic Dashboard</h1>
                </Route>
                <Route path="/about">
                    <h1>About Page</h1>
                </Route>
                {/* Add more routes as needed */}
            </Switch>
        </Router>
    );
};

export default App;