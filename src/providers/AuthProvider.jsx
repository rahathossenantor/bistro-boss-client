import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
    GoogleAuthProvider,
    signInWithPopup
} from "firebase/auth";
import PropTypes from "prop-types";
import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import auth from "../firebase/firebase.config";
import useAxiosPublic from "../hooks/useAxiosPublic";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const axiosPublic = useAxiosPublic();

    // register new user with email and password
    const emailPassRegister = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    // login user with email and password
    const emailPassLogin = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    // sign in with google
    const googleProvider = new GoogleAuthProvider();
    const signInUserWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    };

    // logout user
    const logOutUser = () => {
        setLoading(true);
        return signOut(auth);
    };

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);

            // request for jwt token if the user exists
            if (currentUser) {
                const currentUserInfo = { email: currentUser.email };
                axiosPublic.post("/jwt", currentUserInfo)
                    .then((res) => {
                        if (res.data?.token) {
                            localStorage.setItem("access_token", res.data.token);
                        }
                    })
                    .catch((err) => console.error(err));
            } else {
                localStorage.removeItem("access_token");
            }
            setLoading(false);
        });
        return () => unSubscribe();
    }, [axiosPublic]);

    const contextData = {
        user,
        loading,
        emailPassRegister,
        emailPassLogin,
        signInUserWithGoogle,
        logOutUser
    };

    return (
        <AuthContext.Provider value={contextData}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node
};

export default AuthProvider;
