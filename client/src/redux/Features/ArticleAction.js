
import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    loading: false,
    error: null,
    article: [],
    ReloadPage : false

}

export const ArticleSlice = createSlice({

    name: 'artice',
    initialState,
    reducers: {
        statementLoading: (state, action) => {
            state.loading = true
        },
        statementGetData: (state, action) => {
            state.loading = false
            state.article = action.payload
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
} = ArticleSlice.actions

export default ArticleSlice.reducer