import React from "react"
import * as Response from '../../utlis/Response'
import { CiUser } from "react-icons/ci"




export const ListNavBar = (props) => {
    const { css } = props





    return <ul className={css?.ul}>
        {Response.List___?.map((item, index) => (


            <a key={index} href={item?.link} >
                <li className="padding flex alignitems">
                    {Response.Icons___(item?.icon, css.icon)}
                    <p className={css.a} >{item?.name}</p>
                </li>


            </a>

        ))}

    </ul>
}



export const NavBar = (props) => {
    const { css, Change, } = props






    return <div className="adminclolor padding flex alignitems spacebetween">

        <a href="/" className="cursor transition">
            <h2 className="colorwhite fontSize first_">{Response.Name}</h2>
        </a>


        <div className="margin_left">
            <a href="/profile" className='list extra flex alignitems justifyContent cursor transition '>
                <CiUser className='iconfont colorwhite' />
            </a>
        </div>

        <div className="click_but flex justifyContentcenter alignitems cursor" onClick={Change}>
            <div className={css.menubar}  >
                <div className='menu-btn__burger' />
            </div>
        </div>
    </div>
}
