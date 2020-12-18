import React, { lazy, Suspense } from 'react';
import { Route, Switch } from "react-router-dom";

const HomePage = lazy(() => import('../component/HomePage/HomePage'))
const Products = lazy(() => import('../component/Products/Products'))
const Contacts = lazy(() => import('../component/Contacts/Contacts'))

const Routes = () => {
    return (
        <div>
            <Suspense fallback={<div>Loading...</div>} >
                <Switch>
                    <Route exact path='/' component={HomePage} />
                    <Route
                        exact
                        path='/products'
                        component={Products}
                    />
                    <Route
                        exact
                        path='/contacts'
                        component={Contacts}
                    />
                </Switch>
            </Suspense>
        </div>
    );
};

export default Routes;
