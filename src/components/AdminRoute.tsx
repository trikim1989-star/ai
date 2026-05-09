import { Navigate, Outlet } from 'react-router-dom'
const isAdmin = true // replace with real check
export default function AdminRoute() {
  return isAdmin ? <Outlet /> : <Navigate to="/dashboard" />
}
