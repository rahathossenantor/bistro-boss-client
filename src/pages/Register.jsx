import { Link } from "react-router-dom";

const Register = () => {

    const handleEmailPassRegister = (event) => {
        event.preventDefault();

        const formData = event.target;
        const name = formData.name.value;
        const email = formData.email.value;
        const password = formData.password.value;
        console.log(name, email, password);
    };

    return (
        <div className="md:container md:mx-auto 2xl:px-0 xl:px-0 lg:px-5 md:px-5 px-5 py-14">
            <div className="flex flex-col lg:flex-row xl:flex-row">
                <div className="w-full lg:w-1/2 xl:w-1/2 flex flex-col items-center justify-center">
                    <form onSubmit={handleEmailPassRegister} className="border p-6 w-[350px] md:w-[390px] lg:w-[380px] xl:w-[400px] bg-base-100 shadow-2xl">
                        <div className="text-center mb-5">
                            <h2 className="text-4xl font-medium">Sign Up</h2>
                        </div>
                        <div className="form-control">
                            <label className="label py-1">
                                <span className="text-lg">Full name <span className="text-red-500">*</span></span>
                            </label>
                            <input type="text" placeholder="Full name" name="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label pb-1">
                                <span className="text-lg">Email <span className="text-red-500">*</span></span>
                            </label>
                            <input type="email" placeholder="Email" name="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label pb-1">
                                <span className="text-lg">Password <span className="text-red-500">*</span></span>
                            </label>
                            <div className="form-control">
                                <input required type="password" name="password" placeholder="Password" className="input input-bordered" />
                            </div>
                            <div className="mt-3">
                                <input type="checkbox" className="cursor-pointer" name="terms" id="terms" />
                                <label className="ml-2 cursor-pointer" htmlFor="terms">Accept our terms & conditions</label>
                            </div>
                        </div>
                        <div className="form-control mt-6">
                            <button type="submit" className="btn px-7 py-[8px]">Sign Up</button>
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
                </div>
                <div className="w-full lg:w-1/2 xl:w-1/2 flex justify-center items-center">
                    <img src="https://i.ibb.co/9bWDYNX/authentication.png" alt="bg-image" className="inline-block" />
                </div>
            </div>
        </div>
    );
};

export default Register;
