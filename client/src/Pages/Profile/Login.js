import React, { Fragment, useState } from "react"
import TheInput from "../../Screen/TheInput"
import { ErrorStyle, TheCorrectBox } from "../../utlis/Error"
import { FaCheck } from "react-icons/fa6"
import TheButton from "../../Screen/button"
import * as Response from '../../utlis/Response'
import { RxUpdate } from "react-icons/rx";
import { BiSolidShow } from "react-icons/bi";
import { ValtionMe } from "../../utlis/ValtionMe"
import { BsSend } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux"
import HandlePages from '../../Screen/HandlePages/index'
import * as AuthApi from '../../redux/Api/AuthApi'
import * as AuthAction from '../../redux/Features/AuthFeatures'

const Login = (props) => {


    // STATMENT LOGIN
    const [data, setData] = useState(Response.StatementLogin)
    const [code, setCode] = useState(false)
    const dispatch = useDispatch()
    // validation login 
    const LoginTheValidation = () => Response.LoginValidationA(data, code)

    // SHOW PASSWORD . . .
    const Changeview = () => Response.ShowPassword(data, setData)


    const InputSendMail = (event) => {
        event.preventDefault()
        setData({
            ...data,
            error: false
        })

        if (!ValtionMe(data.phone, 'isPhone') || !ValtionMe(data.password, 'inputname')) {

            return setData({
                ...data,
                error: true
            })

        }



        return dispatch(AuthApi.AuthLogin_Api(data))
    }



    const SendCODE = () => {
        let checkoUT = code === true ? false : true
        setCode(checkoUT)
    }






    const Auth = useSelector((state)=>state?.Auth)
    const {loading,error,} = Auth





    const ClearingError = () => {

        dispatch(AuthAction.statementClearing())
        setData(Response.StatementLogin)
    }

    return (<div className="flex flexdirectioncolumn alignitems justifyContent screenheight padding">



        <HandlePages
            loading={loading}
            error={error}
            Change__={ClearingError}
            Element={
                <Fragment>
                    <div className="">
                        <h4 className="fontSize textalign">{code ? Response.EmailCode : Response.logga}</h4>
                        <div className="line margintop margin_left adminBackgroun" />
                    </div>

                    <div className="margintop" />
                    <form onSubmit={InputSendMail}>


                        {code ? (
                            <Fragment>
                                <p className="margintop ">{Response.textInfo.email}</p>
                                <div className='position'>
                                    <TheInput
                                        onChange={(event) => setData({ ...data, email: event.target.value })}
                                        value={data?.email}
                                        placeholder={Response.textInfo.email}
                                        type='email'
                                        className={ErrorStyle(!ValtionMe(data?.email, 'isEmail') ? data?.error : false)}
                                    />
                                    {TheCorrectBox(data?.email, 'isEmail', FaCheck)}
                                    <div className="cricl disabledbackground" />
                                </div>

                            </Fragment>

                        ) : (
                            <Fragment>
                                <p className="margintop ">{Response.textInfo.phoneinput}</p>
                                <div className='position'>
                                    <TheInput
                                        onChange={(event) => setData({ ...data, phone: event.target.value })}
                                        value={data?.phone}
                                        placeholder={Response.textInfo.phoneinput}
                                        type='number'
                                        className={ErrorStyle(!ValtionMe(data?.phone, 'isPhone') ? data?.error : false)}
                                    />
                                    {TheCorrectBox(data?.phone, 'isPhone', FaCheck)}
                                    <div className="cricl disabledbackground" />
                                </div>
                                <p className="margintop fontText">{Response.textInfo.password}</p>
                                <div className='position'>
                                    <TheInput
                                        onChange={(event) => setData({ ...data, password: event.target.value })}
                                        value={data?.password}
                                        placeholder={Response.textInfo.password}
                                        type={data?.view ? 'text' : 'password'}
                                        className={ErrorStyle(!ValtionMe(data?.password, 'inputname') ? data?.error : false)}
                                    />
                                    {data?.password?.length > Number(2) ? (<BiSolidShow onClick={Changeview} className="stadbackgroundcolro iconfont transition  InputLeftRight cursor" />) : null}
                                    <div className="cricl disabledbackground" />
                                </div>

                            </Fragment>
                        )}




                        <div className="margintop" />
                        <TheButton
                            disabled={!LoginTheValidation()}
                            onClick={InputSendMail}
                            ExtraStyle={!LoginTheValidation() ? Response.styleButtonError('flex alignitems justifyContentcenter') : Response.StyleButton('flex alignitems justifyContentcenter')}
                            AddIcons={code ? <BsSend className="colorwhite marginright iconselecticon" /> : <RxUpdate className="colorwhite marginright iconselecticon" />}
                            Title={code ? Response.SendCodebut : Response.logga}
                        />
                        <div className="flex margintop flexwrap justifyContent" onClick={SendCODE}>
                            <p className="">Have you forgotten your password ?</p>
                            <p className="textdecoration stadbackgroundcolro  option cursor"> click here</p>

                        </div>
                    </form>
                </Fragment>
            }



        />

    </div>
    )
}


export default Login