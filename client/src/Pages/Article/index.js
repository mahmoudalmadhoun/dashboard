import React, { useEffect, useState } from "react"
import AdminNavBar from '../NavBar/index'
import { useDispatch, useSelector } from "react-redux"
import * as ArticleApi from '../../redux/Api/ArticleApi'
import * as ArticleAction from '../../redux/Features/ArticleAction'
import * as Response from '../../utlis/Response'
import * as Text from '../../utlis/Error'
import HandlePages from '../../Screen/HandlePages/index'
import Cart from '../../Screen/Cart/index'
import { TextH4 } from "../../Screen/Text"
import IconEdit from "../../Screen/IconEdit"
import { FaRegEdit } from "react-icons/fa"
import { UploadCart } from "../../Screen/UploadCart"


const Article = (props) => {


    const dispatch = useDispatch()

    const Article = useSelector((state) => state.Article)
    const { error, loading, article, ReloadPage } = Article
    // const 



    useEffect(() => {

        dispatch(ArticleApi.ArticeShow_Api())

    }, [dispatch])


    // delete
    const DelectOneProduct = (item) => Response.DeleteItemWithImage(item, dispatch, Number(7))

    // inputs 
    const [data, setValue,] = useState({
        name: '',
        des: '',
        image: '',
        open: false,
        _id: ''
    })
    const [arrayMore, setArrayMore] = useState([])

    // create   and // update ..
    const NewCreate = (item) => {
        let checkOut = data?.open === true ? false : true


        ReloadPage && dispatch(ArticleAction.statementClearing())

        if (checkOut) {
            setValue({
                _id: Response.Check_Empty(item?._id),
                name: Response.Check_Empty(item?.name),
                des: Response.Check_Empty(item?.des),
                image: Response.Check_Empty(item?.image),
                open: checkOut
            })
            let cp = item?.more?.length > Number(0) ? item?.more : []
            setArrayMore(cp)
            return
        } else {
            setValue({
                name: '',
                des: '',
                image: '',
                open: false,
                _id: ''
            })
            setArrayMore([])
            return
        }

    }




    const data__ = {
        name: data?.name,
        des: data?.des,
        more: arrayMore,
        image: data?.image,
        _id: data?._id
    }


    const InputSendMailForm = (event, uploadImage) => Response.contactUpdate(event, uploadImage, data?.image, data__, Number(6), dispatch)

    return (
        <AdminNavBar>
            <header className="padding width60_______  marginauto adminclolor" >
                <HandlePages
                    loading={loading}
                    error={error}
                    Change__={() => console.log('clearing error...')}
                    Element={
                        <div className='padding backgroundwhite ___margin_top_'>
                            {data?.open ? (
                                <UploadCart
                                    data={data}
                                    setValue={setValue}
                                    VlidationNumber={Number(1)}
                                    ExtraInputs
                                    arrayMore={arrayMore}
                                    setArrayMore={setArrayMore}
                                    InputSendMailForm={InputSendMailForm}
                                    Close={NewCreate}
                                    ReloadPage={ReloadPage}
                                />
                            ) : (
                                <div>
                                    <IconEdit Change__={NewCreate} Icon={<FaRegEdit className="Icons_box cursor transition navbarcolor" />} />
                                    <TextH4 Title={Text.Article} Styles='fontSize navbarcolor ___margin_top_ marginB' />
                                    <div className="flex flexwrap alignitems width__100 sd_">
                                        <Cart data={article} DelectOneProduct={DelectOneProduct} Update={NewCreate} />
                                    </div>
                                </div>
                            )}



                        </div>
                    }


                />


            </header>
        </AdminNavBar>

    )
}


export default Article