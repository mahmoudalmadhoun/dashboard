import * as AuthAction from '../Features/AuthFeatures'
import { ThereIsNoConnectionToTheServer } from './network'
import axios from './axios'


// login 
export const AuthLogin_Api = (send) => async dispatch => {

    const Url = `/api/auth/login/`

    try {
        dispatch(AuthAction.statementLoading())
        const { data } = await axios.post(Url, send)
        dispatch(AuthAction.statementGetData({
            token : data?.token,
            data : data?.data
        }))
        

    } catch (error) {
        return ThereIsNoConnectionToTheServer(dispatch, error, AuthAction.statementError)
    }
}
