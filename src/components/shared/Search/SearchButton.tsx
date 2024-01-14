import {
    useGetAccountMutation,
    useGetPokemonByNameMutation,
} from '@store/services/repo/repo.service'
import { IRootState } from '@store/store'
import { lastQueriesService } from '@utils/last-queries'
import { useSelector } from 'react-redux'

const SearchButton = () => {
    const { searchText } = useSelector((state: IRootState) => state.search)
    const [makeSearch] = useGetPokemonByNameMutation()
    const [makeAccountRequest] = useGetAccountMutation()

    const handleSearch = async () => {
        try {
            await makeSearch(searchText)
            await makeAccountRequest(searchText)
            lastQueriesService.addLastQuery = searchText
        } catch (error) {
            console.log('Error', error)
        }
    }

    return (
        <button
            className="rounded-r-xl relative z-[2] flex items-center rounded-r bg-primary px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg border-gray-500 border-2 border-solid"
            type="button"
            id="button-addon1"
            data-te-ripple-init
            data-te-ripple-color="light"
            onClick={handleSearch}
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="gray"
                className="h-5 w-5"
            >
                <path
                    fillRule="evenodd"
                    d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                    clipRule="evenodd"
                />
            </svg>
        </button>
    )
}

export default SearchButton
