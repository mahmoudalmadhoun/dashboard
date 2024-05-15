import { createSlice } from '@reduxjs/toolkit'
import * as  ActionTypes from './Types'

const stateWishlist = typeof window !== 'undefined' ? localStorage.getItem('USER_INFO') === 'undefined' ? {} :
  JSON.parse(localStorage.getItem(ActionTypes.USER_INFO)) : null


const initialState = {
    loading: false,
    error: null,
    token: typeof window !== 'undefined' ? localStorage.getItem(ActionTypes.TOKEN_INFO) : null,
    userInfo: stateWishlist,
    ReloadPage :  false,
}

export const AuthSlice = createSlice({
    name: 'Auth',
    initialState,
    reducers: {
        statementLoading: (state, action) => {
            state.loading = true
        },
        statementGetData: (state, action) => {
            // check is token is avalibel
            const TheToken = action.payload.token ? action.payload.token : null
            state.loading = false
            state.userInfo = action.payload.data
            typeof window !== 'undefined' &&  localStorage.setItem(ActionTypes.USER_INFO, JSON.stringify(action.payload.data))
            if (TheToken) {
                state.token = TheToken
                typeof window !== 'undefined' &&   localStorage.setItem(ActionTypes.TOKEN_INFO, action.payload.token)
            }

        },
        statementLogout: (state) => {

            typeof window !== 'undefined' && localStorage.setItem(ActionTypes.USER_INFO, JSON.stringify({}))
            typeof window !== 'undefined' && localStorage.setItem(ActionTypes.TOKEN_INFO, null)
            // Object.assign(state, initialState)
            return {
                ...state,
                userInfo: {},
                token: null,
            }
        },
        statementError: (state, action) => {
            state.loading = false
            state.error = action.payload
        },
        statementClearing : (state,action)=>{
            state.loading = false
            state.error = null
            state.ReloadPage = false
        }
        
    }
})


export const {
    statementLoading,
    statementGetData,
    statementLogout,
    statementError,
    statementClearing,
} = AuthSlice.actions

export default AuthSlice.reducer