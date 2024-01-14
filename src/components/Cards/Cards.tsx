import { useSelector } from 'react-redux'
import { IRootState } from '../../store/store'
import Card from './Card'

const Cards = () => {
    const { items, isError, isLoading } = useSelector(
        (state: IRootState) => state.repo
    )


    if(isLoading) return 'loading...'

    if (isError) return 'error'

    return (
        <div className="grid grid-cols-4 gap-10">
            {items.map((item, index) => (
                <Card key={index} item={item}/>
            ))}
        </div>
    )
}

export default Cards
