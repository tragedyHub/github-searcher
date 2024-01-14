import AccountCard from '@components/Cards/AccountCard'
import Cards from '@components/Cards/Cards'
import Loading from '@components/shared/Loading'
import Search from '@components/shared/Search/Search'
import Wrapper from '@components/shared/Wrapper'
import { IRootState } from '@store/store'
import { useSelector } from 'react-redux'

const Home = () => {
    const { isLoading } = useSelector((state: IRootState) => state.repo)

    return (
        <Wrapper>
            <Search />
            <AccountCard />
            <Cards />
            {isLoading && <Loading />}
        </Wrapper>
    )
}

export default Home
