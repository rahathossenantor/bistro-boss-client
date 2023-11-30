import { NavLink, Outlet } from "react-router-dom";
import { FaAd, FaBook, FaCalendar, FaEnvelope, FaHome, FaList, FaShoppingBag, FaShoppingCart, FaUsers, FaUtensils } from "react-icons/fa";
import useAdmin from "../../hooks/useAdmin";

const Dashboard = () => {
    const { isAdmin } = useAdmin();

    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center p-5">
                {/* Page content */}
                <label htmlFor="my-drawer-2" className="btn normal-case border-[#BB8506] text-[#BB8506] px-6 drawer-button lg:hidden">Open drawer</label>
                <Outlet></Outlet>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                    {/* Sidebar content */}
                    <h3 className="mb-5 text-2xl font-semibold">BISTRO BOSS</h3>
                    {
                        isAdmin ?
                            <>
                                <li className="mb-1 text-base border"><NavLink to="/dashboard/admin-home"><FaHome></FaHome> Admin Home</NavLink></li>
                                <li className="mb-1 text-base border"><NavLink to="/dashboard/add-items"><FaUtensils></FaUtensils> Add Items</NavLink></li>
                                <li className="mb-1 text-base border"><NavLink to="/dashboard/manage-items"><FaList></FaList> Manage Items</NavLink></li>
                                <li className="mb-1 text-base border"><NavLink to="/dashboard/manage-bookings"><FaBook></FaBook> Manage Bookings</NavLink></li>
                                <li className="mb-1 text-base border"><NavLink to="/dashboard/all-users"><FaUsers></FaUsers> All Users</NavLink></li>
                            </> :
                            <>
                                <li className="mb-1 text-base border"><NavLink to="/dashboard/user-home"><FaHome></FaHome> User Home</NavLink></li>
                                <li className="mb-1 text-base border"><NavLink to="/dashboard/reservation"><FaCalendar></FaCalendar> Reservatione</NavLink></li>
                                <li className="mb-1 text-base border"><NavLink to="/dashboard/payment-history"><FaList></FaList> Payment History</NavLink></li>
                                <li className="mb-1 text-base border"><NavLink to="/dashboard/my-cart"><FaShoppingCart></FaShoppingCart> My Cart</NavLink></li>
                                <li className="mb-1 text-base border"><NavLink to="/dashboard/add-review"><FaAd></FaAd> Add Review</NavLink></li>
                                <li className="mb-1 text-base border"><NavLink to="/dashboard/my-booking"><FaBook></FaBook> My Booking</NavLink></li>
                            </>
                    }
                    <div className="divider"></div>
                    <li className="mb-1 text-base border"><NavLink to="/"><FaHome></FaHome> Home</NavLink></li>
                    <li className="mb-1 text-base border"><NavLink to="/menu"><FaUtensils></FaUtensils> Menu</NavLink></li>
                    <li className="mb-1 text-base border"><NavLink to="/shop/popular"><FaShoppingBag></FaShoppingBag> Shop</NavLink></li>
                    <li className="mb-1 text-base border"><NavLink to="/contact"><FaEnvelope></FaEnvelope> Contact</NavLink></li>
                </ul>
            </div>
        </div>
    );
};

export default Dashboard;
