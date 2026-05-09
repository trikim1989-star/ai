import { Navigate, Outlet } from 'react-router-dom'
const isAuthed = true // replace with real auth
export default function ProtectedRoute() {
  return isAuthed ? <Outlet /> : <Navigate to="/" />
}
