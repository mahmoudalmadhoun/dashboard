import React from "react"
import IconEdit from "../../Screen/IconEdit"
import { IoMdClose } from "react-icons/io";
import * as Response from '../../utlis/Response'
import TheInput from "../../Screen/TheInput"
import { ErrorStyle, TheCorrectBox, Uppdaterats, somaText } from "../../utlis/Error"
import { FaCheck } from "react-icons/fa6"
import TheButton from "../../Screen/button"
import { RxUpdate } from "react-icons/rx";
import { useSelector } from "react-redux";
import { TextH4 } from "../../Screen/Text";


const UpdateNav = (props) => {
    const { data, setData, ReloadPage, InputSendMail, Change__Item, thesamething } = props


    // set data... 
    const navbar = useSelector((state) => state?.NavBar?.navbar)

    // 1 - vlidation inputs  ---- move important ----
    const ValidationInputs = () => Response.TheVlidation__NavBar(thesamething, data)
    // 2 - vlidation inputs 
    const Equal = () => Response.Equal_navbar(navbar, data)








    return (
        <div className="backgroundwhite paddingle marginB" >
            <IconEdit
                Change__={Change__Item}
                Icon={<IoMdClose className="Icons_box cursor transition navbarcolor" />}
            />
            {ReloadPage ? (
                <TextH4
                    Title={Uppdaterats}
                    Styles='fontSize navbarcolor ___margin_top_ marginB'
                />

            ) : (
                <form onSubmit={InputSendMail}>


                    <p className={Response.Styletext}>{Response.UpdateText?.path}:</p>
                    <div className='position'>
                        <TheInput
                            onChange={(event) => setData({ ...data, name: event.target.value })}
                            value={data?.name}
                            placeholder={Response.UpdateText?.path}
                            type='text'
                            className={ErrorStyle(data?.phoneError)}
                        />
                        {TheCorrectBox(data?.name, 'inputname', FaCheck)}
                    </div>

                    <p className={Response.Styletext}>{Response.UpdateText?.link}:</p>
                    <div className='position'>
                        <TheInput
                            onChange={(event) => setData({ ...data, link: event.target.value })}
                            value={data?.link}
                            placeholder={Response.UpdateText?.link}
                            type='text'
                            className={ErrorStyle(data?.phoneError)}
                        />
                        {TheCorrectBox(data?.link, 'TheTime', FaCheck)}
                    </div>

                    {Equal() === Number(0) ?
                        <TextH4 Title={somaText} />
                        : <TheButton
                            onClick={InputSendMail}
                            ExtraStyle={ValidationInputs() ? Response.styleButtonError('flex alignitems justifyContentcenter sd_') : Response.StyleButton('flex alignitems justifyContentcenter sd_')}
                            AddIcons={<RxUpdate className="colorwhite marginright iconselecticon" />}
                            Title='updates'
                            disabled={ValidationInputs()}
                        />
                    }



                </form>
            )}

        </div>
    )
}

export default UpdateNav