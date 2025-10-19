import Header from '@/components/layout/TopBar'
import { type ReactNode } from 'react'
import Footer from './components/Footer'
import Subscription from './components/Subscription'

const BlogLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header classname="bg-light" buynow />
      {children}
      <Subscription />
      <Footer />
    </>
  )
}

export default BlogLayout
