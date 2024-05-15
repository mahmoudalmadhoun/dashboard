import React from "react"
import Login from "../../Pages/Profile/Login"
import { useSelector } from "react-redux"




const UserOnline = ({ children }) => {



    const Auth = useSelector((state) => state?.Auth)
    const { userInfo } = Auth



    return userInfo?._id ? children : <Login />

}


export default UserOnline