import React, { Fragment } from 'react'
import { Outlet } from 'react-router-dom'
import PropTypes from 'prop-types'
import './css/index.css'




const App = ({ route }) => {

    return (
        <Fragment>
            <Outlet />
        </Fragment>
    )
}

App.propTypes = {
    route: PropTypes.objectOf(PropTypes.any),
};



export default { element: App };

