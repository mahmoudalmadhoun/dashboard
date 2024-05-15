import React, { useEffect, useState } from "react"
import HandlePages from "../../Screen/HandlePages"
import AdminNavBar from "../NavBar"
import { useDispatch, useSelector } from "react-redux"
import * as NavBarApi from "../../redux/Api/NavBarApi"
import IconEdit from "../../Screen/IconEdit"
import { FaRegEdit } from "react-icons/fa"
import * as Response from '../../utlis/Response'
import { MdDeleteOutline } from "react-icons/md";
import UpdateNav from "./Update"
import { TextH4 } from "../../Screen/Text"



const UpdateNavBar = () => {


    // get data ...
    const NavBar = useSelector((state) => state?.NavBar)
    const { loading, error, navbar, ReloadPage } = NavBar


    //statement inputs
    const [data, setData] = useState(Response.StatementNavBAR)
    const [thesamething, Setthesamething] = useState({})
    const dispatch = useDispatch()






    useEffect(() => {

        dispatch(NavBarApi.GetNavBar())
    }, [dispatch])


    // --------------------------------- Handle data --------------------------->
    // clearingerror 
    const clearingerror = () => Response.ClearingNavBarError__NavBar(dispatch)
    // update and close . . .
    const Change__Item = (item) => Response.CheckPage__navbar(item, data, setData, ReloadPage, dispatch, Setthesamething)
    // requires ... 
    const InputSendMail = (event) => (Response.Requires__NavBar(event, dispatch, data))
    // delete one item of navbar
    const DeleteOneItem = (item) => (Response.deleteOneItemOf___NavBar(dispatch, item?._id))
    // --------------------------------- Handle data --------------------------->


    const NavBarlist ={

        create : 'new create'
    }

    return (
        <AdminNavBar>
            <div className="padding width60_______  marginauto adminclolor">
                <HandlePages
                    loading={loading}
                    error={error}
                    Change__={clearingerror}
                    Element={
                        <div className="padding backgroundwhite ___margin_top_">

                            {data?.open ? null : (
                                <div className="backgroundwhite paddingle marginB">
                                  
                                    <IconEdit Change__={() => Change__Item('create')} Icon={<FaRegEdit className="Icons_box cursor transition navbarcolor" />} />
                                    <TextH4
                                        Title={NavBarlist?.create}
                                        Styles='fontSize navbarcolor ___margin_top_ marginB'
                                    />
                                </div>
                            )}



                            {data?.open ? (
                                <UpdateNav
                                    data={data}
                                    setData={setData}
                                    ReloadPage={ReloadPage}
                                    InputSendMail={InputSendMail}
                                    Change__Item={Change__Item}
                                    thesamething={thesamething}
                                />

                            ) : (
                                navbar?.navbar?.map((item, index) => (
                                    <div className="backgroundwhite paddingle marginB" key={index}>
                                        <IconEdit Change__={() => Change__Item(item)} Icon={<FaRegEdit className="Icons_box cursor transition navbarcolor" />} />
                                        <h4 className="fontFamilynavbar font_h1 navbarcolor">{item?.name}</h4>
                                        <p className="fontText option navbarcolor">{item?.link}</p>
                                        <IconEdit Change__={() => DeleteOneItem(item)} Icon={<MdDeleteOutline className="error Icons_box cursor transition " />} />

                                    </div>
                                ))
                            )}





                        </div>
                    }
                />

            </div>
        </AdminNavBar>
    )
}


export default UpdateNavBar