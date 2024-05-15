import React from "react"
import { ValtionMe } from "./ValtionMe"
import { CiHome } from "react-icons/ci";
import { MdOutlineMiscellaneousServices } from "react-icons/md";
import { MdHomeMax } from "react-icons/md";
import { MdOutlineRoundaboutLeft } from "react-icons/md";
import { FaRegUser } from "react-icons/fa6";
import * as ServicesAction from "../redux/Features/ServicesAction";
import * as ServicesApi from "../redux/Api/ServicesApi";
import * as UploadingImageApi from "../redux/Api/UploadApi";
import * as NavBarApi from "../redux/Api/NavBarApi";
import * as NavBarAction from "../redux/Features/NavBarFeatures";
import * as ConnectApi from '../redux/Api/ConnectApi'
import * as ConnectAction from '../redux/Features/ConnectFeatures'
import * as LasworkingApi from '../redux/Api/LastWorkApi'
import * as ArticleApi from '../redux/Api/ArticleApi'
import * as LastworkingAction from '../redux/Features/LastwokingFeatures'
import { TbArticle } from "react-icons/tb";
import { TbLayoutNavbarExpand } from "react-icons/tb";



export let Check_Empty = (text) => text ? text : ''
// statment last work
export let StatementLastWorking = {
    name: '',
    image: '',
    user: "نجار بالرياض  ",
    image: '',
    open: false
}
// start close and Open Edit to admin info  ----- 
export const StateMentCloseAdmin = {
    open: false,
    text: ''
}

// scroll top 
export function ScrollTop() {
    window?.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    })

}


// vlidation Inputs navbar
export const TheVlidation__NavBar = (thesamething, data) => {
    // thesamething the same thing data
    // inputs data

    if (thesamething?.name?.toString()?.toLowerCase()?.trim() === data?.name?.toString()?.toLowerCase()?.trim() && thesamething?.link?.toString()?.trim()?.toLowerCase() === data?.link?.toString()?.trim()?.toLowerCase()) {

        return true

    } else if (data?.name?.length > Number(2) && data?.link?.length > Number(0)) {

        return false
    } else {

        return true
    }
}

// en
export const Equal_navbar = (navbar, data) => {

    return navbar?.navbar?.findIndex((x) => x?.name?.trim()?.toLowerCase() === data?.name?.trim()?.toLowerCase())
}

// statement navabr 
export const StatementNavBAR = {
    name: '',
    link: '',
    _id: '',
    open: false
}

// send requires navbar 
export const Requires__NavBar = async (event, dispatch, data) => {

    event.preventDefault()

    await data?._id ? dispatch(NavBarApi.NavBarUpdate(data)) : dispatch(NavBarApi.PushingNewData(data))
    ScrollTop()
    return
}


// DELETE ONE ITEM OF NEVBAR
export const deleteOneItemOf___NavBar = async (dispatch, id) => {

    if (window?.confirm("Do you want to delete?")) {

        await dispatch(NavBarApi.deleteOneItemOfObject(id))
        ScrollTop()
        return

    } else {
        return console.log('no-/... ')
    }
}


// clearing navbar error ----->
export const ClearingNavBarError__NavBar = (dispatch) => {
    dispatch(NavBarAction.statementClearing())
}


// navBar checkitem and Open AND CLOSE 
export const CheckPage__navbar = (item, data, setData, ReloadPage, dispatch, Setthesamething) => {
    // check out
    const checkOut = data?.open === true ? false : true
    // cleaaring statement
    ReloadPage && ClearingNavBarError__NavBar(dispatch)

    if (item === 'create') {
        return setData({
            ...data,
            name: '',
            link: '',
            open: checkOut
        })
    }
    if (checkOut) {
        setData({
            ...data,
            name: Check_Empty(item?.name),
            link: Check_Empty(item?.link),
            _id: Check_Empty(item?._id),
            open: checkOut
        })

        Setthesamething(item)
    } else {

        setData(StatementNavBAR)
        Setthesamething({})
    }
}




// delete connect item 
export const DeleteConnect_Connect = async (dispatch, id) => {
    if (window?.confirm("Do you want to delete?")) {

        await dispatch(ConnectApi.ConnectDelete_Api(id))
        ScrollTop()
        return

    } else {
        return console.log('no-/... ')
    }
}


export const user = "نجار بالرياض"

// update data and open and close one function 
export const PushingData_Connect = (item, statementEdit, setStatementEdit, setPushingData, connect) => {

    // OPTIONS --->
    // 1- statementEdit and setStatementEdit it is open and close page
    // 2- item it is pass of statement ---->
    // 3 - setPushingData pushing data to statement for update .... 
    // 4- iconnect - t is data for update ...

    // Check out if page is open --->
    let checkOut = statementEdit?.open === false ? true : false
    let CheckOutText = statementEdit?.text === '' ? item : ''

    if (CheckOutText === 'information') {

        setPushingData({
            _id: connect?._id,
            user: user,
            name: Check_Empty(connect?.name),
            phone: Check_Empty(connect?.phone),
            addres: Check_Empty(connect?.addres),
            facebook: Check_Empty(connect?.facebook),
            instagram: Check_Empty(connect?.instagram),
            twitter: Check_Empty(connect?.twitter),
            whatapp: Check_Empty(connect?.whatapp),
            aboutus: {
                name: Check_Empty(connect?.aboutus?.name),
                des: Check_Empty(connect?.aboutus?.des)
            },
        })

        return setStatementEdit({
            ...statementEdit,
            open: checkOut,
            text: CheckOutText
        })
    }

}


// clearing error connect 
export const ClearingError_Connect = (dispatch, setPushingData, setStatementEdit) => {
    dispatch(ConnectAction.statementClearing())
    setPushingData({})
    setStatementEdit(StateMentCloseAdmin)
    return
}



// requires connect to server ... 
export const Requires_Connect = (event, data, dispatch) => {
    event.preventDefault()


    data?._id ? dispatch(ConnectApi.ConnectUpdate_Api(data)) : dispatch(ConnectApi.ConeectCreate_Api(data))
    ScrollTop()
}



// less des text
export const TheSlicedes = (item) => {

    if (item?.length > Number(100)) return item?.slice(0, 100) + '...'
    return item
}
// less des name
export const TheSliceName = (item) => {

    if (item?.length > Number(40)) return item?.slice(0, 20) + '...'
    return item
}

// style 
export const Styletext = "fontFamilynavbar font_h1 __margin___ margin_bootom_footer_ navbarcolor"

/// update text 
export const UpdateText = {

    name: 'Your site name',
    addres: 'your address',
    phone: 'Your phone number',
    whatapp: 'WhatsApp number',
    instagram: 'Instagram account',
    twitter: 'twitter account',
    facebook: 'facebook account',
    aboutus: 'about us',
    aboutusname: 'Title',
    aboutusdes: 'the description',
    Servicename: 'Service name',
    title: 'Title (SEO)',
    Uploadaphoto: 'Upload a photo',
    path: 'Path name',
    link: 'link',
    more: 'Write more'



}


const UpdateObjectIntroduktion = () => { }
const THEfalse = () => { }
const UpdateObjectServices = () => { }
const UpdateServices = () => { }
const NewPageSussfully = () => { }




// url image . . . 
export const UrlImageBackend = 'http://localhost:4000'



// start last working 
// delete one item of items 
export const DeleteItemWithImage = (item, dispatch, VlidationNumber) => {

    if (window?.confirm('do you wnat delete')) {

        if (VlidationNumber === Number(3)) return item?.image ? dispatch(UploadingImageApi.DeleteImage(item?.image?.slice(8), '', item?._id, VlidationNumber)) : dispatch(LasworkingApi.LastworkingDelete_Api(item?._id))
        if (VlidationNumber === Number(7)) return item?.image ? dispatch(UploadingImageApi.DeleteImage(item?.image?.slice(8), '', item?._id, VlidationNumber)) : dispatch(ArticleApi.ArticeDelete_Api(item?._id))


    } else {

        return console.log('not / .')
    }

}


//uploading image  statment 
export const statementUploading = {
    changePath: false,
    newImage: '',
    oldImage: '',
    successfully: false
}


// text edit 
export const textInfo = {
    email: 'ditt e-post',
    phone: 'Företagets telefonnummer',
    anotheremail: 'en annat e-post',
    anotherphone: 'ett annat Företagets telefonnummer',
    facebook: 'Facebook länk',
    instagram: 'instagram länk',
    open: 'öppettider vardagar',
    address: 'address',
    gata: 'vilken gata',
    city: 'vilken stan',
    zipcode: 'Postnummer',
    contactus: 'Kontakta oss',
    description: 'beskrivningen',
    image: 'Ladda upp en ny bild',
    services: 'title',
    phoneinput: 'Your phone number',
    password: 'Password'
}




// start services open and close 
// statement change services 
export const StatemntServices = {
    name: '',
    seo: '',
    des: '',
    image: '',
    change: false,
    oneItem: false,
    _id: ''
}


export const ServicesOpenAndClose = (setData, dispatch, ReloadPage) => {

    setData(StatemntServices)
    ReloadPage && dispatch(ServicesAction.statementClearing())
}
// END services open and close 



// start requires update services 
export const UpdateServices__ = (event, data, dispatch) => {
    event.preventDefault()
    dispatch(UpdateServices(data))
}



// close and clearing page connect 
export const CLOSEEditAdminInfo = (setData) => setData(StateMentCloseAdmin)
// close and clearing page connect 
export const ClosePage_Connect = (setStatementEdit, ReloadPage, dispatch) => {

    CLOSEEditAdminInfo(setStatementEdit)
    ReloadPage && dispatch(ConnectAction.statementClearing())
}

// vlidation connect but 
export const VlidationBut_Connect = (data) => {
    if (
        data?.name?.length > Number(3) &&
        data?.addres?.length > Number(5) &&
        data?.phone?.length > Number(7) &&
        data?.whatapp?.length > Number(7) &&
        data?.facebook?.length > Number(7) &&
        data?.instagram?.length > Number(7) &&
        data?.twitter?.length > Number(7) &&
        data?.aboutus?.name?.length > Number(7) &&
        data?.aboutus?.des?.length > Number(7)
    ) {
        return true
    } else {
        return false
    }
}
// END close and Open Edit to admin info  ----- 


export const DeleteOneProductElement_Products = (item, dispatch) => {
    if (window?.confirm("Do you want to delete?")) {

        let newSlice = item?.image?.slice(8)

        item?.image ? dispatch(UploadingImageApi.DeleteImage(newSlice, '', item?._id, Number(2))) : dispatch(ServicesApi.ServicesDelete_Api(item?._id))

    } else {
        return console.log('no-/... ')
    }
}



// vlidation 
export const AllVlidationInputs = (data, VlidationNumber) => {


    switch (VlidationNumber) {

        case Number(1): return VlidationInputs_Serives(data)
        case Number(2): return VlidationInputs_LastWorking(data)

        default: return VlidationNumber

    }

}

// vlidation working
export const VlidationInputs_LastWorking = (data) => {
    if (data?.name?.length > Number(3)) {
        return true
    } else {
        return false
    }
}


// vlidation servied
export const VlidationInputs_Serives = (data) => {
    if (data?.name?.length > Number(3) && data?.des?.length > Number(20)) {
        return true
    } else {
        return false
    }
}


// updated data 
// options - - - 
// clarn old image from server . . . . .
// if we have new image upload 
// update all data . . .
// concact update 
export const contactUpdate = (event, uploadImage, Image, data, TheNumber, dispatch) => {

    // 1 - event  is not reload a page ---->
    // 2 - uploadImage  delete old image  ---->
    // 3  - Image  upload new image  ---->
    // 4  - data  update text   ---->
    // 5  - TheNumber  it is number for path requires   ---->
    // 6  - dispatch  it is middlare to requires   ---->
    event.preventDefault()

    ScrollTop()

    if (uploadImage.oldImage) {
        // delete old image ...
        dispatch(UploadingImageApi.DeleteImage(uploadImage.oldImage, Image, data, TheNumber))
        return
    }
    if (Image?.name) {
        // upload new image 
        dispatch(UploadingImageApi.UploadOneImage(Image, data, TheNumber))
        return
    }

    //  if it is not upload new image or not delete old image only update text 
    if (Number(TheNumber) === Number(1)) return data?._id ? dispatch(ServicesApi.ServicesUpdate_Api(data)) : dispatch(ServicesApi.ServicesCreate_Api(data))
    if (Number(TheNumber) === Number(4)) return data?._id ? dispatch(LasworkingApi.LastWorkingUpdate_Api(data)) : dispatch(LasworkingApi.LastWorkingCreate_Api(data))

    if (Number(TheNumber) === Number(6)) return data?._id ? dispatch(ArticleApi.ArticleUpdate_Api(data)) : dispatch(ArticleApi.ArticleCreate_Api(data))
    return

}






/// products ------- start 
// open page and pushing data to update .. .
export const OpenAndCloseAndUpadte_Products = (item, data, setValue, dispatch, ReloadPage) => {

    let check = data.oneItem === false ? true : false

    if (item?.name) {
        return setValue({
            ...data,
            oneItem: check,
            _id: item?._id,
            user: item?.user,
            seo: Check_Empty(item?.seo),
            name: Check_Empty(item?.name),
            des: Check_Empty(item?.des),
            image: Check_Empty(item?.image),
            more: item?.more
        })
    } else {

        setValue({
            ...data,
            oneItem: check,
            user: '',
            seo: '',
            name: '',
            des: '',
            image: '',
            more: []
        })

        ReloadPage && dispatch(ServicesAction.statementClearing())
        return
    }
}




// statement admin info kontakt oss and om oss 
export const Infosttatemtnt = {
    change: false,
    email: '',
    phone: '',
    anotherphone: '',
    anotheremil: '',
    facebook: '',
    instagram: '',
    opentime: {
        open: '',
        close: '',
    },
    address: {
        address: '',
        city: '',
        city: '',
        zipcode: '',
    },
    contactus: {
        title: '',
        des: '',
        image: '',
    },
    aboutus: {
        title: '',
        des: '',
        image: '',
        anothertitle: '',
        anotherdes: '',
        anotherimage: '',
    }
}

// start navbar list to admin  -- - -
export const List___ = [
    {
        _id: 1,
        name: 'home',
        icon: CiHome,
        link: '/'

    },
    {
        _id: 2,
        name: 'services',
        icon: MdOutlineMiscellaneousServices,
        link: '/services'
    },
    {
        _id: 3,
        name: 'last work',
        icon: MdHomeMax,
        link: '/lastwork'
    },
    {
        _id: 4,
        name: 'navbar',
        icon: TbLayoutNavbarExpand,
        link: '/navbar'
    },
    {
        _id: 5,
        name: 'article',
        icon: TbArticle,
        link: '/article'
    },
    {
        _id: 6,
        name: 'min profil',
        icon: FaRegUser,
        link: '/profile'
    }


]

export const Icons___ = (ElementIcon, className) => {

    switch (ElementIcon) {


        case CiHome: return <CiHome className={className} />
        case MdOutlineMiscellaneousServices: return <MdOutlineMiscellaneousServices className={className} />
        case MdHomeMax: return <MdHomeMax className={className} />
        case MdOutlineRoundaboutLeft: return <MdOutlineRoundaboutLeft className={className} />
        case FaRegUser: return <FaRegUser className={className} />
        case TbArticle: return <TbArticle className={className} />
        case TbLayoutNavbarExpand: return <TbLayoutNavbarExpand className={className} />


        default: return <CiHome className={className} />
    }
}
// END navbar list to admin  -- - -
// more pushing style ... 
export let TheOptionsStyle = 'flex alignitems justifyContent'
export let BookaText = 'Boka en tid'
export let uppdatera = 'uppdatera'
export let logga = 'Login'
export const EmailCode = 'We will send you the code via e-mail'
export const SendCodebut = 'skicka koden '

export const Name = 'Talat'

export const styleButtonError = (OptionsStyle) => (`disabledbackground  bordernone input  __margin___ colorwhite fontText cursor ${OptionsStyle}`)

export const StyleButton = (OptionsStyle) => (`stadbackground  bordernone input  __margin___ colorwhite fontText cursor ${OptionsStyle}`)


// disabled style to button 
export const DisabledStyle = (data, OptionsStyle) => (!ValidationInput(data) ? styleButtonError(OptionsStyle) : StyleButton(OptionsStyle))


export const TheName = 'Mir städservice Ab'
export const description = 'Oavsett om det är hemstädning, storstädning eller flyttstädning i Uppsala så står vi på Mir städservice redo att hjälpa dig! Vi ser till att du får mer tid till annat!'



// start validation login 

// statement login 
export const StatementLogin = {
    phone: '',
    password: '',
    view: false,
    error: false,
    email: '',

}

// show password 
export const ShowPassword = (data, setData) => {
    let CheckOut = data?.view === true ? false : true
    setData({
        ...data,
        view: CheckOut
    })
}
export const LoginValidationA = (data, code) => {

    if (code) {

        if (!ValtionMe(data?.email, 'isEmail')) return false

        return true
    }

    if (!ValtionMe(data.phone, 'isPhone') || !ValtionMe(data.password, 'inputname')) {
        return false
    }
    return true

}
// end validation login

// navbar statement 
export const NavBarStatment = {
    menubar: 'menu-btn',
    hidden: 'hidden',
    ul: 'adminclolor WIDTH__20_ screenheight',
    icon: 'marginright font_h1 buttomcolor',
    a: 'Xp_hidden colorwhite'

}

// navbar if condation 
export const NavBarCondation = (css, setCss) => {
    if (css.menubar === 'menu-btn') {
        setCss({
            ...css,
            menubar: 'menu-btn open',
            hidden: 'hidden open',
            ul: 'adminclolor WIDTH__20_ screenheight open_navbar_Icon_Ul',
            icon: 'marginright font_h1 open_navbar_Icon buttomcolor',
            a: 'Xp_hidden  open_navbar_Icon_Text colorwhite'
        })
    } else {
        setCss({
            ...css,
            menubar: 'menu-btn',
            hidden: 'hidden',
            ul: 'adminclolor WIDTH__20_ screenheight ',
            icon: 'marginright font_h1 buttomcolor',
            a: 'Xp_hidden colorwhite'
        })
    }
}


// option select how can helpe 
export let SelectMap = [
    {
        _id: 1,
        name: 'Välj tjänst'
    },
    {
        _id: 2,
        name: 'Hemstädning'
    },
    {
        _id: 3,
        name: 'Storstädning'
    },
    {
        _id: 4,
        name: 'Flyttstädning'
    },
    {
        _id: 5,
        name: 'Fönsterputs'
    },
    {
        _id: 6,
        name: 'Kontorsstäd'
    },
    {
        _id: 7,
        name: 'Byggstädning'
    },
]



// list navbar
export let __ListNavBar___ = [
    {
        _id: 1,
        name: 'home',
        link: '/'
    },
    {
        _id: 2,
        name: 'tjänster',
        link: '/tjänster'
    },
    {
        _id: 2,
        name: 'om oss',
        link: '/om-oss'
    },
    {
        _id: 3,
        name: 'kontakta oss',
        link: '/kontakta-oss'
    },
]

// add style 
export function pushingStyle() {
    const setStyle = {

        hidden: 'hidden',
        auto: 'auto'
    }

    if (document.querySelector('body').style.overflow === 'hidden') {

        document.querySelector('body').style.overflow = setStyle.auto
    } else {

        document.querySelector('body').style.overflow = setStyle.hidden
    }


}


// statement sen mail 
export const SendMail = {
    object: '',
    full: '',
    email: '',
    phone: '',
    des: '',
    successfully: false,
    open: false,
    size: '',
    date: '',
    thanks: false
}



// open anc close ...
export const OpenAndClose = (data, setData) => {
    pushingStyle()
    let checkout = data?.open === true ? false : true

    if (checkout === false) {

        return setData(SendMail)
    }

    setData({
        ...data,
        open: checkout
    })
}




// simpl validation 
export const ValidationInput = (data) => {

    if (!ValtionMe(data?.full, 'inputname')) {
        return false
    }

    if (data?.email.length === Number(0)) {

        if (!ValtionMe(data?.phone, 'isPhone')) {
            return false
        }
    } else {
        if (!ValtionMe(data?.email, 'isEmail')) {
            return false
        }
        return true
    }

    return true

}

// options for ask us 
export const AskUs = [
    {
        _id: 1,
        name: 'Hur kan vi hjälpa dig ?'

    },
    {
        _id: 2,
        name: 'Få priset via mail'

    },
    {
        _id: 3,
        name: 'Få priset via telefonnummer'

    },
    {
        _id: 4,
        name: 'Fråga om tjänster'

    },
]