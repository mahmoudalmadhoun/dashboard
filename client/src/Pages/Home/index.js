import React, { useEffect } from 'react'
import Connect from '../Connect/index'
import AdminNavBar from '../NavBar/index'
import { useDispatch } from 'react-redux'
import * as ConnectApi from '../../redux/Api/ConnectApi'




const Dashboard = (props) => {

    const dispatch = useDispatch()



    useEffect(() => {

        dispatch(ConnectApi.ConnectShow_Api())

    }, [dispatch])


    return   <AdminNavBar>
            <Connect />
        </AdminNavBar>
   


}


export default Dashboard