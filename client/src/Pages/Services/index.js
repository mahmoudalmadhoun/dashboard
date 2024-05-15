import React, { Fragment, useEffect, useState } from "react";
import * as Response from '../../utlis/Response'
import { FaRegEdit } from "react-icons/fa";
import AdminNavBar from "../NavBar/index";
import { useDispatch, useSelector } from 'react-redux'
import * as ServicesApi from "../../redux/Api/ServicesApi";
import { statementClearing } from "../../redux/Features/ServicesAction";
import IconEdit from "../../Screen/IconEdit";
import HandlePages from '../../Screen/HandlePages/index'
import Cart from '../../Screen/Cart/index'
import * as Text from '../../utlis/Error'
import { UploadCart } from '../../Screen/UploadCart/index'
import { TextH4 } from "../../Screen/Text";


const ServicesAdmin = () => {

    const dispatch = useDispatch()
    // statement change services 
    const [data, setValue] = useState(Response.StatemntServices)
    let Services = useSelector((state) => state.Services)
    const { ReloadPage, services, loading, error } = Services







    useEffect(() => {
        dispatch(ServicesApi.ServicesShow_Api())
    }, [dispatch])









    //  pushing data and open and close .... 
    const Change__Item = (item) => Response.OpenAndCloseAndUpadte_Products(item, data, setValue, dispatch, ReloadPage)
    // update data . . .
    const InputSendMailForm = (event, uploadImage) => Response.contactUpdate(event, uploadImage, data?.image, data, Number(1), dispatch)
    // delete one product .... 
    const DelectOneProduct = (item) => Response.DeleteOneProductElement_Products(item, dispatch)



    // clearing error
    const ClearingError = () => dispatch(statementClearing())


    return <AdminNavBar>
        <div className="padding width60_______  marginauto adminclolor">


            <HandlePages
                loading={loading}
                error={error}
                Change__={ClearingError}
                Element={
                    <div className='padding backgroundwhite ___margin_top_'>
                        {data?.oneItem ? (
                            <UploadCart
                                data={data}
                                setValue={setValue}
                                InputSendMailForm={InputSendMailForm}
                                ReloadPage={ReloadPage}
                                Close={Change__Item}
                                CheckData={services}
                                VlidationNumber={Number(1)}

                            />
                        ) : (
                            <Fragment>
                                <IconEdit
                                    Change__={() => Change__Item('information')}
                                    Icon={<FaRegEdit className="Icons_box cursor transition navbarcolor" />}
                                />

                                <TextH4
                                    Title={Text.services___}
                                    Styles='fontSize navbarcolor ___margin_top_ marginB'
                                />


                                <div className="flex flexwrap alignitems width__100 sd_">
                               
                               
                                    <Cart
                                        data={services}
                                        DelectOneProduct={DelectOneProduct}
                                        Update={Change__Item}
                                    />
                                </div>
                            </Fragment>
                        )}


                    </div >
                }
            />




        </div>




    </AdminNavBar >



}

export default ServicesAdmin
