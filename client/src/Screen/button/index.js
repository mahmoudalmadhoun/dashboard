



import React from "react"



const TheButton = (props) => {
    const { Title, AddIcons, onClick, AddStyle, ExtraStyle, disabled } = props



    const TheStyle = `${AddStyle} box___ flex alignitems justifyContentcenter cursor`



    return <button
        disabled={disabled}
        type="submit"
        onClick={onClick}
        className={ExtraStyle ? ExtraStyle : TheStyle}
    >
        {AddIcons}
        {Title ? (<p className='fontText colorwhite option'>{Title ? Title : 'skapa ett nytt inlägg'}</p>) : null}
    </button>


}


export default TheButton