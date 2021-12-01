import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PrivateRoute from '../components/auth/privateRoute';

import Blog from '../components/Blog';
import Home from '../components/Home';
import NoFound from '../components/NotFound';
import Productos from '../components/Productos';
import Tiendas from '../components/Tiendas';
import Login from '../components/login/login';
import Registro from '../components/Registro/index';


export default function AppRouter() {
    return (
        <Router>
            <Switch>
                <Route exact path={["/"]} component={Home} />
                <Route exact path={["/login"]} component={Login} />
                <PrivateRoute exact path="/registro_productos" component={Registro}/>
                <Route exact path={["/productos"]} component={Productos} />
                <Route exact path={["/tiendas"]} component={Tiendas} />
                <Route exact path={["/blog"]} component={Blog} />
                <Route path="*" element={<NoFound />} />
            </Switch>
        </Router>
    )
} 



