import { Link, NavLink } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import useAuth from "../hooks/useAuth";
import useCart from "../hooks/useCart";

const Navbar = () => {
    const { user, logOutUser } = useAuth();
    const { cart } = useCart();

    const handleLogOut = () => {
        logOutUser()
            .then(() => { })
            .catch(err => console.error(err));
    };

    const navItems = <>
        <NavLink to="/"><li className="mx-2 text-base">Home</li></NavLink>
        <NavLink to="/contact"><li className="mx-2 text-base">Contact</li></NavLink>
        {
            user && <NavLink to="/dashboard"><li className="mx-2 text-base">Dashboard</li></NavLink>
        }
        <NavLink to="/menu"><li className="mx-2 text-base">Menu</li></NavLink>
        <NavLink to="/shop/popular"><li className="mx-2 text-base">Shop</li></NavLink>
        <NavLink to="/dashboard/my-cart">
            <li className="flex items-center justify-center">
                <button className="p-0 text-base ml-2"><FaShoppingCart className="text-white hover:text-white"></FaShoppingCart><div className="badge">{cart.length}</div></button>
            </li>
        </NavLink>
    </>

    return (
        <div className="navbar fixed z-10 w-full bg-black text-white bg-opacity-60 p-0">
            <div className="navbar p-0 md:container md:mx-auto 2xl:px-0 xl:px-0 lg:px-5 md:px-5 px-5">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden pl-0">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 text-black rounded-box w-52">
                            {navItems}
                        </ul>
                    </div>
                    <a className="font-semibold cursor-pointer text-xl pl-0">BISTRO BOSS</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navItems}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user
                            ? <button onClick={handleLogOut} className="btn">Logout</button>
                            : <button className="btn"><Link to="/login">Login</Link></button>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;
