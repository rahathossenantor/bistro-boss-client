import SectionTitle from "./SectionTitle";

const Recomendations = () => {
    return (
        <div className="md:container md:mx-auto 2xl:px-0 xl:px-0 lg:px-5 md:px-5 px-5 mb-20">
            <SectionTitle title={"FROM OUR MENU"} subTitle={"Check it out"}></SectionTitle>
            <div className="grid gap-5 grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 mt-5">

                {
                    [1, 1, 1].map((item, i) =>
                        <div key={i} className="rounded-lg shadow-xl">
                            <figure className="w-full">
                                <div className="rounded-md flex items-center justify-center">
                                    <img className='inline-block w-full' src="https://i.ibb.co/3dK4DZ1/Rectangle.png" alt="cover-image" />
                                </div>
                            </figure>
                            <div className="p-5 rounded-lg rounded-t-none text-center">
                                <h4 className="font-semibold text-xl">Caeser Salad</h4>
                                <p className="mb-2">Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                                <button className="btn btn-secondary">Add</button>
                            </div>
                        </div>
                    )
                }

            </div>
        </div>
    );
};

export default Recomendations;
