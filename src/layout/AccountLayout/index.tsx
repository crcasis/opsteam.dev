import Header from '@/components/layout/TopBar'
import useToggle from '@/hook/useToggle'
import useViewPort from '@/hook/useViewPort'
import { useEffect, type ReactNode } from 'react'
import { Button, Col, Container, Offcanvas, OffcanvasBody, OffcanvasHeader, Row } from 'react-bootstrap'
import Footer from './components/Footer'
import VerticalNavigationBar from './components/VerticalNavigationBar'

const AccountLayout = ({ children }: { children: ReactNode }) => {
  useEffect(() => {
    document.body.classList.add('bg-secondary')

    return () => {
      document.body.classList.remove('bg-secondary')
    }
  }, [])

  const { isOpen: showFilter, toggle: toggleFilter } = useToggle()
  const { width } = useViewPort()

  return (
    <>
      <Header user />
      <Container className="py-5 mt-4 mt-lg-5 mb-lg-4 my-xl-5">
        <Row className="pt-sm-2 pt-lg-0">
          <Col lg={3} as={'aside'} className="pe-lg-4 pe-xl-5 mt-n3">
            <div className="position-lg-sticky top-0">
              <div className="d-none d-lg-block" style={{ paddingTop: 105 }} />
              {width !== null && width < 1200 ? (
                <Offcanvas placement="start" show={showFilter} onHide={toggleFilter} className="offcanvas-lg" id="sidebarAccount">
                  <OffcanvasHeader closeButton></OffcanvasHeader>
                  <OffcanvasBody>
                    <VerticalNavigationBar />
                  </OffcanvasBody>
                </Offcanvas>
              ) : (
                <VerticalNavigationBar />
              )}
            </div>
          </Col>
          {children}
        </Row>
      </Container>
      <hr className="d-none d-dark-mode-block" />
      <Button variant="primary" onClick={toggleFilter} className="d-lg-none btn btn-sm fs-sm  w-100 rounded-0 fixed-bottom" type="button">
        <i className="ai-menu me-2" />
        Account menu
      </Button>
      <Footer />
    </>
  )
}

export default AccountLayout
