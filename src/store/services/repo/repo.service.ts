import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { Item } from './repo.service.types'

export const itemsApi = createApi({
    reducerPath: 'itemsApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://api.github.com/users/' }),
    endpoints: (builder) => ({
        getPokemonByName: builder.mutation<Array<Item>, string>({
            query: (name) => `${name}/repos`,
        }),
        getAccount: builder.mutation<Record<string, unknown>, string>({
            query: (name) => `${name}`,
        }),
    }),
})

export const { useGetPokemonByNameMutation, useGetAccountMutation } = itemsApi
