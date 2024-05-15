import React, { useState } from "react"
import * as Response from '../../utlis/Response'
import * as Admin from "./NavBar"





const AdminNavBar = (props) => {

    const [css, setCss] = useState(Response.NavBarStatment)
    const Change = () => (Response.NavBarCondation(css, setCss))


    return <div className=''>
        <Admin.NavBar
            css={css}
            Change={Change}
        />
        <div className='flex adminclolor'>
            <Admin.ListNavBar
                css={css}
            />

            {props.children}

        </div>
    </div>
}

export default AdminNavBar