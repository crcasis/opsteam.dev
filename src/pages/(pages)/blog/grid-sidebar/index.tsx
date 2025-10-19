import useToggle from '@/hook/useToggle'
import useViewPort from '@/hook/useViewPort'
import { Button, Col, Container, Offcanvas, OffcanvasBody, OffcanvasHeader, OffcanvasTitle, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Blog from './components/Blog'
import Sidebar from './components/Sidebar'

const page = () => {
  const { isOpen: showFilter, toggle: toggleFilter } = useToggle()
  const { width } = useViewPort()
  return (
    <>
      <Container className="pt-5 pb-lg-5 pb-md-4 pb-2 my-5">
        <nav aria-label="breadcrumb">
          <ol className="pt-lg-3 pb-lg-4 pb-2 breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/">Home</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Blog grid with sidebar
            </li>
          </ol>
        </nav>
        <Row className="mb-md-2 mb-xl-4">
          <Blog />
          <Col lg={3} as={'aside'} className="offset-xl-1">
            {width !== null && width < 1200 ? (
              // {width < 1200 ? (
              <Offcanvas placement="end" show={showFilter} onHide={toggleFilter} className="offcanvas-lg" id="sidebarBlog">
                <OffcanvasHeader closeButton>
                  <OffcanvasTitle as={'h4'}>Sidebar</OffcanvasTitle>
                </OffcanvasHeader>
                <OffcanvasBody>
                  <Sidebar />
                </OffcanvasBody>
              </Offcanvas>
            ) : (
              <Sidebar />
            )}
          </Col>
        </Row>
      </Container>
      <Button onClick={toggleFilter} className="d-lg-none btn btn-sm fs-sm btn-primary w-100 rounded-0 fixed-bottom" type="button">
        <i className="ai-layout-column me-2" />
        Sidebar
      </Button>
    </>
  )
}

export default page
