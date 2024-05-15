import React from "react";
import * as Response from '../../utlis/Response'
import MyImage from "../Image";
import { IoClose } from "react-icons/io5";
import * as Styles from '../../utlis/Error'




const Cart = (props) => {
    const {data,DelectOneProduct,Update} = props



    return data?.map((item, index) => (
        <div className="WIDTH__30_ marginright position" key={index}>
            <MyImage
                image={`${Response.UrlImageBackend}${item?.image}`}
                alt='mirstad'
                width='100%'
                height='200px'
                title='mirstad'
                className='border '
            />

            <IoClose onClick={() => DelectOneProduct(item)} className="close_ titlefont navbarcolor cursor transition" />

            <div className="flex flexdirectioncolumn alignitems card_box cursor">

                <h4 className="fontFamilynavbar font_h1 stadbackgroundcolro">{Response.TheSliceName(item?.name)}</h4>

                <div className="">
                    <p className={Styles.StylesP}>{Response.TheSlicedes(item?.des)}</p>
                    <p onClick={() => Update(item)} className="textalign display_block  fontText option stadbackgroundcolro textdecorationdisplay_block ___margin_top_ fontText option stadbackgroundcolro textdecoration">update </p>

                </div>



            </div>

        </div>
    ))
}


export default Cart