import { Navigate, Outlet } from 'react-router-dom';


export const PrivateRoute = () => {
    const auth = true;

    return !auth ? <Navigate to="/login" replace /> : <Outlet />;
}