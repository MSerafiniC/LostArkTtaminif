import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from "react-router-dom";

import { NavBar } from './NavBar';
import { HomeScreen } from './HomeScreen';
import { Noticias } from './Noticias'
import { MultimediaScreen } from './MultimediaScreen';

export const AppRouter = () => {
    return (
        <Router>
            <div>

                <NavBar />
                <Switch>
                <Route exact path="/"  component={ HomeScreen }/>
                <Route exact path="/media"  component={ MultimediaScreen }/>
                <div className="container">
                    
                    <Route exact path="/"  component={ HomeScreen }/>
                    <Route exact path="/news"  component={ Noticias }/>
                    {/* <Redirect to={ HomeScreen } /> */}
                    
                </div>
                </Switch>
            </div>
        </Router>
    )
}
