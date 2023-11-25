import SectionTitle from "./SectionTitle";

const Features = () => {
    return (
        <div className="features-bg">
            <div className="md:container md:mx-auto 2xl:px-0 xl:px-0 lg:px-5 md:px-5 px-5 mb-20 py-10 pb-16">
                <SectionTitle title={"FROM OUR MENU"} subTitle={"Check it out"}></SectionTitle>
                <div className="grid gap-5 grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 items-center">
                    <div>
                        <img className="inline-block w-full" src="https://i.ibb.co/VQm3hHR/featured.jpg" alt="image" />
                    </div>
                    <div className="text-white">
                        <h4 className="text-2xl">March 20, 2023</h4>
                        <h3 className="text-3xl font-semibold my-1">WHERE CAN I GET SOME?</h3>
                        <p className="mb-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                        <button className="btn normal-case border-[#BB8506] text-[#BB8506] px-6">Read More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Features;
