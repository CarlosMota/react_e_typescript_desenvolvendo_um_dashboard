import React from 'react';
//npm install --save react-router-dom
//npm i --save-dev @types/react-router-dom -D
//Tipagem é para ser usada só em desenvolvimento
import {Switch, Route} from 'react-router-dom';
import Layout from '../Components/Layout';
import Dashboard from '../pages/Dashboard';
import List from '../pages/List';

const AppRoutes: React.FC = () => (
    <Layout>
        <Switch>
            <Route path="/Dashboard" exact component={Dashboard}/>
            <Route path="/list/:type" exact component={List}/>
        </Switch>
    </Layout>
);

export default AppRoutes;