import Wrapper from '@components/shared/Wrapper'
import { lastQueriesService } from '../utils/last-queries'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { changeSearchText } from '@slices/searchSlice'

const Last = () => {
    const dispatch = useDispatch()
    const navigation = useNavigate()
    const lastItems = lastQueriesService.lastQueries

    const handler = (item: string) => {
        navigation('/')
        dispatch(changeSearchText(item))
    }
    return (
        <Wrapper>
            <h2 className="font-500 text-center my-10 text-4xl font-gray-900">
                Last Queries
            </h2>
            <div className="grid grid-cols-2 w-1/2 m-a gap-10">
                {lastItems.length &&
                    lastItems.map((item, index) => (
                        <p onClick={() => handler(item)} key={index} className='text-center'>
                            {item}
                        </p>
                    ))}
            </div>
        </Wrapper>
    )
}

export default Last
