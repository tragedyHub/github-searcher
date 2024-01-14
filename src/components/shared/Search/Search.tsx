import { changeSearchText } from '@slices/searchSlice'
import { useDispatch, useSelector } from 'react-redux'
import { IRootState } from '@store/store'
import SearchButton from './SearchButton'

const Search = () => {
    const dispatch = useDispatch()
    const { searchText } = useSelector((state: IRootState) => state.search)

    return (
        <div className="mb-3 flex w-4/12 m-auto my-10">
            <input
                onChange={(e) => dispatch(changeSearchText(e.target.value))}
                value={searchText}
                type="text"
                placeholder="Search"
                className="py-5 px-5 radius rounded-l-xl w-full bg-transparent border-gray-500 border-2 border-solid"
            />
            <SearchButton />
        </div>
    )
}

export default Search
