import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import useAuth from "../hooks/useAuth";
import PropTypes from "prop-types";

const AdminRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const { isAdmin, isAdminLoading } = useAdmin();
    const location = useLocation();

    if (loading || isAdminLoading) {
        return (
            <div className="text-center h-screen flex items-center justify-center h-70-screen">
                <span className="loading loading-spinner loading-lg"></span>
            </div>
        );
    }

    if (user && isAdmin) {
        return children;
    }

    return <Navigate state={location.pathname} replace to="/login"></Navigate>;
};

AdminRoute.propTypes = {
    children: PropTypes.node
};

export default AdminRoute;
