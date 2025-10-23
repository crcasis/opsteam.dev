import AccountLayout from '@/layout/AccountLayout'
import BlogLayout from '@/layout/BlogLayout'
import DefaultLayout from '@/layout/DefaultLayout'
import WebStudio from '@/pages/landing/opsteam'
import { Route, Routes, type RouteProps } from 'react-router-dom'
import { accountRoutes, appRoutes, blogRoutes } from './index'

const AppRouter = (props: RouteProps) => {
  return (
    <Routes>
      {/* Directly load the opsteam landing page */}
      <Route path="/" element={<DefaultLayout {...props}><WebStudio /></DefaultLayout>} />
      <Route path="/landing/opsteam" element={<DefaultLayout {...props}><WebStudio /></DefaultLayout>} />

      {(appRoutes || []).map((route, idx) => (
        <Route key={idx + route.name} path={route.path} element={<DefaultLayout {...props}>{route.element}</DefaultLayout>} />
      ))}

      {(blogRoutes || []).map((route, idx) => (
        <Route key={idx + route.name} path={route.path} element={<BlogLayout {...props}>{route.element}</BlogLayout>} />
      ))}

      {(accountRoutes || []).map((route, idx) => (
        <Route key={idx + route.name} path={route.path} element={<AccountLayout {...props}>{route.element}</AccountLayout>} />
      ))}
    </Routes>
  )
}

export default AppRouter
