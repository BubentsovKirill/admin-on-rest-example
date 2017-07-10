import React, { Component } from 'react';
import { Admin, Delete, Resource } from 'admin-on-rest';
import './App.css';

import {VisitorList,VisitorEdit, VisitorDelete} from './visitors';
import {CommandList, CommandEdit} from './commands';

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
                title="My Test Admin"
                restClient={restClient}>
                <Resource name="customers" list={VisitorList} edit={VisitorEdit} remove={VisitorDelete} />
                <Resource name="commands" list={CommandList} edit={CommandEdit}/>
                <Resource name="products"  />
                <Resource name="categories" />
                <Resource name="reviews"  />
            </Admin>
        );
    }
}

export default App;
