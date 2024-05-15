
import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    loading: false,
    error: null,
    Last: [],
    ReloadPage : false

}

export const LastWorkingSlice = createSlice({

    name: 'lastwork',
    initialState,
    reducers: {
        statementLoading: (state, action) => {
            state.loading = true
        },
        statementGetData: (state, action) => {
            state.loading = false
            state.Last = action.payload
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
} = LastWorkingSlice.actions

export default LastWorkingSlice.reducer