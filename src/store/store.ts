import { configureStore } from '@reduxjs/toolkit'
import repoSlice from './slices/repoSlice'
import searchSlice from './slices/searchSlice'
import { itemsApi } from './services/repo/repo.service'

export const store = configureStore({
    reducer: {
        repo: repoSlice,
        search: searchSlice,
        [itemsApi.reducerPath]: itemsApi.reducer,
    },
    middleware: (getDefaultMiddlewares) =>
        getDefaultMiddlewares().concat(itemsApi.middleware),
})

export type IRootState = ReturnType<typeof store.getState>
