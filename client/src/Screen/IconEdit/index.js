import React from "react"



const IconEdit = (props) => {
    const { Change__ ,Icon} = props


    return <div className="flex flexrowreverse" onClick={Change__}>
         {Icon}
    </div>
}

export default IconEdit