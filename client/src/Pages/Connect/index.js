import React, { Fragment, useState } from "react"
import { FaRegEdit } from "react-icons/fa";
import * as Response from '../../utlis/Response'
import * as Styles from '../../utlis/Error'
import { useDispatch, useSelector } from "react-redux";
import IconEdit from "../../Screen/IconEdit/index";
import { ShareElement } from "../Update/edit";
import HandlePages from "../../Screen/HandlePages";
import { statementClearing } from "../../redux/Features/ConnectFeatures";
import { MdOutlineDelete } from "react-icons/md";
import { TextH4 } from "../../Screen/Text";


const Connect = (props) => {

    const dispatch = useDispatch()
    //get data
    const Connect = useSelector((state) => state.Connect)
    const { loading, error, connect } = Connect





    const [statementEdit, setStatementEdit] = useState(Response.StateMentCloseAdmin)
    const [pushingData, setPushingData] = useState({})

    // sen ,
    const [thesomaThing, SetthesomaThing] = useState({})




    // one and close page och update..
    const OpenAndClose = (item) => Response.PushingData_Connect(item, statementEdit, setStatementEdit, setPushingData, connect)
    // clearing error 
    const Clearingerror = () => Response.ClearingError_Connect(dispatch, setPushingData, setStatementEdit)
    // delete one 
    const DeleteAll = () => Response.DeleteConnect_Connect(dispatch, connect?._id)



    const ListConnect = {
        information: 'information',
        name: 'Your site name',
        addess: 'your address',
        phone: 'Contact phone',
        whatapp: 'Contact via WhatsApp',
        follow: 'Follow social media',
        facebook: 'facebook',
        instagram: 'instagram',
        twitter: 'twitter',
        about: 'Introduction about us',
        aboutname: 'title',
        description: 'description'
    }


  


    return (
        <div className="padding width60_______  marginauto adminclolor">


            <HandlePages
                loading={loading}
                error={error}
                Change__={Clearingerror}
                Element={
                    <div className='padding backgroundwhite ___margin_top_'>
                        {statementEdit?.open ? (

                            <ShareElement
                                data={pushingData}
                                setData={setPushingData}
                                statementEdit={statementEdit}
                                setStatementEdit={setStatementEdit}
                            />

                        ) : (
                            <Fragment>

                                <IconEdit
                                    Change__={() => OpenAndClose(ListConnect.information)}
                                    Icon={<FaRegEdit className="Icons_box cursor transition navbarcolor" />}
                                />
                                {connect === null ? (

                                    <TextH4
                                        Title='new create'
                                        Styles='fontSize navbarcolor ___margin_top_ marginB'
                                    />
                                ) : (
                                    <Fragment>

                                        <TextH4
                                            Title={ListConnect.information}
                                            Styles='fontSize navbarcolor ___margin_top_ marginB'
                                        />
                                        <p className={Styles.StylesP}>
                                            <span className="buttomcolor">{ListConnect?.name} :</span>
                                            {connect?.name}
                                        </p>


                                        <p className={Styles.StylesP}>
                                            <span className="buttomcolor">{ListConnect?.addess} :</span>
                                            {connect?.addres}</p>
                                        <p className={Styles.StylesP}>
                                            <span className="buttomcolor">{ListConnect?.phone} :</span>
                                            : {connect?.phone}</p>

                                        <p className={Styles.StylesP}>
                                            <span className="buttomcolor">{ListConnect?.whatapp} :</span>
                                            : {connect?.whatapp}</p>

                                        <TextH4
                                            Title={ListConnect.follow}
                                            Styles='fontSize navbarcolor ___margin_top_ marginB'

                                        />

                                        <p className={Styles.StylesP}>
                                            <span className="buttomcolor">{ListConnect?.facebook} :</span>
                                            : {connect?.facebook}</p>
                                        <p className={Styles.StylesP}>
                                            <span className="buttomcolor">{ListConnect?.instagram} :</span>
                                            : {connect?.instagram}</p>
                                        <p className={Styles.StylesP}>
                                            <span className="buttomcolor">{ListConnect?.twitter} :</span>
                                            : {connect?.twitter}</p>


                                        <TextH4
                                            Title={ListConnect.about}
                                            Styles='fontSize navbarcolor ___margin_top_ marginB'

                                        />
                                        <p className={Styles.StylesP}>
                                            <span className="buttomcolor">{ListConnect?.aboutname} :</span>
                                            : {connect?.aboutus?.name}</p>
                                        <p className={Styles.StylesP}>
                                            <span className="buttomcolor">{ListConnect?.description} :</span>
                                            : {connect?.aboutus?.des}</p>
                                        <IconEdit
                                            Change__={DeleteAll}
                                            Icon={<MdOutlineDelete className="Icons_box cursor transition error" />}
                                        />
                                    </Fragment>
                                )}




                            </Fragment>
                        )}

                    </div>
                }



            />


        </div>
    )
}


export default Connect