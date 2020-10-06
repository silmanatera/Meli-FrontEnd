import React from 'react';
import { Navbar } from '../components/ui/Navbar';
import { Switch, Route, Redirect } from 'react-router-dom';

import { ProductScreen } from '../components/products/ProductScreen';
import { SearchScreen } from '../components/search/SearchScreen';

export const DashboardRoutes = () => {
    return (
        <>
            <Switch>
                <Route exact path="/items/:id" component={ ProductScreen } />
                <Route exact path="/items" component={ SearchScreen } />
                <Route exact path="/" component={ Navbar } />

                <Redirect to="/" />
            </Switch>
        </>
    )
}
