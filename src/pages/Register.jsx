import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import Swal from "sweetalert2";
import { useState } from "react";
import { updateProfile } from "firebase/auth";

const Register = () => {
    const [errorStatus, setRrrorStatus] = useState("");
    const navigate = useNavigate();

    const { emailPassRegister } = useContext(AuthContext);
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        emailPassRegister(data?.email, data?.password)
            .then(res => {
                updateProfile(res.user, {
                    displayName: data?.name,
                    photoURL: data?.photoURL
                })
                    .then(() => {
                    }).catch((error) => {
                        setRrrorStatus(error.message);
                    });
                console.log(res);
                reset();
                Swal.fire({
                    title: "Success!",
                    text: "Registration successful!",
                    icon: "success",
                    confirmButtonText: "Close"
                });
                navigate("/");
            })
            .catch(err => setRrrorStatus(err.message));
    };

    return (
        <div className="md:container md:mx-auto 2xl:px-0 xl:px-0 lg:px-5 md:px-5 px-5 py-14">
            <Helmet>
                <title>Register | Bistro Boss</title>
            </Helmet>
            <div className="flex flex-col lg:flex-row xl:flex-row">
                <div className="w-full lg:w-1/2 xl:w-1/2 flex flex-col items-center justify-center">
                    <form onSubmit={handleSubmit(onSubmit)} className="border p-6 w-[350px] md:w-[390px] lg:w-[380px] xl:w-[400px] bg-base-100 shadow-2xl">
                        <div className="text-center mb-5">
                            <h2 className="text-4xl font-medium">Sign Up</h2>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name <span className="text-red-500">*</span></span>
                            </label>
                            <input type="text"  {...register("name", { required: true })} name="name" placeholder="Name" className="input input-bordered" />
                            {errors.name && <span className="text-red-600">Name is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL <span className="text-red-500">*</span></span>
                            </label>
                            <input type="text"  {...register("photoURL", { required: true })} placeholder="Photo URL" className="input input-bordered" />
                            {errors.photoURL && <span className="text-red-600">Photo URL is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email <span className="text-red-500">*</span></span>
                            </label>
                            <input type="email"  {...register("email", { required: true })} name="email" placeholder="email" className="input input-bordered" />
                            {errors.email && <span className="text-red-600">Email is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password <span className="text-red-500">*</span></span>
                            </label>
                            <input type="password"  {...register("password", {
                                required: true,
                                minLength: 6,
                                maxLength: 20,
                                pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                            })} placeholder="password" className="input input-bordered" />
                            {errors.password?.type === "required" && <p className="text-red-600">Password is required</p>}
                            {errors.password?.type === "minLength" && <p className="text-red-600">Password must be 6 characters</p>}
                            {errors.password?.type === "maxLength" && <p className="text-red-600">Password must be less than 20 characters</p>}
                            {errors.password?.type === "pattern" && <p className="text-red-600">Password must have one Uppercase one lower case, one number and one special character.</p>}
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="Sign Up" />
                        </div>
                        <p className="my-3">Already have an acount? <Link className="text-blue-700 underline font-medium" to="/login">Login</Link></p>
                        <div className="text-center">
                            <p className="text-xl mb-2">-------------or-------------</p>
                            <div className="flex items-center justify-center gap-5">
                                <a><img src="https://i.ibb.co/7j9whwL/search.png" className="w-10 cursor-pointer" alt="Google" /></a>
                                <a><img src="https://i.ibb.co/vxj4vrN/github.png" className="w-10 cursor-pointer" alt="GtHub" /></a>
                            </div>
                        </div>
                    </form>
                    {errorStatus && <p className="text-red-700">{errorStatus}</p>}
                </div>
                <div className="w-full lg:w-1/2 xl:w-1/2 flex justify-center items-center">
                    <img src="https://i.ibb.co/9bWDYNX/authentication.png" alt="bg-image" className="inline-block" />
                </div>
            </div>
        </div>
    );
};

export default Register;
