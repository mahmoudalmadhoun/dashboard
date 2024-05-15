import { createSlice } from '@reduxjs/toolkit'
import * as  ActionTypes from './Types'




const initialState = {
    loading: false,
    error: null,
    message : {}
}

export const UploadSlice = createSlice({

    name: 'Upload',
    initialState,
    reducers: {
        statementLoading: (state, action) => {
            state.loading = true
        },
        statementsuccessfully : (state,action)=>{
            state.loading = false
            state.message = action.payload
        },
        statementError: (state,action) => {
            state.loading = false
            state.error = action.payload
        },
    }

})


export const {
    statementLoading,
    statementsuccessfully,
    statementError,
} = UploadSlice.actions

export default UploadSlice.reducer