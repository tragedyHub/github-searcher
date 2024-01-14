import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    searchText: '',
}

const searchSlice = createSlice({
    name: 'searchSlice',
    initialState,
    reducers: {
        changeSearchText: (state, action) => {
            state.searchText = action.payload
        },
    },
})

export default searchSlice.reducer
export const { changeSearchText } = searchSlice.actions
