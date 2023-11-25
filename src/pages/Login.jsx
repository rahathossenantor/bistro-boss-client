import { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from "react-simple-captcha";

const Login = () => {

    useEffect(() => {
        loadCaptchaEnginge(6);
    }, []);

    const captchaRef = useRef(null);
    const [isDisabled, setIsDisabled] = useState(true);

    // validatin captcha
    const handleValidateCaptcha = () => {
        const captchaValue = captchaRef.current.value;
        if (validateCaptcha(captchaValue)) {
            setIsDisabled(false);
        } else {
            setIsDisabled(true);
        }
    };

    // handling form
    const handleEmailPassLogin = (event) => {
        event.preventDefault();

        const formData = event.target;
        const email = formData.email.value;
        const password = formData.password.value;
        console.log(email, password);
        setIsDisabled(true);
    };

    return (
        <div className="md:container md:mx-auto 2xl:px-0 xl:px-0 lg:px-5 md:px-5 px-5 py-14">
            <Helmet>
                <title>Login | Bistro Boss</title>
            </Helmet>
            <div className="flex flex-col lg:flex-row xl:flex-row">
                <div className="w-full lg:w-1/2 xl:w-1/2 flex justify-center items-center">
                    <img src="https://i.ibb.co/9bWDYNX/authentication.png" alt="bg-image" className="inline-block" />
                </div>
                <div className="w-full lg:w-1/2 xl:w-1/2 flex flex-col items-center justify-center">
                    <form onSubmit={handleEmailPassLogin} className="border p-6 w-[350px] md:w-[390px] lg:w-[380px] xl:w-[400px] bg-base-100 shadow-2xl">
                        <div className="text-center mb-5">
                            <h2 className="text-4xl font-medium">Login</h2>
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
                        </div>
                        <div className="form-control">
                            <label className="label pb-1 border rounded-md my-1">
                                <LoadCanvasTemplate />
                            </label>
                            <div className="flex">
                                <input type="text" ref={captchaRef} placeholder="captcha" name="captcha" className="input input-bordered flex-1 mr-1" required />
                                <a onClick={handleValidateCaptcha} className="btn btn-outline">Validate</a>
                            </div>
                            <a className="label-text-alt link link-hover">Forgot password?</a>
                        </div>
                        <div className="form-control mt-6">
                            <button disabled={isDisabled} type="submit" className="btn px-7 py-[8px]">Sign Up</button>
                        </div>
                        <p className="my-3">New here? <Link className="text-blue-700 underline font-medium" to="/register">Create an acount</Link></p>
                        <div className="text-center">
                            <p className="text-xl mb-2">-------------or-------------</p>
                            <div className="flex items-center justify-center gap-5">
                                <a><img src="https://i.ibb.co/7j9whwL/search.png" className="w-10 cursor-pointer" alt="Google" /></a>
                                <a><img src="https://i.ibb.co/vxj4vrN/github.png" className="w-10 cursor-pointer" alt="GtHub" /></a>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
