import axios from "./axios"
import * as ArticeAction from '../Features/ArticleAction'
import { ThereIsNoConnectionToTheServer } from './network'




// get data 
export const ArticeShow_Api = () => async (dispatch, getState) => {

    const Url = `/api/article/show/`

    const { Auth: { token } } = getState()
    const config = { headers: { Authorization: `Bearer ${token}` } }


    try {
        dispatch(ArticeAction.statementLoading())
        const { data } = await axios.get(Url, config)
        dispatch(ArticeAction.statementGetData(data))
    } catch (error) {
        return ThereIsNoConnectionToTheServer(dispatch, error, ArticeAction.statementError)
    }
}


// create
export const ArticleCreate_Api = (send) => async (dispatch, getState) => {
    const { Auth: { userInfo, token } } = getState()
    const config = { headers: { Authorization: `Bearer ${token}` } }

    const newData = {
        user: userInfo?._id,
        location: userInfo?.location,
        name: send?.name?.trim()?.toLowerCase(),
        des: send?.des?.trim()?.toLowerCase(),
        image: send?.image,
        more: send?.more,
        location : userInfo?.location,

    }

    const Url = `/api/article/create/`
    try {
        dispatch(ArticeAction.statementLoading())
        await axios.post(Url, newData, config)
        dispatch(ArticeAction.statementReload(true))
        dispatch(ArticeShow_Api())
    } catch (error) {
        return ThereIsNoConnectionToTheServer(dispatch, error, ArticeAction.statementError)
    }
}

// update object 
export const ArticleUpdate_Api = (send) => async (dispatch,getState) => {

    const { Auth: { userInfo, token } } = getState()
    const config = { headers: { Authorization: `Bearer ${token}` } }

 

    const newData = {
        user: userInfo?._id,
        location: userInfo?.location,
        name: send?.name?.trim()?.toLowerCase(),
        des: send?.des?.trim()?.toLowerCase(),
        image: send?.image,
        more: send?.more,
        location : userInfo?.location,
    }

    const Url = `/api/article/update/${send?._id}`

    try {
        dispatch(ArticeAction.statementLoading())
        await axios.put(Url, newData,config)
        dispatch(ArticeAction.statementReload(true))
        dispatch(ArticeShow_Api())
    } catch (error) {
        return ThereIsNoConnectionToTheServer(dispatch, error, ArticeAction.statementError)
    }
}



// delete
export const ArticeDelete_Api = (id) => async (dispatch,getState) => {
    const { Auth: { token } } = getState()
    const config = { headers: { Authorization: `Bearer ${token}` } }
    const Url = `/api/article/delete/${id}`
    try {
        dispatch(ArticeAction.statementLoading())
        await axios.delete(Url,config)
        dispatch(ArticeAction.statementReload(true))
        dispatch(ArticeAction.statementGetData([]))
        dispatch(ArticeShow_Api())
    } catch (error) {
        return ThereIsNoConnectionToTheServer(dispatch, error, ArticeAction.statementError)
    }
}





