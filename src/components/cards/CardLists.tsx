const CardList = ({children} : any) => {
    return (
        <div className="bg-gray-50 rounded-xl border border-gray-200 shadow-sm p-4 border border-bg-grey-200 mb-1">
            {children}
        </div>
    )
}

export default CardList