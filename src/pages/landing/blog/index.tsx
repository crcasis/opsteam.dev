import Header from '@/components/layout/TopBar'
import Authors from './components/Authors'
import Blog from './components/Blog'
import Feature from './components/Feature'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Post from './components/Post'
import Subscription from './components/Subscription'
import Testimonial from './components/Testimonial'

const page = () => {
  return (
    <>
      <Header buynow />
      <Hero />
      <Feature />
      <Testimonial />
      <Post />
      <Authors />
      <Blog />
      <Subscription />
      <Footer />
    </>
  )
}

export default page
