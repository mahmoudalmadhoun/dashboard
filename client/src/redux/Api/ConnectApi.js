import axios from "./axios"
import * as ConnectAction from '../Features/ConnectFeatures'
import { ThereIsNoConnectionToTheServer } from './network'




// get data 
export const ConnectShow_Api = () => async (dispatch, getState) => {

    const Url = `/api/connect/user/`

    const { Auth: { token } } = getState()
    const config = { headers: { Authorization: `Bearer ${token}` } }


    try {
        dispatch(ConnectAction.statementLoading())
        const { data } = await axios.get(Url, config)
        dispatch(ConnectAction.statementGetData(data))
    } catch (error) {
        return ThereIsNoConnectionToTheServer(dispatch, error, ConnectAction.statementError)
    }
}

// update object 
export const ConnectUpdate_Api = (send) => async (dispatch,getState) => {

    const { Auth: { userInfo, token } } = getState()
    const config = { headers: { Authorization: `Bearer ${token}` } }

    let location = window?.location?.host ? window?.location?.host : ''

    const newData = {
        aboutus: {
            name: send?.aboutus?.name?.trim()?.toLowerCase(),
            des: send?.aboutus?.des?.trim()?.toLowerCase(),
        },
        user: userInfo?._id,
        location: location?.trim()?.toLowerCase(),
        name: send?.name?.trim()?.toLowerCase(),
        phone: send?.phone?.trim()?.toLowerCase(),
        addres: send?.addres?.trim()?.toLowerCase(),
        whatapp: send?.whatapp?.trim()?.toLowerCase(),
        facebook: send?.facebook?.trim()?.toLowerCase(),
        twitter: send?.twitter?.trim()?.toLowerCase(),
        instagram: send?.instagram?.trim()?.toLowerCase(),
        image: send?.image,
    }

    const Url = `/api/connect/update/${send?._id}`

    try {
        dispatch(ConnectAction.statementLoading())
        await axios.put(Url, newData,config)
        dispatch(ConnectAction.statementReload(true))
        dispatch(ConnectShow_Api())
    } catch (error) {
        return ThereIsNoConnectionToTheServer(dispatch, error, ConnectAction.statementError)
    }
}



// delete
export const ConnectDelete_Api = (id) => async (dispatch,getState) => {
    const { Auth: { token } } = getState()
    const config = { headers: { Authorization: `Bearer ${token}` } }
    const Url = `/api/connect/delete/${id}`
    try {
        dispatch(ConnectAction.statementLoading())
        await axios.delete(Url,config)
        dispatch(ConnectAction.statementReload(true))
        dispatch(ConnectAction.statementGetData({}))
    } catch (error) {
        return ThereIsNoConnectionToTheServer(dispatch, error, ConnectAction.statementError)
    }
}



// create
export const ConeectCreate_Api = (send) => async (dispatch, getState) => {
    const { Auth: { userInfo, token } } = getState()
    const config = { headers: { Authorization: `Bearer ${token}` } }

    // let location = window?.location?.host ? window?.location?.host : ''

    const newData = {
        aboutus: {
            name: send?.aboutus?.name?.trim()?.toLowerCase(),
            des: send?.aboutus?.des?.trim()?.toLowerCase(),
        },
        user: userInfo?._id,
        location: userInfo?.location,
        name: send?.name?.trim()?.toLowerCase(),
        phone: send?.phone?.trim()?.toLowerCase(),
        addres: send?.addres?.trim()?.toLowerCase(),
        whatapp: send?.whatapp?.trim()?.toLowerCase(),
        facebook: send?.facebook?.trim()?.toLowerCase(),
        twitter: send?.twitter?.trim()?.toLowerCase(),
        instagram: send?.instagram?.trim()?.toLowerCase(),
        image: send?.image,
    }

    const Url = `/api/connect/create/`
    try {
        dispatch(ConnectAction.statementLoading())
        await axios.post(Url, newData, config)
        dispatch(ConnectAction.statementReload(true))
        dispatch(ConnectShow_Api())
    } catch (error) {
        return ThereIsNoConnectionToTheServer(dispatch, error, ConnectAction.statementError)
    }
}

