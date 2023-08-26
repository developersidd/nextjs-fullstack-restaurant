
const MenuItem = ({ title, des, price, ...props }: { title: string, des: string, price: string }) => {
    return (
        <div {...props} className="mb-4 max-md:px-3">
            <div className="flex justify-between text-primary-yellow mb-2 font-bold">
                <h4 className="text-lg md:text-xl xl:text-2xl">{title}</h4>
                <h4 className="text-md md:text-lg xl:text-xl">
                    ${price}
                </h4>
            </div>
            <p className="text-white text-sm md:text-md">{des}</p>
        </div>
    )
}

export default MenuItem