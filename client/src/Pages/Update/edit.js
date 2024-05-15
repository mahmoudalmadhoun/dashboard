import React from "react"
import TheInput from "../../Screen/TheInput/index"
import { ErrorStyle, StyleInput, TheCorrectBox, Uppdaterats } from "../../utlis/Error"
import TheButton from "../../Screen/button/index"
import * as Response from '../../utlis/Response'
import { FaCheck } from "react-icons/fa"
import { useDispatch, useSelector } from "react-redux"
import IconEdit from "../../Screen/IconEdit"
import { IoMdClose } from "react-icons/io";
import { RxUpdate } from "react-icons/rx";
import { TextH4 } from "../../Screen/Text"








export const ShareElement = (props) => {
    const { data, setData, statementEdit, setStatementEdit } = props


    if (statementEdit?.text === 'information') {
        return <Information
            data={data}
            setData={setData}
            statementEdit={statementEdit}
            setStatementEdit={setStatementEdit}
        />
    }


    return <h2>not . . . </h2>
}



export const Information = (props) => {

    const { data, setData, statementEdit, setStatementEdit } = props




    const dispatch = useDispatch()

    // successfully 
    const ReloadPage = useSelector((state) => state.Connect?.ReloadPage)
    // close --- edit 
    const Close = () => Response.ClosePage_Connect(setStatementEdit, ReloadPage, dispatch)
    // updated and create ....
    const InputSendMail = (event) => Response.Requires_Connect(event, data, dispatch)
    // vlidation connect . . .>
    const VlidationConnectInfo = () => Response.VlidationBut_Connect(data)



    return (
        <div>
            <IconEdit Change__={Close} Icon={<IoMdClose className="Icons_box cursor transition navbarcolor" />} />

            {ReloadPage ? (<TextH4 Title={Uppdaterats} />) :

                (<form onSubmit={InputSendMail}>


                    <p className={Response.Styletext}>{Response.UpdateText?.name}:</p>
                    <div className='position'>
                        <TheInput
                            onChange={(event) => setData({ ...data, name: event.target.value })}
                            value={data?.name}
                            placeholder={Response.UpdateText?.name}
                            type='text'
                            className={ErrorStyle(data?.phoneError)}
                        />
                        {TheCorrectBox(data?.name, 'inputname', FaCheck)}
                    </div>



                    <p className={Response.Styletext}>{Response.UpdateText?.addres}:</p>
                    <div className='position'>
                        <TheInput
                            type='text'
                            onChange={(event) => setData({ ...data, addres: event.target.value })}
                            value={data?.addres}
                            placeholder={Response.UpdateText?.addres}
                            className={ErrorStyle(data?.phoneError)}
                        />
                        {TheCorrectBox(data?.addres, 'inputname', FaCheck)}
                    </div>


                    <p className={Response.Styletext}>{Response.UpdateText?.phone}:</p>
                    <div className='position'>
                        <TheInput
                            type="number"
                            className={StyleInput}
                            onChange={(event) => setData({ ...data, phone: event.target.value })}
                            value={data?.phone}
                            placeholder={Response.UpdateText?.phone}

                        />
                        {TheCorrectBox(data?.phone, 'isPhone', FaCheck)}

                    </div>

                    <p className={Response.Styletext}>{Response.UpdateText?.whatapp}:</p>
                    <div className='position'>
                        <TheInput
                            onChange={(event) => setData({ ...data, whatapp: event.target.value })}
                            value={data?.whatapp}
                            placeholder={Response.UpdateText?.whatapp}
                            type='text'
                            className={ErrorStyle(data?.phoneError)}
                        />
                        {TheCorrectBox(data?.whatapp, 'inputname', FaCheck)}
                    </div>


                    <p className={Response.Styletext}>{Response.UpdateText?.facebook}:</p>
                    <div className='position'>
                        <TheInput
                            onChange={(event) => setData({ ...data, facebook: event.target.value })}
                            value={data?.facebook}
                            placeholder={Response.UpdateText?.facebook}
                            type='text'
                            className={ErrorStyle(data?.phoneError)}
                        />
                        {TheCorrectBox(data?.facebook, 'inputname', FaCheck)}
                    </div>
                    <p className={Response.Styletext}>{Response.UpdateText?.instagram}:</p>
                    <div className='position'>
                        <TheInput
                            onChange={(event) => setData({ ...data, instagram: event.target.value })}
                            value={data?.instagram}
                            placeholder={Response.UpdateText?.instagram}
                            type='text'
                            className={ErrorStyle(data?.phoneError)}
                        />
                        {TheCorrectBox(data?.instagram, 'inputname', FaCheck)}
                    </div>
                    <p className={Response.Styletext}>{Response.UpdateText?.twitter}:</p>
                    <div className='position'>
                        <TheInput
                            onChange={(event) => setData({ ...data, twitter: event.target.value })}
                            value={data?.twitter}
                            placeholder={Response.UpdateText?.twitter}
                            type='text'
                            className={ErrorStyle(data?.phoneError)}
                        />
                        {TheCorrectBox(data?.twitter, 'inputname', FaCheck)}
                    </div>


                    <p className={Response.Styletext}>{Response.UpdateText?.aboutus}</p>
                    <p className={Response.Styletext}>{Response.UpdateText?.aboutusname}:</p>
                    <div className='position'>
                        <TheInput
                            onChange={(event) => setData({ ...data, aboutus: { ...data.aboutus, name: event.target.value } })}
                            value={data?.aboutus?.name}
                            placeholder={Response.UpdateText?.aboutusname}
                            type='text'
                            className={ErrorStyle(data?.phoneError)}
                        />
                        {TheCorrectBox(data?.aboutus?.name, 'inputname', FaCheck)}
                    </div>


                    <p className={Response.Styletext}>{Response.UpdateText?.aboutusdes} :</p>
                    <div className='position'>
                        <textarea
                            type='text'
                            className="width__100 __margin___ fontText"
                            onChange={(event) => setData({ ...data, aboutus: { ...data.aboutus, des: event.target.value } })}
                            value={data?.aboutus?.des}
                            placeholder={Response.UpdateText?.aboutusdes}
                            rows='8'
                        />
                        {TheCorrectBox(data?.contactus?.des, 'inputname', FaCheck)}
                    </div>




                    <TheButton
                        onClick={InputSendMail}
                        ExtraStyle={!VlidationConnectInfo() ? Response.styleButtonError('flex alignitems justifyContentcenter sd_') : Response.StyleButton('flex alignitems justifyContentcenter sd_')}
                        AddIcons={<RxUpdate className="colorwhite marginright iconselecticon" />}
                        Title='updates'
                        disabled={!VlidationConnectInfo()}
                    />

                </form>
                )}



        </div>
    )
}