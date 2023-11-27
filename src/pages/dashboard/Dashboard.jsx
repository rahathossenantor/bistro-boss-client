import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center border">
                {/* Page content */}
                <label htmlFor="my-drawer-2" className="btn normal-case border-[#BB8506] text-[#BB8506] px-6 drawer-button lg:hidden">Open drawer</label>
                <Outlet></Outlet>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                    {/* Sidebar content */}
                    <h3 className="mb-5 text-2xl font-semibold">BISTRO BOSS</h3>
                    <li className="mb-1 text-base border"><NavLink to="/dashboard/user-home">User Home</NavLink></li>
                    <li className="mb-1 text-base border"><NavLink to="/dashboard/reservation">Reservatione</NavLink></li>
                    <li className="mb-1 text-base border"><NavLink to="/dashboard/payment-history">Payment History</NavLink></li>
                    <li className="mb-1 text-base border"><NavLink to="/dashboard/my-cart">My Cart</NavLink></li>
                    <li className="mb-1 text-base border"><NavLink to="/dashboard/add-review">Add Review</NavLink></li>
                    <li className="mb-1 text-base border"><NavLink to="/dashboard/my-booking">My Booking</NavLink></li>
                </ul>
            </div>
        </div>
    );
};

export default Dashboard;
