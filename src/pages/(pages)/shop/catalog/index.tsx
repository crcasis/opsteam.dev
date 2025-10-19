import Header from '@/components/layout/TopBar'
import useToggle from '@/hook/useToggle'
import useViewPort from '@/hook/useViewPort'
import { Button, Col, Container, Offcanvas, OffcanvasBody, OffcanvasHeader, OffcanvasTitle, Row } from 'react-bootstrap'
import Footer from './components/Footer'
import Hero from './components/Hero'
import PageTitle from './components/PageTitle'
import Pagination from './components/Pagination'
import ProductCard from './components/ProductCard'
import VerticalProductFilter from './components/VerticalProductFilter'

const page = () => {
  const { isOpen: showFilter, toggle: toggleFilter } = useToggle()
  const { width } = useViewPort()
  return (
    <>
      <Header classname="bg-light" searchbar userSignIn showCart />
      <Container className="py-5 mt-5 mb-lg-4 mb-xl-5">
        <Hero />
        <Row className="pt-xl-3 mt-n1 mt-sm-0">
          <Col lg={9} className="offset-lg-3 pt-lg-3">
            <h1 className="pb-2 pb-sm-3">Home decoration</h1>
          </Col>
        </Row>
        <Row className="pb-2 pb-sm-4">
          <Col lg={3} as={'aside'}>
            {width !== null && width < 1200 ? (
              <Offcanvas placement="start" show={showFilter} onHide={toggleFilter} className="offcanvas-lg" id="shopSidebar">
                <OffcanvasHeader closeButton>
                  <OffcanvasTitle as={'h5'}>Filters</OffcanvasTitle>
                </OffcanvasHeader>
                <OffcanvasBody className="pt-2 pt-lg-0">
                  <VerticalProductFilter />
                </OffcanvasBody>
              </Offcanvas>
            ) : (
              <VerticalProductFilter />
            )}
          </Col>
          <Col lg={9}>
            <PageTitle />
            <ProductCard />
            <Pagination />
          </Col>
        </Row>
      </Container>

      <Button onClick={toggleFilter} className="d-lg-none btn btn-sm fs-sm btn-primary w-100 rounded-0 fixed-bottom" type="button">
        <i className="ai-filter me-2" />
        Filters
      </Button>

      <Footer />
    </>
  )
}

export default page
