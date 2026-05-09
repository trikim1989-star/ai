import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CyberLayout from './components/CyberLayout'
import ProtectedRoute from './components/ProtectedRoute'
import AdminRoute from './components/AdminRoute'
import Landing from './pages/Landing'
import Dashboard from './pages/Dashboard'
import Generate from './pages/Generate'
import Billing from './pages/Billing'
import MediaLibrary from './pages/MediaLibrary'
import Admin from './pages/Admin'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route element={<ProtectedRoute />}>
          <Route element={<CyberLayout />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/generate" element={<Generate />} />
            <Route path="/billing" element={<Billing />} />
            <Route path="/library" element={<MediaLibrary />} />
          </Route>
        </Route>
        <Route element={<AdminRoute />}>
          <Route path="/admin" element={<Admin />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
