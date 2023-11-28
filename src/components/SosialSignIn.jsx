import Swal from "sweetalert2";
import useAuth from "../hooks/useAuth";
import useAxiosPublic from "../hooks/useAxiosPublic";

const SosialSignIn = () => {
    const { signInUserWithGoogle } = useAuth();
    const axiosPublic = useAxiosPublic();

    const handleGoogleSignIn = () => {
        signInUserWithGoogle()
            .then(res => {
                const userInfo = {
                    name: res?.user?.displayName,
                    email: res?.user?.email
                };
                axiosPublic.post("/users", userInfo)
                .then((res) => {
                    if (res.data.insertedId) {
                        Swal.fire({
                            title: "Success!",
                            text: "Registration successful!",
                            icon: "success",
                            confirmButtonText: "Close"
                        });
                    } else {
                        console.log(res.data.message);
                        Swal.fire({
                            title: "Success!",
                            text: "Login successful!",
                            icon: "success",
                            confirmButtonText: "Close"
                        });
                    }
                })
                .catch((error) => console.error(error));
            })
            .catch(err => console.error(err));
    };

    return (
        <div className="text-center">
            <p className="text-xl mb-2">-------------or-------------</p>
            <div className="flex items-center justify-center gap-5">
                <a onClick={handleGoogleSignIn}><img src="https://i.ibb.co/7j9whwL/search.png" className="w-10 cursor-pointer" alt="Google" /></a>
                <a><img src="https://i.ibb.co/vxj4vrN/github.png" className="w-10 cursor-pointer" alt="GtHub" /></a>
            </div>
        </div>
    );
};

export default SosialSignIn;
