import React, { Fragment } from "react"
import { Errorserver } from "../../utlis/Error"
import TheLoading from "../Loading"
import IconEdit from "../IconEdit"
import { IoMdClose } from "react-icons/io"
import { TextH4 } from '../Text/index'
import { MdOutlineRunningWithErrors } from "react-icons/md";




const HandlePages = (props) => {
    const { loading, error, Element, Change__ } = props


    return loading ? (
        <div className="devloading flex alignitems justifyContent flexdirectioncolumn hei_" >
            <TheLoading />
        </div>
    ) : error ? (
        <Fragment>
            <div className="devloading flex alignitems justifyContent flexdirectioncolumn hei_" onClick={Change__}>
                <TextH4
                    Title={Errorserver}
                    Styles='fontSize  colorwhite marginright'
                />
                <div className="position transition cursor sd_" >
                    <div className="buterro paddingle flex alignitems justifyContent ">

                        <TextH4
                            Title={Errorserver}
                            Styles='font_h1  colorwhite marginright'
                        />
                        <MdOutlineRunningWithErrors className="colorwhite font_h1" />


                    </div>
                    <div className="cricl stadbackground" />
                </div>

            </div>

        </Fragment>
    ) : Element


}

export default HandlePages