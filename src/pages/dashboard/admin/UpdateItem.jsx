import { useForm } from "react-hook-form";
import SectionTitle from "../../../components/SectionTitle";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { useLoaderData } from "react-router-dom";

const imgApiKey = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const imgApi = `https://api.imgbb.com/1/upload?key=${imgApiKey}`;

const UpdateItem = () => {
    const data = useLoaderData();
    const { _id, name, image, category, recipe, price } = data;

    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();

    const { register, handleSubmit } = useForm();

    const onSubmit = async (data) => {
        const imageFile = { image: data.image[0] };

        const menuItem = {
            name: data.name,
            recipe: data.recipe,
            image: image,
            category: data.category,
            price: parseFloat(data.price)
        };

        if (imageFile.image) {
            const res = await axiosPublic.post(imgApi, imageFile, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            });

            if (res.data.success) {
                menuItem.image = res.data.data.display_url;

                // send the menu item to the server
                const menuRes = await axiosSecure.patch(`/menu/${_id}`, menuItem);
                if (menuRes.data.modifiedCount) {
                    Swal.fire({
                        title: "Success!",
                        text: "Item updated!",
                        icon: "success",
                        confirmButtonText: "Close",
                        timer: 1500
                    });
                }
                console.log(menuRes.data);
            }
        } else {
            // send the menu item to the server
            const menuRes = await axiosSecure.patch(`/menu/${_id}`, menuItem);
            if (menuRes.data.modifiedCount) {
                Swal.fire({
                    title: "Success!",
                    text: "Item updated!",
                    icon: "success",
                    confirmButtonText: "Close"
                });
            }
            console.log(menuRes.data);
        }
    };

    return (
        <div>
            <SectionTitle title="UPDATE ITEM" subTitle="What's new?"></SectionTitle>
            <div className="border xl:p-8 lg:p-8 md:p-5 p-5 bg-[#F3F3F3]">
                <form onSubmit={handleSubmit(onSubmit)}>
                    {/* first row */}
                    <div className="mb-3">
                        <label htmlFor="name" className="font-semibold text-lg text-[#1b1a1acc]">Recipe name <span className="text-red-600">*</span></label>
                        <input defaultValue={name} {...register("name", { required: true })} type="text" title="name" placeholder="Recipe name" id="name" name="name" className="input input-bordered w-full" />
                    </div>
                    {/* second row */}
                    <div className="flex 2xl:flex-row xl:flex-row lg:flex-row md:flex-col flex-col gap-5 mb-3">
                        <div className="2xl:w-1/2 xl:w-1/2 lg:w-1/2 md:w-full w-full">
                            <label htmlFor="category" className="font-semibold text-lg text-[#1b1a1acc]">Category <span className="text-red-600">*</span></label>
                            <select defaultValue={category} {...register("category", { required: true })} id="category" name="category" className="input input-bordered w-full">
                                <option value="" hidden >Select category</option>
                                <option value="salad">Salad</option>
                                <option value="drinks">Drinks</option>
                                <option value="pizza">Pizza</option>
                                <option value="soups">Soups</option>
                                <option value="desserts">Desserts</option>
                            </select>
                        </div>
                        <div className="2xl:w-1/2 xl:w-1/2 lg:w-1/2 md:w-full w-full">
                            <label htmlFor="price" className="font-semibold text-lg">Price <span className="text-red-600">*</span></label>
                            <input defaultValue={price} {...register("price", { required: true })} type="text" title="Price" id="price" name="price" placeholder="Price" className="input input-bordered w-full" />
                        </div>
                    </div>
                    {/* third row */}
                    <div className="mb-3">
                        <label htmlFor="recipe" className="font-semibold text-lg text-[#1b1a1acc]">Recipe details <span className="text-red-600">*</span></label>
                        <textarea defaultValue={recipe} {...register("recipe", { required: true })} rows="7" placeholder="Type details" id="recipe" name="recipe" className="textarea textarea-bordered w-full text-base" />
                    </div>
                    <div className="mb-3">
                        <input {...register("image")} type="file" className="file-input file-input-bordered w-full" />
                    </div>
                    <div className="text-center">
                        <button className="btn normal-case border-[#BB8506] text-[#BB8506] px-6">
                            Update Item
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateItem;
