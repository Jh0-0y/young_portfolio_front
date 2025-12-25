import { ProjectDetailPage } from '@/components/portfolio'
import { PortfolioPage } from '@/pages/portfolio'
import { Routes, Route } from 'react-router-dom'

export default function PublicRouter() {
  return (
    <Routes>
        <Route path="portfolio">
          <Route index element={<PortfolioPage />} />
          <Route path="project/:id" element={<ProjectDetailPage />} />
        </Route>
    </Routes>
  )
}