// Navigation data for Opsteam

type LandingType = {
  label: string
  link: string
  image?: string
  badge?: string
  class?: string
}

export const landing: LandingType[] = [
  // Portfolio pages
  {
    label: 'Portfolio List',
    link: '/portfolio/list-v2',
  },
  {
    label: 'Portfolio Grid',
    link: '/portfolio/grid-v1',
  },
  {
    label: 'Project Details',
    link: '/portfolio/single-v1',
  },
  // About pages
  {
    label: 'About Us',
    link: '/about/agency',
  },
  // Success Stories pages
  {
    label: 'Success Stories',
    link: '/services/v3',
  },
  // Contact pages
  {
    label: 'Contact Us',
    link: '/contacts/v1',
  },
]
