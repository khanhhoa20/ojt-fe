import { useLocation, Navigate, Outlet } from "react-router-dom";


const RequireAuth = ({ allowedRoles }) => {

    const location = useLocation();
    // console.log(allowedRoles);
    return (
        allowedRoles?.includes(sessionStorage.getItem("roleID"))
            ? <Outlet />
            : <Navigate to="/login" state={{ from: location }} replace />

    );
}

export default RequireAuth;