
const ContactInfo = () => {
    return (
        <div className="lg:container mx-auto px-5 md:px-10 lg:px-24 xl:px-56 2xl:px-64 py-10 md:py-16 lg:py-20 md:flex items-center justify-between text-gray-200">
            <div className="space-y-7 lg:space-y-10 mb-10">
                <div>
                    <h3 className="text-xl md:text-2xl xl:text-3xl font-bold mb-4">Contact </h3>
                    <p className="md:text-base"> 732/21 Second Street, Manchester </p>
                    <p className="md:text-base"> Kingston United Kingdom </p>
                </div>
                <div>
                    <h3 className="text-xl md:text-2xl xl:text-3xl font-bold mb-4">  Follow Us
                    </h3>
                    <div className="space-y-1">
                        {["Facebook", "Twitter", "Instagram"].map((list, index) => <p className="md:text-base" key={index}> {list} </p>)}
                    </div>
                </div>
            </div>
            <div className="space-y-8 lg:space-y-12">
                <div>
                    <h3 className="text-xl md:text-2xl xl:text-3xl font-bold mb-4"> T: +65 (0) 76-890-214 </h3>
                    <h3 className="text-xl md:text-2xl xl:text-3xl font-bold mb-4"> E: bookings@wilma.co.uk </h3>
                </div>
                <div>
                    <h3 className="text-xl md:text-2xl xl:text-3xl font-bold mb-4 lg:mb-6"> Opening Hours </h3>
                    <div className="flex items-center gap-10 md:justify-between">
                        <div>
                            <h4 className="mb-3 text-lg lg:text-xl font-medium">Lunch Time </h4>
                            <p className="md:text-base mb-1"> Monday to Sunday </p>
                            <p className="md:text-base"> 10.30am - 3:00pm</p>
                        </div>
                        <div>
                            <h4 className="mb-3 text-lg lg:text-xl font-medium"> Dinner Time </h4>
                            <p className="md:text-base mb-1">  Monday to Sunday </p>
                            <p className="md:text-base">  5.30pm - 11:00pm </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactInfo