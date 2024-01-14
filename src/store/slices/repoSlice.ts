import { createSlice } from '@reduxjs/toolkit'
import { itemsApi } from '../services/repo/repo.service'
import { Item } from '../services/repo/repo.service.types'

const initialState: InitialState = {
    items: [],
    amount: 0,
    isLoading: false,
    isError: false,
    account: {},
}

type InitialState = {
    items: Array<Item>
    amount: number
    isLoading: boolean
    isError: boolean
    account: Record<string, unknown>
}

const repoSlice = createSlice({
    name: 'repo',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addMatcher(
            itemsApi.endpoints.getAccount.matchFulfilled,
            (state, { payload }) => {
                console.log("account", payload);
                
                state.account = payload
            }
        ),
            builder.addMatcher(
                itemsApi.endpoints.getPokemonByName.matchFulfilled,
                (state, payload) => {
                    state.items = payload.payload;
                    state.isLoading = false
                }
            ),
            builder.addMatcher(
                itemsApi.endpoints.getPokemonByName.matchPending,
                (state) => {
                    state.isLoading = true
                }
            ),
            builder.addMatcher(
                itemsApi.endpoints.getPokemonByName.matchRejected,
                (state) => {
                    state.isLoading = false
                    state.isError = true
                }
            )
    },
})

export default repoSlice.reducer
