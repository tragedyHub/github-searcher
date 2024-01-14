type Props = {
    children: string | JSX.Element | JSX.Element[]
}

const Wrapper = ({ children }: Props) => {
    return (
        <div className="w-9/12 mx-auto flex flex-col items-center h-full">
            {children}
        </div>
    )
}

export default Wrapper
