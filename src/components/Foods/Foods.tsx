import FoodItem from '../FoodItem/FoodItem'

const Foods = () => {
    return (
        <div className='lg:container mx-auto grid md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-5 px-6 md:px-10 py-20'>
            {[1, 2, 3, 4, 5, 6].map((n) => {
                return (
                    <FoodItem key={n} />
                )
            })}
        </div>
    )
}

export default Foods