import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Menu from '../component/pages/Menus/Menu';
import Footer from '../component/pages/Footer/Footer';

const HomePage = lazy(() => import('../component/pages/HomePage/HomePage'))
const Products = lazy(() => import('../component/pages/Products/Products'))
const Contacts = lazy(() => import('../component/pages/Contacts/Contacts'))
const Login = lazy(() => import('../component/pages/Login/Login'))
const AddProduct = lazy(() => import('../component/organisms/Product/AddProduct'))
const ApplicationFirebase = lazy(() => import('../component/pages/ApplicationFirebase/ApplicationFirebase'))

const Routes = () => {
    return (
        <div>
            <Router>
                <Suspense fallback={<div>Loading...</div>} >
                    <Menu />
                    <Switch>
                        <Route
                            exact
                            path='/'
                            component={HomePage} />
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
                        <Route
                            exact
                            path='/login'
                            component={Login}
                        />
                        <Route
                            exact
                            path='/addproduct'
                            component={AddProduct}
                        />
                        <Route
                            exact
                            path='/addproduct/:id'
                            component={AddProduct}
                        />
                        <Route
                            exact
                            path='/products/ApplicationFirebase'
                            component={ApplicationFirebase}
                        />
                    </Switch>
                    <Footer />
                </Suspense>

            </Router>
        </div>
    );
};

export default Routes;
