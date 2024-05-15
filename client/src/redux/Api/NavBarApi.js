import axios from "./axios"
import * as NavBar from '../Features/NavBarFeatures'
import { ThereIsNoConnectionToTheServer } from './network'


// get data 
// url : 
export const GetNavBar = () => async (dispatch, getState) => {


    const { Auth: { token } } = getState()
    const config = { headers: { Authorization: `Bearer ${token}` } }

    const Url = `/api/navbar/show/a/`

    try {
        dispatch(NavBar.statementLoading())
        const { data } = await axios.get(Url, config)
        dispatch(NavBar.statementGetData(data))
    } catch (error) {
        return ThereIsNoConnectionToTheServer(dispatch, error, NavBar.statementError)
    }
}



// update object 
// url : http://localhost:4000/api/navbar/update/6638d9c85962e129ee21b98c
export const NavBarUpdate = (send) => async (dispatch, getState) => {

    const sendUpdate = {
        name: send?.name?.trim()?.toLowerCase(),
        link: send?.link?.trim()?.toLowerCase(),
    }

    let Url = `/api/navbar/update/${send?._id}`

    try {
        const { Auth: { token } } = getState()
        const config = { headers: { Authorization: `Bearer ${token}` } }

        dispatch(NavBar.statementLoading())
        await axios.put(Url,sendUpdate,config)
        dispatch(NavBar.statementReload(true))
        dispatch(GetNavBar())
    } catch (error) {

        return ThereIsNoConnectionToTheServer(dispatch, error, NavBar.statementError)
    }
}



// pushing new object . . . 
export const PushingNewData = (send) => async (dispatch, getState) => {


   

    const { Auth: { userInfo,token } } = getState()
    const config = { headers: { Authorization: `Bearer ${token}` } }

    let Url = `/api/navbar/pushing/navbar/`

    const newData = {
        name: send?.name?.trim()?.toLowerCase(),
        link: send?.link?.trim()?.toLowerCase(),
        location : userInfo?.location
    }
    try {
  

        dispatch(NavBar.statementLoading())
        await axios.post(Url, newData, config)
        dispatch(NavBar.statementReload(true))
        dispatch(GetNavBar())
    } catch (error) {

   
        return ThereIsNoConnectionToTheServer(dispatch, error, NavBar.statementError)
    }
}





// delete one item of object
export const deleteOneItemOfObject = (id) => async (dispatch, getState) => {



    try {
        const { Auth: { token } } = getState()
        const config = { headers: { Authorization: `Bearer ${token}` } }


        let Url = `/api/navbar/filter/navbar/${id}`

        dispatch(NavBar.statementLoading())
        const { data } = await axios.get(Url, config)

        dispatch(NavBar.statementReload(true))
        dispatch(GetNavBar())
    } catch (error) {

        return ThereIsNoConnectionToTheServer(dispatch, error, NavBar.statementError)
    }
}