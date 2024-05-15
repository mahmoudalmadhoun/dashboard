import React, { Fragment, useState } from "react"
import * as Response from '../../utlis/Response'
import IconEdit from "../IconEdit"
import { IoMdClose } from "react-icons/io"
import TheInput from '../TheInput/index'
import { CardImage } from '../ShowImage/index'
import { TextH4 } from '../Text/index'
import TheButton from '../button/index'
import { ErrorStyle, StyleInput, TheCorrectBox, Uppdaterats, somaText } from "../../utlis/Error"
import { FaCheck } from "react-icons/fa"
import { MdOutlineAccessTime } from "react-icons/md"
import { IoAddSharp } from "react-icons/io5";




// here is update data  - 2
export const UploadCart = (props) => {
    // update data and set data 1- data and setValue 
    //  3-InputSendMailForm requires 
    // 4- ReloadPage sussfully ... 
    // 5 - filter for soma the data
    // 6 - VlidationNumber validation numner .... 
    // 7- ShowOnly --- which show 
    // 8- extra inputs to article ..
    const { data, setValue, InputSendMailForm, ReloadPage, CheckData, ShowOnly, VlidationNumber, Close, ExtraInputs,arrayMore,setArrayMore } = props


       

    // upload new image and save
    const [uploadImage, setUploadImage] = useState(Response.statementUploading)




    /// start upload image -------------------------->
    // upload image ....
    const TestUploadingIamge = (e) => {
        e.preventDefault()

        let CheckOut = uploadImage.oldImage === '' ? data.image?.slice(8) : uploadImage.oldImage
        let files = e.target.files[0]
        let src = typeof window !== 'undefined' ? window.URL.createObjectURL(files) : 'loading'

        setUploadImage({
            ...uploadImage,
            changePath: true,
            newImage: src,
            oldImage: CheckOut
        })

        setValue({
            ...data,
            image: files
        })


    }
    // delete old image 
    const OrginalDeleteImage = (urlImage) => {

        setValue({
            ...data,
            image: ''
        })

        setUploadImage({
            ...uploadImage,
            newImage: '',

        })

        if (!uploadImage.changePath) {


            // save old image 
            setUploadImage({
                ...uploadImage,
                oldImage: urlImage?.slice(8),

            })
        }


    }

    /// end upload image -------------------------->




    // vlidation - -- - ->
    const ValidationInputs = () => Response.AllVlidationInputs(data, VlidationNumber)


    // equal data 
    const EqualData = () => {
        return CheckData?.findIndex((x) => x?.name?.trim()?.toLowerCase() === data?.name?.trim()?.toLowerCase())
    }


        // add more // start ------------------
        const [moreData, setMoreData] = useState('')
        const AddMoreInput = () => {



            console.log(arrayMore?.length)
  

            // arrayMore.push(moreData?.trim()?.toLowerCase())
            // if(arrayMore?.length === Number(0)) return arrayMore.push(moreData?.trim()?.toLowerCase())
            setArrayMore([
                ...arrayMore,
                moreData?.trim()?.toLowerCase()
            ])
          
          setMoreData('')
          return
        }

        const DeleteMore = (item) => {
    
            let CkeckOut = arrayMore?.filter((x) => x?.toString() !== item?.toString())
    
            setArrayMore(CkeckOut)
        }
        // add more // END ------------------


    return (
        <div >
            <IconEdit Change__={Close} Icon={<IoMdClose className="Icons_box cursor transition navbarcolor" />} />
            {ReloadPage ? (

                <TextH4
                    Title={Uppdaterats}
                    Styles='fontSize navbarcolor ___margin_top_ marginB'
                />

            ) : (

           
                    <div onSubmit={(event) => InputSendMailForm(event, uploadImage)}>

                        <p className={Response.Styletext}>{Response.UpdateText.Servicename} :</p>

                        <div className='position'>
                            <TheInput
                                type='text'
                                className={ErrorStyle(data?.phoneError)}
                                onChange={(event) => setValue({ ...data, name: event.target.value })}
                                value={data?.name}
                                placeholder={Response.UpdateText.Servicename}
                            />
                            {TheCorrectBox(data?.name, 'inputname', FaCheck)}
                        </div>



                        {ShowOnly ? null : (<Fragment>
                            <p className={Response.Styletext}>{Response.UpdateText.aboutusdes} :</p>
                            <div className='position'>
                                <textarea
                                    type='text'
                                    className="width__100 __margin___ fontText"
                                    rows='8'
                                    onChange={(event) => setValue({ ...data, des: event.target.value })}
                                    value={data?.des}
                                    placeholder={Response.UpdateText.aboutusdes}

                                />
                                {TheCorrectBox(data?.des, 'inputname', FaCheck)}
                            </div>
                        </Fragment>)}



                        {ExtraInputs ? (
                            <div>

                                <div className="flex flexdirectioncolumn">
                                    {arrayMore?.length > Number(0) ? arrayMore?.map((item, index) => (
                                        <div className="flex alignitems cursor" key={index} onClick={() => DeleteMore(item)}>
                                            <IoMdClose className="Icons_box" />

                                            <p className="__margin___ marginB" >
                                                {index + 1} : {item}
                                            </p>
                                        </div>

                                    )) : null}

                                </div>

                                <p className={Response.Styletext}>{Response.UpdateText.more} :</p>
                                <div className='position'>
                                    <textarea
                                        type='text'
                                        className="width__100 __margin___ fontText"
                                        rows='8'

                                        onChange={(event) => setMoreData(event.target.value)}
                                        value={moreData}
                                        placeholder={Response.UpdateText.more}
                                    />
                                    {TheCorrectBox(moreData, 'inputname', FaCheck)}
                                </div>

                                <TheButton
                                    // disabled={!ValidationInputs()}
                                    onClick={AddMoreInput}
                                    ExtraStyle={Response.StyleButton('flex alignitems justifyContentcenter sd_')}
                                    AddIcons={<IoAddSharp className="colorwhite marginright iconselecticon" />}
                                    Title='add more'
                                />


                            </div>
                        ) : null}




                        <p className={Response.Styletext}>{Response.UpdateText.Uploadaphoto} :</p>
                        <div className="position">
                            <TheInput
                                type="file"
                                placeholder="Upload File"
                                required
                                onChange={TestUploadingIamge}
                                name="image"
                                className={StyleInput}
                            />
                        </div>

                        {data.image ? (
                            <CardImage
                                Url={uploadImage?.changePath ? uploadImage.newImage : `${Response.UrlImageBackend}${data.image}`}
                                deleteImage={() => OrginalDeleteImage(data.image)}

                            />
                        ) : null}





                        {EqualData() === Number(0) ? (
                            <TextH4 Title={somaText} />
                        ) : (
                            <TheButton
                                disabled={!ValidationInputs()}
                                onClick={(event) => InputSendMailForm(event, uploadImage)}
                                ExtraStyle={!ValidationInputs() ? Response.styleButtonError('flex alignitems justifyContentcenter sd_') : Response.StyleButton('flex alignitems justifyContentcenter sd_')}
                                AddIcons={<MdOutlineAccessTime className="colorwhite marginright iconselecticon" />}
                                Title='updates'
                            />
                        )}

                    </div>
 

            )}

        </div>

    )
}