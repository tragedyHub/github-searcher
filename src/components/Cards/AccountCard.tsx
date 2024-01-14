import { useSelector } from 'react-redux'
import { IRootState } from 'src/store/store'

const AccountCard = () => {
    const { account } = useSelector((state: IRootState) => state.repo)

    return (
        <>
            {Object.keys(account).length ? (
                <div className=" bg-gray-600 w-1/3 flex flex-col text-center items-center justify-center p-10 my-10">
                    <img
                        src={account.avatar_url}
                        alt=""
                        className="rounded-full w-80 mb-10"
                    />
                    <p className="text-white text-3xl">{account.login}</p>
                    <p className="text-white text-3xl">{account.name}</p>
                    <p className="text-white text-3xl">{account.bio}</p>
                </div>
            ) : null}
        </>
    )
}

export default AccountCard
