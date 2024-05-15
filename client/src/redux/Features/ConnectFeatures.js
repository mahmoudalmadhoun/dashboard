
import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    loading: false,
    error: null,
    connect: {},
    ReloadPage : false

}

export const ConnectSlice = createSlice({

    name: 'connect',
    initialState,
    reducers: {
        statementLoading: (state, action) => {
            state.loading = true
        },
        statementGetData: (state, action) => {
            state.loading = false
            state.connect = action.payload
        },
        statementReload : (state,action) =>{
            state.loading = false
            state.ReloadPage = action.payload
        },
        statementError: (state,action) => {
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
    statementReload,
    statementLoading,
    statementError,
    statementGetData,
    statementClearing,
} = ConnectSlice.actions

export default ConnectSlice.reducer