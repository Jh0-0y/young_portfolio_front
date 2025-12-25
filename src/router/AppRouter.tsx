// src/routes/AppRouter.tsx
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PublicRoutes from './PublicRouter'
import AdminRoutes from './AdminRouter'

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<PublicRoutes />} />
        <Route path="/admin/*" element={<AdminRoutes />} />
      </Routes>
    </BrowserRouter>
  )
}