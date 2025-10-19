import blog from '@/assets/img/megamenu/blog-homepage.jpg'
import businessconsulting from '@/assets/img/megamenu/business-consulting.jpg'
import conference from '@/assets/img/megamenu/conference.jpg'
import corporate from '@/assets/img/megamenu/corporate.jpg'
import coworking from '@/assets/img/megamenu/coworking.jpg'
import creative from '@/assets/img/megamenu/creative-agency.jpg'
import influencer from '@/assets/img/megamenu/influencer.jpg'
import insurance from '@/assets/img/megamenu/insurance.jpg'
import landings from '@/assets/img/megamenu/landings.jpg'
import marketing from '@/assets/img/megamenu/marketing-agency.jpg'
import mobile from '@/assets/img/megamenu/mobile-app.jpg'
import product from '@/assets/img/megamenu/product-landing.jpg'
import saas1 from '@/assets/img/megamenu/saas-1.jpg'
import saas2 from '@/assets/img/megamenu/saas-2.jpg'
import saas3 from '@/assets/img/megamenu/saas-3.jpg'
import saas4 from '@/assets/img/megamenu/saas-4.jpg'
import homepage1 from '@/assets/img/megamenu/shop-homepage-1.jpg'
import homepage2 from '@/assets/img/megamenu/shop-homepage-2.jpg'
import webstudio from '@/assets/img/megamenu/web-studio.jpg'
import yoga from '@/assets/img/megamenu/yoga-studio.jpg'

type LandingType = {
  label: string
  link: string
  image?: string
  badge?: string
  class?: string
}

export const landing: LandingType[] = [
  {
    label: 'Template Intro Page',
    link: '/landing/template',
    image: landings,
    class: 'rounded-3 rounded-start-0',
  },
  {
    label: 'Mobile App Showcase',
    link: '/landing/mobile',
    image: mobile,
    class: 'z-2 opacity-0',
  },
  {
    label: 'Product Landing',
    link: '/landing/product',
    image: product,
    class: 'z-2 opacity-0',
  },
  {
    label: 'SaaS v.1',
    link: '/landing/saas/v1',
    image: saas1,
    class: 'z-2 opacity-0',
  },
  {
    label: 'SaaS v.2',
    link: '/landing/saas/v2',
    image: saas2,
    class: 'z-2 opacity-0',
  },
  {
    label: 'SaaS v.3',
    link: '/landing/saas/v3',
    image: saas3,
    class: 'z-2 opacity-0',
  },
  {
    label: 'SaaS v.4',
    link: '/landing/saas/v4',
    image: saas4,
    class: 'z-2 opacity-0',
    badge: 'New',
  },
  {
    label: 'Shop Homepage v.1',
    link: '/landing/shop/v1',
    image: homepage1,
    class: 'z-2 opacity-0',
  },
  {
    label: 'Shop Homepage v.2',
    link: '/landing/shop/v2',
    image: homepage2,
    class: 'z-2 opacity-0',
    badge: 'New',
  },
  {
    label: 'Marketing Agency',
    link: '/landing/agency/marketing',
    image: marketing,
    class: 'z-2 opacity-0',
  },
  {
    label: 'Creative Agency',
    link: '/landing/agency/creative',
    image: creative,
    class: 'z-2 opacity-0',
  },
  {
    label: 'Conference (Event)',
    link: '/landing/conference',
    image: conference,
    class: 'z-2 opacity-0',
  },
  {
    label: 'Web Studio',
    link: '/landing/web-studio',
    image: webstudio,
    class: 'z-2 opacity-0',
  },
  {
    label: 'Corporate',
    link: '/landing/corporate',
    image: corporate,
    class: 'z-2 opacity-0',
  },
  {
    label: 'Insurance Company',
    link: '/landing/insurance',
    image: insurance,
    class: 'z-2 opacity-0',
    badge: 'New',
  },
  {
    label: 'Business Consulting',
    link: '/landing/business-consulting',
    image: businessconsulting,
    class: 'z-2 opacity-0',
  },
  {
    label: 'Coworking Space',
    link: '/landing/coworking',
    image: coworking,
    class: 'z-2 opacity-0',
  },
  {
    label: 'Yoga Studio',
    link: '/landing/yoga',
    image: yoga,
    class: 'z-2 opacity-0',
  },
  {
    label: 'Influencer',
    link: '/landing/influencer',
    image: influencer,
    class: 'z-2 opacity-0',
  },
  {
    label: 'Blog Homepage',
    link: '/landing/blog',
    image: blog,
    class: 'z-2 opacity-0',
  },
  {
    label: 'List View v.1',
    link: '/portfolio/list-v1',
  },
  {
    label: 'List View v.2',
    link: '/portfolio/list-v2',
  },
  {
    label: 'Grid View v.1',
    link: '/portfolio/grid-v1',
  },
  {
    label: 'Grid View v.2',
    link: '/portfolio/grid-v2',
  },
  {
    label: 'Slider View',
    link: '/portfolio/slider',
  },
  {
    label: 'Single Project v.1',
    link: '/portfolio/single-v1',
  },
  {
    label: 'Single Project v.2',
    link: '/portfolio/single-v2',
  },
  {
    label: 'Catalog (Listing)',
    link: '/shop/catalog',
  },
  {
    label: 'Product Page',
    link: '/shop/single',
  },
  {
    label: 'Checkout',
    link: '/shop/checkout',
  },
  {
    label: 'Grid View with Sidebar',
    link: '/blog/grid-sidebar',
  },
  {
    label: 'Grid View no Sidebar',
    link: '/blog/grid',
  },
  {
    label: 'List View with Sidebar',
    link: '/blog/list-sidebar',
  },
  {
    label: 'List View no Sidebar',
    link: '/blog/list',
  },
  {
    label: 'Single post v.1',
    link: '/blog/single-v1',
  },
  {
    label: 'Single post v.2',
    link: '/blog/single-v2',
  },
  {
    label: 'Single post v.3',
    link: '/blog/single-v3',
  },
  {
    label: 'About - Agency',
    link: '/about/agency',
  },
  {
    label: 'About - Product',
    link: '/about/product',
  },
  {
    label: 'Services v.1',
    link: '/services/v1',
  },
  {
    label: 'Services v.2',
    link: '/services/v2',
  },
  {
    label: 'Services v.3',
    link: '/services/v3',
  },
  {
    label: 'Contacts v.1',
    link: '/contacts/v1',
  },
  {
    label: 'Contacts v.2',
    link: '/contacts/v2',
  },
  {
    label: 'Contacts v.3',
    link: '/contacts/v3',
  },
  {
    label: 'Coming Soon v.1',
    link: '/coming/v1',
  },
  {
    label: 'Coming Soon v.2',
    link: '/coming/v2',
  },
  {
    label: '404 Error v.1',
    link: '/error/v1',
  },
  {
    label: '404 Error v.2',
    link: '/error/v3',
  },
  {
    label: '404 Error v.3',
    link: '/error/v3',
  },
  {
    label: 'Sign In',
    link: '/auth/sign-in',
  },
  {
    label: 'Sign Up',
    link: '/auth/sign-up',
  },
  {
    label: 'Sign In / Up',
    link: '/auth/sign-in-up',
  },
  {
    label: 'Password Recovery',
    link: '/auth/pass-recovery',
  },
  {
    label: 'Overview',
    link: '/account/overview',
  },
  {
    label: 'Settings',
    link: '/account/settings',
  },
  {
    label: 'Billing',
    link: '/account/billing',
  },
  {
    label: 'Orders',
    link: '/account/orders',
  },
  {
    label: 'Earnings',
    link: '/account/earnings',
  },
  {
    label: 'Chat (Messages)',
    link: '/account/chat',
  },
  {
    label: 'Favorites (Wishlist)',
    link: '/account/favorites',
  },
]
