
// handel error ....
// option  not connect from server and error fail data from castem

import { statementGetData } from "../Features/AuthFeatures"

// import { Action_logout } from "./AuthAction"

// testing. .....
export function ThereIsNoConnectionToTheServer(dispatch, error, PthError) {


    if (error.message === 'Network Error') {


        console.log('Network Error')
        return dispatch(PthError('not fund 404'))


    } else {
        const message = error.response &&
            error.response.data.message ?
            error.response.data.message :
            error.message

        if (message === 'Not authorized' ||
            message === 'token failed' ||
            message === `Cannot read properties of null (reading '_id')` ||
            message === `Cannot read properties of null (reading 'id')` ||
            message === 'The person does not exist in the database'
        ) {
            console.log('Not authorized')

            dispatch(statementGetData({
                data: {},
                token: '333'
            }))

            return

        }


        // console.log('404',error)
        return dispatch(PthError(message))
    }
}