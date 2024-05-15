import axios from "./axios"
import * as LastWorkingAction from '../Features/LastwokingFeatures'
import { ThereIsNoConnectionToTheServer } from './network'




// get data 
export const LastWorkingShow_Api = () => async (dispatch, getState) => {

    const Url = `/api/working/user/`
    try {
        const { Auth: { token } } = getState()
        const config = { headers: { Authorization: `Bearer ${token}` } }
        dispatch(LastWorkingAction.statementLoading())
        const { data } = await axios.get(Url, config)
        dispatch(LastWorkingAction.statementGetData(data))
    } catch (error) {

        return ThereIsNoConnectionToTheServer(dispatch, error, LastWorkingAction.statementError)
    }
}






// delete
export const LastworkingDelete_Api = (id) => async (dispatch, getState) => {
    const Url = `/api/working/delete/${id}`
    try {
        const { Auth: { token } } = getState()
        const config = { headers: { Authorization: `Bearer ${token}` } }
        dispatch(LastWorkingAction.statementLoading())
        await axios.delete(Url, config)
        dispatch(LastWorkingShow_Api())
    } catch (error) {
        return ThereIsNoConnectionToTheServer(dispatch, error, LastWorkingAction.statementError)
    }
}


// create
export const LastWorkingCreate_Api = (send) => async (dispatch, getState) => {

    const { Auth: { userInfo,token } } = getState()
    const config = { headers: { Authorization: `Bearer ${token}` } }

    let newData = {
        user: userInfo?._id,
        name: send?.name?.trim()?.toLowerCase(),
        image: send?.image,
        location : userInfo?.location
    }
    const Url = `/api/working/create/`

    try {
        dispatch(LastWorkingAction.statementLoading())
        await axios.post(Url, newData,config)
        dispatch(LastWorkingAction.statementReload(true))
        dispatch(LastWorkingShow_Api())
    } catch (error) {
        return ThereIsNoConnectionToTheServer(dispatch, error, LastWorkingAction.statementError)
    }
}


// update object 
export const LastWorkingUpdate_Api = (send) => async (dispatch, getState) => {

    const { Auth: {token } } = getState()
    const config = { headers: { Authorization: `Bearer ${token}` } }

    const Url = `/api/working/update/${send?._id}`

    let newData = {
        name: send?.name?.trim()?.toLowerCase(),
        image: send?.image,
    }

    try {
        dispatch(LastWorkingAction.statementLoading())
        await axios.put(Url, newData,config)
        dispatch(LastWorkingAction.statementReload(true))
        dispatch(LastWorkingShow_Api())
    } catch (error) {
        return ThereIsNoConnectionToTheServer(dispatch, error, LastWorkingAction.statementError)
    }
}







