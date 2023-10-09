
const HighlightedMenuItem = ({ title, des, price, tag, ...props }: { title: string, des: string, price: string, tag: string }) => {
    return (
        <div {...props} className="border border-sandy-brown mb-4 rounded relative top-0 right-0 lg:right-4 lg:w-[107%]">
            <h3 className="p-4 bg-sandy-brown text-white font-bold text-lg lg:text-xl tracking-wider"> {tag} </h3>
            <div className="p-4">
                <div className="flex justify-between text-sandy-brown mb-2 font-bold">
                    <h4 className="text-lg md:text-xl xl:text-2xl">{title}</h4>
                    <h4 className="text-md md:text-lg xl:text-xl">
                        ${price}
                    </h4>
                </div>
                <p className="text-white text-sm md:text-md">{des}</p>
            </div>
        </div>
    )
}

export default HighlightedMenuItem