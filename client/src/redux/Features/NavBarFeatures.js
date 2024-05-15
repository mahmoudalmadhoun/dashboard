
import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    loading: false,
    error: null,
    navbar: {},
    ReloadPage : false

}

export const NavBarSlice = createSlice({

    name: 'navbar',
    initialState,
    reducers: {
        statementLoading: (state, action) => {
            state.loading = true
        },
        statementGetData: (state, action) => {
            state.loading = false
            state.navbar = action.payload
        },
        statementError: (state,action) => {
            state.loading = false
            state.error = action.payload
        },
        statementReload : (state,action) =>{
            state.loading = false
            state.ReloadPage = action.payload
        },
        statementClearing : (state,action)=>{
            state.loading = false
            state.error = null
            state.ReloadPage = false
        }


    }

})


export const {
    statementReload,
    statementLoading,
    statementError,
    statementGetData,
    statementClearing,
} = NavBarSlice.actions

export default NavBarSlice.reducer