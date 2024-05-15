import axios from "./axios"
import * as ServivesAction from '../Features/ServicesAction'
import { ThereIsNoConnectionToTheServer } from './network'




// get data 
// url : 
export const ServicesShow_Api = () => async (dispatch, getState) => {

    const Url = `/api/services/user/`
    try {
        const { Auth: { token } } = getState()
        const config = { headers: { Authorization: `Bearer ${token}` } }
        dispatch(ServivesAction.statementLoading())
        const { data } = await axios.get(Url, config)
        dispatch(ServivesAction.statementGetData(data))
    } catch (error) {
        return ThereIsNoConnectionToTheServer(dispatch, error, ServivesAction.statementError)
    }
}

// update one object .. . . . 
export const ServicesDelete_Api = (id) => async (dispatch, getState) => {

    let Url = `/api/services/delete/${id}`

    try {
        const { Auth: { token } } = getState()
        const config = { headers: { Authorization: `Bearer ${token}` } }
        dispatch(ServivesAction.statementLoading())
        await axios.delete(Url,config)
        dispatch(ServicesShow_Api())
    } catch (error) {
        return ThereIsNoConnectionToTheServer(dispatch, error, ServivesAction.statementError)
    }
}


// create new product 
export const ServicesCreate_Api = (send) => async (dispatch,getState) => {
    const { Auth: { token,userInfo } } = getState()
    const config = { headers: { Authorization: `Bearer ${token}` } }
 
    const NewData = {
        user: userInfo?._id,
        name: send?.name?.trim()?.toLowerCase(),
        des: send?.des?.trim()?.toLowerCase(),
        seo: send?.seo?.trim()?.toLowerCase(),
        image: send?.image,
        more: send?.more,
        location: userInfo?.location
    }

    let Url = `/api/services/create/`
    try {
        dispatch(ServivesAction.statementLoading())
        await axios.post(Url, NewData,config)
        dispatch(ServivesAction.statementReload(true))
        dispatch(ServicesShow_Api())
    } catch (error) {
        return ThereIsNoConnectionToTheServer(dispatch, error, ServivesAction.statementError)
    }
}




// update object 
export const ServicesUpdate_Api = (send) => async (dispatch,getState) => {

    const { Auth: { token,userInfo } } = getState()
    const config = { headers: { Authorization: `Bearer ${token}` } }

    const NewData = {
        user: userInfo?._id,
        name: send?.name?.trim()?.toLowerCase(),
        des: send?.des?.trim()?.toLowerCase(),
        seo: send?.seo?.trim()?.toLowerCase(),
        image: send?.image,
        more: send?.more,
    }


    let Url = `/api/services/update/${send?._id}`

    try {
        dispatch(ServivesAction.statementLoading())
        await axios.put(Url, NewData,config)
        dispatch(ServivesAction.statementReload(true))
        dispatch(ServicesShow_Api())
    } catch (error) {
        return ThereIsNoConnectionToTheServer(dispatch, error, ServivesAction.statementError)
    }
}
