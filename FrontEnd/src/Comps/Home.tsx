import React from 'react';
import { Navbar } from "./Navbar"
import { Home } from "./Home"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App: React.FC = () => {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route path="/" exact component={Home} />
            </Switch>
        </Router>
    );
};
