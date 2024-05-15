import React from "react"
import { IoMdClose } from "react-icons/io"




export const ElementShowImage = (props) => {
    const { image, ShowImage } = props



    return image?.show ? (
        <div className="row_modal open adminclolor">
            <div className="position padding flex alignitems flexdirectioncolumn">
                <IoMdClose className="change_close cursor" onClick={ShowImage} />
                <img src={image?.url} width='100%' height='500vh' />
            </div>
        </div>
    ) : null

}


export const CardImage = (props) => {
    const { Url, ShowImage, deleteImage } = props

    return Url ? (
        <div className="position ___margin_top_ marginB">
            <IoMdClose className="change_close" onClick={deleteImage} />
            <img
                src={Url}
                width='100%'
                height='200px'
                onClick={ShowImage}
                value={Url}

            />
        </div>

    ) : null
}