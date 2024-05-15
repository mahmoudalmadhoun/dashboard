
import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    loading: false,
    error: null,
    services: [],
    ReloadPage : false

}

export const ServicesSlice = createSlice({

    name: 'services',
    initialState,
    reducers: {
        statementLoading: (state, action) => {
            state.loading = true
        },
        statementError: (state,action) => {
            state.loading = false
            state.error = action.payload
        },
        statementGetData: (state, action) => {
            state.loading = false
            state.services = action.payload
        },
        statementReload : (state,action) =>{
            state.loading = false
            state.ReloadPage = action.payload
        },
        statementClearing : (state,action) =>{
            state.loading = false
            state.ReloadPage = false
            state.error = null
        },


    }

})


export const {
    statementReload,
    statementLoading,
    statementError,
    statementGetData,
    statementClearing,
} = ServicesSlice.actions

export default ServicesSlice.reducer