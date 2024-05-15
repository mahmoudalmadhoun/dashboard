import React, { Fragment, useEffect, useState } from "react"
import HandlePages from "../../Screen/HandlePages"
import { useDispatch, useSelector } from "react-redux"
import AdminNavBar from '../NavBar/index'
import * as Response from '../../utlis/Response'
import { FaRegEdit } from "react-icons/fa"
import Cart from "../../Screen/Cart"
import * as LasworkingApi from "../../redux/Api/LastWorkApi"
import * as LastWorkingAction from "../../redux/Features/LastwokingFeatures"
import IconEdit from "../../Screen/IconEdit"
import * as ErrorText from '../../utlis/Error'
import { UploadCart } from "../../Screen/UploadCart"
import { TextH4 } from "../../Screen/Text"


const ShowWorking = (props) => {

    const dispatch = useDispatch()

    const Lastworking = useSelector((state) => state?.Lastworking)
    const { loading, error, Last, ReloadPage } = Lastworking




    useEffect(() => {
        dispatch(LasworkingApi.LastWorkingShow_Api())
    }, [dispatch])



    // statement inputs 
    const [data, setData] = useState(Response.StatementLastWorking)
    // clearing error ....
    const Clearingerror = () => dispatch(LastWorkingAction.statementClearing())
    // requires data
    const InputSendMailForm = (event, uploadImage) => Response.contactUpdate(event, uploadImage, data?.image, data, Number(4), dispatch)
    //delete one product 
    const DeleteOneImage = (item) => Response.DeleteItemWithImage(item, dispatch,Number(3))


    // pushing data 
    const UpdateNewLastAndCreate = (item) => {

        let checkOut = data?.open === true ? false : true

        if (checkOut) {

            setData({
                ...data,
                open: checkOut,
                name: Response.Check_Empty(item?.name),
                image: Response.Check_Empty(item?.image),
                user: Response.Check_Empty(item?.user),
                _id: Response.Check_Empty(item?._id)
            })
            return
        } else {

            setData(Response.StatementLastWorking)
            Clearingerror()
            return
        }



    }




    return (
        <AdminNavBar>
            <div className="padding width60_______  marginauto adminclolor">


                <HandlePages
                    loading={loading}
                    error={error}
                    Change__={Clearingerror}
                    Element={
                        <div className="padding backgroundwhite ___margin_top_">

                            {data?.open ? (
                                <UploadCart
                                    data={data}
                                    setValue={setData}
                                    InputSendMailForm={InputSendMailForm}
                                    ReloadPage={ReloadPage}
                                    CheckData={Last}
                                    VlidationNumber={Number(2)}
                                    Close={UpdateNewLastAndCreate}
                                    ShowOnly

                                />
                            ) : (

                                <Fragment>
                                    <IconEdit Change__={UpdateNewLastAndCreate} Icon={<FaRegEdit className="Icons_box cursor transition navbarcolor" />} />
                                    <TextH4
                                        Title={ErrorText?.lastworkingtext}
                                        Styles='fontSize navbarcolor ___margin_top_ marginB'
                                    />

                                    <div className="flex flexwrap spacebetween width__100 sd_">
                                        <Cart
                                            data={Last}
                                            DelectOneProduct={DeleteOneImage}
                                            Update={UpdateNewLastAndCreate}
                                        />
                                    </div>
                                </Fragment>
                            )}

                        </div>
                    }
                />

            </div>
        </AdminNavBar>

    )
}



export default ShowWorking