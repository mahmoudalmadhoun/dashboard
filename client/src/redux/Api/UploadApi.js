import axios from "./axios"
import { ThereIsNoConnectionToTheServer } from './network'
import * as UploadAction from '../Features/UploadFeatures'
import * as ServicesApi from "./ServicesApi"
import * as LasworkingApi from './LastWorkApi'
import * as ArticleApi from './ArticleApi'



// delete Image
// [1] delete old image
// [2] uploading new image . . . .
// [3] update data text 
// [4] number for if condation 
export const DeleteImage = (Image__, TheImage, Updatedata, TheNumber) => async dispatch => {

    let Url = `/api/delete/image/${Image__}`
    try {

        await axios.delete(Url)
        if (TheImage !== '') {

            // uploading new image . . .
            return dispatch(UploadOneImage(TheImage, Updatedata, TheNumber))

        } else {
            if (Number(TheNumber) === Number(1)) return await dispatch(ServicesApi.ServicesUpdate_Api(Updatedata))
            if (Number(TheNumber) === Number(2)) return await dispatch(ServicesApi.ServicesDelete_Api(Updatedata))
            if (Number(TheNumber) === Number(3)) return await dispatch(LasworkingApi.LastworkingDelete_Api(Updatedata))
            if (Number(TheNumber) === Number(4)) return await Updatedata?._id ? dispatch(LasworkingApi.LastWorkingUpdate_Api(Updatedata)) : dispatch(LasworkingApi.LastWorkingCreate_Api(Updatedata))
            if (Number(TheNumber) === Number(6)) return await dispatch(ArticleApi.ArticleUpdate_Api(Updatedata))
            if (Number(TheNumber) === Number(7)) return await dispatch(ArticleApi.ArticeDelete_Api(Updatedata))

        }

    } catch (error) {
        return ThereIsNoConnectionToTheServer(dispatch, error, UploadAction.statementError)
    }
}



// uploading one image 
// url . . .
// [1] uploading image 
// [2] data to update .. 
// [3] statement condation number 
export const UploadOneImage = (TheImage, Updatedata, TheNumber) => async dispatch => {

    const config = {
        headers: { 'Content-Type': 'multipart/form-data' }
    }

    const Url = '/api/uploading/'
    try {

        // console.log('yes new image 2')
        dispatch(UploadAction.statementLoading())
        let formData = new FormData()
        formData.append('image', TheImage)

        const { data } = await axios.post(Url, formData, config)
        if (Number(TheNumber) === Number(1)) return await Updatedata?._id ? dispatch(SendUpdateServices(data, Updatedata)) : dispatch(CreateProduct(data, Updatedata))
        if (Number(TheNumber) === Number(4)) return await Updatedata?._id ? dispatch(LastWorking_Update(data, Updatedata)) : dispatch(LastWorking_Create(data, Updatedata))
        if (Number(TheNumber) === Number(6)) return await Updatedata?._id ? dispatch(ArticleUpdate_HandleIt(data, Updatedata)) : dispatch(ArticleCreate_HandleIt(data, Updatedata))



    } catch (error) {
        return ThereIsNoConnectionToTheServer(dispatch, error, UploadAction.statementError)
    }
}


///
// Contact Us update . . .
export const SendUpdateServices = (data, Updatedata) => async dispatch => {

    const newObject = {

        image: data,
        _id: Updatedata?._id,
        user: Updatedata?.user,
        des: Updatedata?.des,
        name: Updatedata?.name,
        seo: Updatedata?.seo,
        more: Updatedata?.more

    }

    // updated text . . . 
    await dispatch(ServicesApi.ServicesUpdate_Api(newObject))

}


// Contact Us update . . .
export const CreateProduct = (data, Updatedata) => async (dispatch, getState) => {

    const { Auth: { userInfo } } = getState()
    let location = window?.location?.host ? window?.location?.host : ''
    const newObject = {
        image: data,
        user: userInfo?._id,
        name: Updatedata?.name,
        des: Updatedata?.des,
        seo: Updatedata?.seo,
        more: Updatedata?.more,
        location: location

    }

    // updated text . . . 
    await dispatch(ServicesApi.ServicesCreate_Api(newObject))

}



/// create new last working ...
export const LastWorking_Create = (data, Updatedata) => async dispatch => {

    const newObject = {
        image: data,
        name: Updatedata?.name?.trim()?.toLowerCase(),
    }

    // updated text . . . 
    await dispatch(LasworkingApi.LastWorkingCreate_Api(newObject))

}



/// create new last working ...
export const LastWorking_Update = (data, Updatedata) => async dispatch => {



    const newObject = {
        image: data,
        name: Updatedata?.name?.trim()?.toLowerCase(),
        _id: Updatedata?._id,
    }

    // updated text . . . 
    await dispatch(LasworkingApi.LastWorkingUpdate_Api(newObject))

}




// article create data 
// 
export const ArticleCreate_HandleIt = (data, Updatedata) => async dispatch => {
    const newObject = {
        image: data,
        name: Updatedata?.name?.trim()?.toLowerCase(),
        des: Updatedata?.des?.trim()?.toLowerCase(),
        more: Updatedata?.more,
    }

    // updated text . . . 
    await dispatch(ArticleApi.ArticleCreate_Api(newObject))

}


///
// article create data 
// 
export const ArticleUpdate_HandleIt = (data, Updatedata) => async dispatch => {
    const newObject = {
        _id: Updatedata?._id,
        name: Updatedata?.name?.trim()?.toLowerCase(),
        des: Updatedata?.des?.trim()?.toLowerCase(),
        more: Updatedata?.more,
        image: data,
    }

    // updated text . . . 
    await dispatch(ArticleApi.ArticleUpdate_Api(newObject))

}