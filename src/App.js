import React, { Component } from 'react';
import { Admin, Resource } from 'admin-on-rest';
import './App.css';
import Menu from './Menu';
import themeReducer from './themeReducer';
import Layout from './Layout';
import authClient from './authClient'
import routes from './routes';
import { Dashboard } from './dashboard';
import { VisitorList,VisitorEdit, VisitorDelete } from './visitors';
import { CommandList, CommandEdit, CommandDelete } from './commands';
import { ProductList, ProductCreate, ProductEdit, ProductDelete } from './products';
import { CategorieList, CategorieEdit } from './categories';
import { ReviewList, ReviewEdit, ReviewDelete } from './reviews';

import restClient from './restClient';
import fakeRestServer from './restServer';

class App extends Component {

    componentWillMount() {
        this.restoreFetch = fakeRestServer();
    }

    componentWillUnmount() {
        this.restoreFetch();
    }

    render() {
        return (
            <Admin
                authClient={authClient}
                dashboard={Dashboard}
                customRoutes={routes}
                menu={Menu}
                appLayout={Layout}
                title="My Test Admin"
                customReducers={{ theme: themeReducer }}
                restClient={restClient}>
                <Resource name="customers" list={VisitorList} edit={VisitorEdit} remove={VisitorDelete} />
                <Resource name="commands" list={CommandList} edit={CommandEdit} remove={CommandDelete}/>
                <Resource name="products"  list={ProductList} edit={ProductEdit} create={ProductCreate} remove={ProductDelete}/>
                <Resource name="categories" list={CategorieList} edit={CategorieEdit}/>
                <Resource name="reviews" list={ReviewList} edit={ReviewEdit} remove={ReviewDelete}/>
            </Admin>
        );
    }
}

export default App;
