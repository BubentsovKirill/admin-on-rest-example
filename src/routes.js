import React from 'react';
import { Route } from 'react-router-dom';
import Segments from './segments/Segments';
import Configuration from './configuration/Configuration';

//TODO: routes - для тех кто подключен не через Resource
export default [
    <Route exact path="/segments" component={Segments} />,
    <Route exact path="/configuration" component={Configuration}/>
]
