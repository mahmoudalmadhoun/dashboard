import { combineReducers } from 'redux'
import InfoSlice from '../Features/AuthFeatures'
import ServicesSlice from '../Features/ServicesAction'
import ConnectSlice from '../Features/ConnectFeatures'
import UploadSlice from '../Features/UploadFeatures'
import NavBarSlice from '../Features/NavBarFeatures'
import LastWorkingSlice from '../Features/LastwokingFeatures'
import ArticleSlice from '../Features/ArticleAction'



const RootReducer = combineReducers({
    Auth: InfoSlice,
    Services: ServicesSlice,
    Connect: ConnectSlice,
    Article :ArticleSlice,
    upload: UploadSlice,
    NavBar: NavBarSlice,
    Lastworking: LastWorkingSlice
})


export default RootReducer