import useToggle from '@/hook/useToggle'
import useViewPort from '@/hook/useViewPort'
import { Button, Col, Offcanvas, OffcanvasBody, OffcanvasHeader, OffcanvasTitle, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Detail from './components/Detail'
import SideBar from './components/SideBar'
import Blog from '@/layout/BlogLayout/components/Blog'

const page = () => {
  const { isOpen: showFilter, toggle: toggleFilter } = useToggle()
  const { width } = useViewPort()
  return (
    <>
      <section className="container pt-5 mt-5">
        <nav aria-label="breadcrumb">
          <ol className="pt-lg-3 pb-lg-4 pb-2 breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/">Home</Link>
            </li>
            <li className="breadcrumb-item">
              <Link to="/blog/list-sidebar">Blog</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Single post v.3
            </li>
          </ol>
        </nav>
        <Row>
          <Detail />
          <Col lg={3} as={'aside'} className="offset-xl-1">
            {width !== null && width < 1200 ? (
              <Offcanvas placement="end" show={showFilter} onHide={toggleFilter} className="offcanvas-lg" id="sidebarBlog">
                <OffcanvasHeader closeButton>
                  <OffcanvasTitle as={'h4'}>Sidebar</OffcanvasTitle>
                </OffcanvasHeader>
                <OffcanvasBody>
                  <SideBar />
                </OffcanvasBody>
              </Offcanvas>
            ) : (
              <SideBar />
            )}
          </Col>
        </Row>
      </section>
      <Blog />
      <Button onClick={toggleFilter} className="d-lg-none btn btn-sm fs-sm btn-primary w-100 rounded-0 fixed-bottom" type="button">
        <i className="ai-layout-column me-2" />
        Sidebar
      </Button>
    </>
  )
}

export default page
