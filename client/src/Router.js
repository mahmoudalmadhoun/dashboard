import React from "react";
import {useRoutes} from 'react-router-dom';
import {RoutersArray} from './RoutersData';

const Routes = () =>{

    const routes = useRoutes(RoutersArray)

    return routes
}

export default Routes