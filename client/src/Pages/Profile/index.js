import React from 'react'
import AdminNavBar from '../NavBar'
import HandlePages from '../../Screen/HandlePages'
import { TextH4 } from '../../Screen/Text'
import { CiUser } from "react-icons/ci";
import { LuLogOut } from "react-icons/lu";
import { useDispatch, useSelector } from 'react-redux'
import * as AuthAction from '../../redux/Features/AuthFeatures'
import UserOnline from '../../Screen/UserOnline/index'

const Profile = (props) => {


    const Auth = useSelector((state) => state?.Auth)
    const { loading, error, userInfo } = Auth





    const dispatch = useDispatch()



    // logo ut ...
    const Logout = () => dispatch(AuthAction.statementLogout())

    const Clearingerror = () => console.log('clearing errro')

    return (
        <UserOnline>
            <AdminNavBar>
                <div className="padding width60_______  marginauto adminclolor">


                    <HandlePages
                        loading={loading}
                        error={error}
                        Change__={Clearingerror}
                        Element={
                            <div className="padding backgroundwhite ___margin_top_">


                                <div className='flex flexrowreverse alignitems margintop'>
                                    <div className='list flex alignitems justifyContent cursor transition'>
                                        <CiUser className='iconfont navbarcolor ' />
                                    </div>

                                    <div className='list flex alignitems justifyContent marginright_one cursor transition' onClick={Logout}>
                                        <LuLogOut className='iconfont navbarcolor' />
                                    </div>


                                </div>
                                <TextH4
                                    Title='my profile'
                                    Styles='fontSize navbarcolor ___margin_top_ marginB'
                                />

                                <TextH4
                                    Title={`welcome :${userInfo?.phone}`}
                                    Styles='fontSize navbarcolor ___margin_top_ marginB'
                                />

                            </div>
                        }
                    />
                </div>
            </AdminNavBar>
        </UserOnline>

    )
}

export default Profile