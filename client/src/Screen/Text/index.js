import React from "react";



export const TextH4 = (props) => {
    const { Styles ,Title } = props


    let defaultStyle = 'fontSize textalign buttomcolor'

    return <h4 className={Styles ? Styles : defaultStyle}>{Title}</h4>
}