import { lazy } from 'react'
import { Navigate, type RouteProps } from 'react-router-dom'

//Account
const Billing = lazy(() => import('@/pages/account/billing/index'))
const Chat = lazy(() => import('@/pages/account/chat/index'))
const Earnings = lazy(() => import('@/pages/account/earnings/index'))
const Favorites = lazy(() => import('@/pages/account/favorites/index'))
const Order = lazy(() => import('@/pages/account/orders/index'))
const OverView = lazy(() => import('@/pages/account/overview/index'))
const Settings = lazy(() => import('@/pages/account/settings/index'))

//landing
const AgencyCreative = lazy(() => import('@/pages/landing/agency/creative/index'))
const AgencyMarketing = lazy(() => import('@/pages/landing/agency/marketing/index'))
const LandingBlog = lazy(() => import('@/pages/landing/blog/index'))
const BusinessConsulting = lazy(() => import('@/pages/landing/business-consulting/index'))
const Conference = lazy(() => import('@/pages/landing/conference/index'))
const Corporate = lazy(() => import('@/pages/landing/corporate/index'))
const Coworking = lazy(() => import('@/pages/landing/coworking/index'))
const Influencer = lazy(() => import('@/pages/landing/influencer/index'))
const Insurance = lazy(() => import('@/pages/landing/insurance/index'))
const Mobile = lazy(() => import('@/pages/landing/mobile/index'))
const Product = lazy(() => import('@/pages/landing/product/index'))
const SaasV1 = lazy(() => import('@/pages/landing/saas/v1/index'))
const SaasV2 = lazy(() => import('@/pages/landing/saas/v2/index'))
const SaasV3 = lazy(() => import('@/pages/landing/saas/v3/index'))
const SaasV4 = lazy(() => import('@/pages/landing/saas/v4/index'))
const ShopV1 = lazy(() => import('@/pages/landing/shop/v1/index'))
const ShopV2 = lazy(() => import('@/pages/landing/shop/v2/index'))
const Template = lazy(() => import('@/pages/landing/template/index'))
const WebStudio = lazy(() => import('@/pages/landing/web-studio/index'))
const Yoga = lazy(() => import('@/pages/landing/yoga/index'))

// services //shop
const ServiceV1 = lazy(() => import('@/pages/(pages)/services/v1/index'))
const ServiceV2 = lazy(() => import('@/pages/(pages)/services/v2/index'))
const ServicesV3 = lazy(() => import('@/pages/(pages)/services/v3/index'))
const ShopCatalog = lazy(() => import('@/pages/(pages)/shop/catalog/index'))
const ShopCheckout = lazy(() => import('@/pages/(pages)/shop/checkout/index'))
const ShopSingle = lazy(() => import('@/pages/(pages)/shop/single/index'))

//pages
const AboutAgency = lazy(() => import('@/pages/(pages)/about/agency/index'))
const AboutProduct = lazy(() => import('@/pages/(pages)/about/product/index'))

const ContactV1 = lazy(() => import('@/pages/(pages)/contacts/v1/index'))
const ContactV2 = lazy(() => import('@/pages/(pages)/contacts/v2/index'))
const ContactV3 = lazy(() => import('@/pages/(pages)/contacts/v3/index'))

const ComingV1 = lazy(() => import('@/pages/(pages)/coming/v1/index'))
const ComingV2 = lazy(() => import('@/pages/(pages)/coming/v2/index'))

const ErrorV1 = lazy(() => import('@/pages/(pages)/error/v1/index'))
const ErrorV2 = lazy(() => import('@/pages/(pages)/error/v2/index'))
const ErrorV3 = lazy(() => import('@/pages/(pages)/error/v3/index'))

//Portfolio
const PortfolioGridV1 = lazy(() => import('@/pages/(pages)/portfolio/grid-v1/index'))
const PortfolioGridV2 = lazy(() => import('@/pages/(pages)/portfolio/grid-v2/index'))
const PortfolioListV1 = lazy(() => import('@/pages/(pages)/portfolio/list-v1/index'))
const PostfolioListV2 = lazy(() => import('@/pages/(pages)/portfolio/list-v2/index'))
const PortfolioSingleV1 = lazy(() => import('@/pages/(pages)/portfolio/single-v1/index'))
const PortfolioSingleV2 = lazy(() => import('@/pages/(pages)/portfolio/single-v2/index'))
const Slider = lazy(() => import('@/pages/(pages)/portfolio/slider/index'))

const Pricing = lazy(() => import('@/pages/(pages)/pricing/index'))

//auth
const SignIn = lazy(() => import('@/pages/auth/sign-in/index'))
const SignUp = lazy(() => import('@/pages/auth/sign-up/index'))
const PassRecovery = lazy(() => import('@/pages/auth/pass-recovery/index'))
const SignInUp = lazy(() => import('@/pages/auth/sign-in-up/index'))

// //blogs
const BlogGrid = lazy(() => import('@/pages/(pages)/blog/grid/index'))
const BlogGridSideBar = lazy(() => import('@/pages/(pages)/blog/grid-sidebar/index'))
const BlogList = lazy(() => import('@/pages/(pages)/blog/list/index'))
const BlogListSideBar = lazy(() => import('@/pages/(pages)/blog/list-sidebar/index'))
const BlogSingleV1 = lazy(() => import('@/pages/(pages)/blog/single-v1/index'))
const BlogSingleV2 = lazy(() => import('@/pages/(pages)/blog/single-v2/index'))
const BlogSingleV3 = lazy(() => import('@/pages/(pages)/blog/single-v3/index'))

export type RoutesProps = {
  path: RouteProps['path']
  name: string
  element: RouteProps['element']
  exact?: boolean
}

const initialRoutes: RoutesProps[] = [
  {
    path: '/',
    name: 'root',
    element: <Navigate to="/landing/template" />,
  },
]

export const LandingPages: RoutesProps[] = [
  {
    path: '/landing/template',
    name: 'Template Intro Page',
    element: <Template />,
  },
  {
    path: '/landing/agency/creative',
    name: 'Creative Agency',
    element: <AgencyCreative />,
  },
  {
    path: '/landing/agency/marketing',
    name: 'Marketing Agency',
    element: <AgencyMarketing />,
  },
  {
    path: '/landing/blog',
    name: 'Blog Homepage',
    element: <LandingBlog />,
  },
  {
    path: '/landing/business-consulting',
    name: 'Business Consulting',
    element: <BusinessConsulting />,
  },
  {
    path: '/landing/conference',
    name: 'Conference (Event)',
    element: <Conference />,
  },
  {
    path: '/landing/corporate',
    name: 'Corporate',
    element: <Corporate />,
  },
  {
    path: '/landing/coworking',
    name: 'Coworking Space',
    element: <Coworking />,
  },
  {
    path: '/landing/influencer',
    name: 'Influencer',
    element: <Influencer />,
  },
  {
    path: '/landing/insurance',
    name: 'Insurance Company',
    element: <Insurance />,
  },
  {
    path: '/landing/mobile',
    name: 'Mobile App Showcase',
    element: <Mobile />,
  },
  {
    path: '/landing/product',
    name: 'Product Landing',
    element: <Product />,
  },
  {
    path: '/landing/saas/v1',
    name: 'SaaS v.1',
    element: <SaasV1 />,
  },
  {
    path: '/landing/saas/v2',
    name: 'SaaS v.2',
    element: <SaasV2 />,
  },
  {
    path: '/landing/saas/v3',
    name: 'SaaS v.3',
    element: <SaasV3 />,
  },
  {
    path: '/landing/saas/v4',
    name: 'SaaS v.4',
    element: <SaasV4 />,
  },
  {
    path: '/landing/shop/v1',
    name: 'Shop Homepage v.1',
    element: <ShopV1 />,
  },
  {
    path: '/landing/shop/v2',
    name: 'Shop Homepage v.2',
    element: <ShopV2 />,
  },
  {
    path: '/landing/web-studio',
    name: 'Web Studio',
    element: <WebStudio />,
  },
  {
    path: '/landing/yoga',
    name: 'Yoga Studio',
    element: <Yoga />,
  },
]

export const accountRoutes: RoutesProps[] = [
  {
    path: '/account/billing',
    name: 'Account Billing',
    element: <Billing />,
  },
  {
    path: '/account/chat',
    name: 'Account Chat',
    element: <Chat />,
  },
  {
    path: '/account/earnings',
    name: 'Account Earnings',
    element: <Earnings />,
  },
  {
    path: '/account/favorites',
    name: 'Account Favorites',
    element: <Favorites />,
  },
  {
    path: '/account/orders',
    name: 'Account Orders',
    element: <Order />,
  },
  {
    path: '/account/overview',
    name: 'Account OverView',
    element: <OverView />,
  },
  {
    path: '/account/settings',
    name: 'Account Settings',
    element: <Settings />,
  },
]

export const errorRoutes: RoutesProps[] = [
  {
    path: '/error/v1',
    name: 'Error V1',
    element: <ErrorV1 />,
  },
  {
    path: '/error/v2',
    name: 'Error V2',
    element: <ErrorV2 />,
  },
  {
    path: '/error/v3',
    name: 'Error V3',
    element: <ErrorV3 />,
  },
]

export const portfolioRoutes: RoutesProps[] = [
  {
    path: '/portfolio/grid-v1',
    name: 'Portfolio Grid V1',
    element: <PortfolioGridV1 />,
  },
  {
    path: '/portfolio/grid-v2',
    name: 'Portfolio Grid V2',
    element: <PortfolioGridV2 />,
  },
  {
    path: '/portfolio/list-v1',
    name: 'Portfolio List V1',
    element: <PortfolioListV1 />,
  },
  {
    path: '/portfolio/list-v2',
    name: 'Portfolio List V2',
    element: <PostfolioListV2 />,
  },
  {
    path: '/portfolio/single-v1',
    name: 'Portfolio Single V1',
    element: <PortfolioSingleV1 />,
  },
  {
    path: '/portfolio/single-v2',
    name: 'Portfolio Single V2',
    element: <PortfolioSingleV2 />,
  },
  {
    path: '/portfolio/slider',
    name: 'Slider',
    element: <Slider />,
  },
]

export const authRoutes: RoutesProps[] = [
  {
    path: '/auth/sign-in',
    name: 'Sign In',
    element: <SignIn />,
  },
  {
    path: '/auth/sign-up',
    name: 'Sign Up',
    element: <SignUp />,
  },
  {
    path: '/auth/pass-recovery',
    name: 'Password Recovery',
    element: <PassRecovery />,
  },
  {
    path: '/auth/sign-in-up',
    name: 'Sign In Up',
    element: <SignInUp />,
  },
]

export const contactsRoutes: RoutesProps[] = [
  {
    path: '/contacts/v1',
    name: 'Contact V1',
    element: <ContactV1 />,
  },
  {
    path: '/contacts/v2',
    name: 'Contact V2',
    element: <ContactV2 />,
  },
  {
    path: '/contacts/v3',
    name: 'Contact V3',
    element: <ContactV3 />,
  },
]

export const pageMenuPages: RoutesProps[] = [
  {
    path: '/about/agency',
    name: 'About Agency',
    element: <AboutAgency />,
  },
  {
    path: '/about/product',
    name: 'About Product',
    element: <AboutProduct />,
  },
  {
    path: '/coming/v1',
    name: 'Coming V1',
    element: <ComingV1 />,
  },
  {
    path: '/coming/v2',
    name: 'Coming V2',
    element: <ComingV2 />,
  },
  {
    path: '/pricing',
    name: 'Pricing',
    element: <Pricing />,
  },
]

export const shopRoutes: RoutesProps[] = [
  {
    path: '/shop/catalog',
    name: 'Shop Catalog',
    element: <ShopCatalog />,
  },
  {
    path: '/shop/checkout',
    name: 'Shop Checkout',
    element: <ShopCheckout />,
  },
  {
    path: '/shop/single',
    name: 'Shop Single',
    element: <ShopSingle />,
  },
]

export const servicePages: RoutesProps[] = [
  {
    path: '/services/v1',
    name: 'service V1',
    element: <ServiceV1 />,
  },
  {
    path: '/services/v2',
    name: 'Service V2',
    element: <ServiceV2 />,
  },
  {
    path: '/services/v3',
    name: 'Service V3',
    element: <ServicesV3 />,
  },
]

export const blogRoutes: RoutesProps[] = [
  {
    path: '/blog/grid',
    name: 'Blog Grid',
    element: <BlogGrid />,
  },
  {
    path: '/blog/grid-sidebar',
    name: 'Blog Grid Sidebar',
    element: <BlogGridSideBar />,
  },
  {
    path: '/blog/list',
    name: 'Blog List',
    element: <BlogList />,
  },
  {
    path: '/blog/list-sidebar',
    name: 'Blog List SideBar',
    element: <BlogListSideBar />,
  },
  {
    path: '/blog/single-v1',
    name: 'Detail Single V1 ',
    element: <BlogSingleV1 />,
  },
  {
    path: '/blog/single-v2',
    name: 'Detail Single V2',
    element: <BlogSingleV2 />,
  },
  {
    path: '/blog/single-v3',
    name: 'Blog Single V3',
    element: <BlogSingleV3 />,
  },
]

export const appRoutes = [
  ...initialRoutes,
  ...LandingPages,
  ...pageMenuPages,
  ...servicePages,
  ...errorRoutes,
  ...portfolioRoutes,
  ...authRoutes,
  ...contactsRoutes,
  ...shopRoutes,
]

export const blogRoute = [...blogRoutes]

export const accountRoute = [...accountRoutes]
