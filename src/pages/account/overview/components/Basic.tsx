import gift from '@/assets/img/account/gift-icon.svg'
import avatar from '@/assets/img/avatar/02.jpg'
import { CardBody, Col, Image, Row, Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Basic = () => {
  return (
    <>
      <section className="card border-0 py-1 p-md-2 p-xl-3 p-xxl-4 mb-4">
        <CardBody>
          <div className="d-flex align-items-center mt-sm-n1 pb-4 mb-0 mb-lg-1 mb-xl-3">
            <i className="ai-user text-primary lead pe-1 me-2" />
            <h2 className="h4 mb-0">Basic info</h2>
            <Link className="btn btn-sm btn-secondary ms-auto" to="/account/settings">
              <i className="ai-edit ms-n1 me-2" />
              Edit info
            </Link>
          </div>
          <div className="d-md-flex align-items-center">
            <div className="d-sm-flex align-items-center">
              <div
                className="rounded-circle bg-size-cover bg-position-center flex-shrink-0"
                style={{ width: 80, height: 80, backgroundImage: `url(${avatar})` }}
              />
              <div className="pt-3 pt-sm-0 ps-sm-3">
                <h3 className="h5 mb-2">
                  Isabella Bocouse
                  <i className="ai-circle-check-filled fs-base text-success ms-2" />
                </h3>
                <div className="text-body-secondary fw-medium d-flex flex-wrap flex-sm-nowrap align-iteems-center">
                  <div className="d-flex align-items-center me-3">
                    <i className="ai-mail me-1" />
                    email@example.com
                  </div>
                  <div className="d-flex align-items-center text-nowrap">
                    <i className="ai-map-pin me-1" />
                    USA, $
                  </div>
                </div>
              </div>
            </div>
            <div className="w-100 pt-3 pt-md-0 ms-md-auto" style={{ maxWidth: 212 }}>
              <div className="d-flex justify-content-between fs-sm pb-1 mb-2">
                Profile completion
                <strong className="ms-2">62%</strong>
              </div>
              <div className="progress" style={{ height: 5 }}>
                <div className="progress-bar" role="progressbar" style={{ width: '62%' }} aria-valuenow={62} aria-valuemin={0} aria-valuemax={100} />
              </div>
            </div>
          </div>
          <Row className="py-4 mb-2 mb-sm-3">
            <Col md={6} className="mb-4 mb-md-0">
              <Table className="mb-0">
                <tbody>
                  <tr>
                    <td className="border-0 text-body-secondary py-1 px-0">Phone</td>
                    <td className="border-0 text-dark fw-medium py-1 ps-3">+1 234 567 890</td>
                  </tr>
                  <tr>
                    <td className="border-0 text-body-secondary py-1 px-0">Language</td>
                    <td className="border-0 text-dark fw-medium py-1 ps-3">English</td>
                  </tr>
                  <tr>
                    <td className="border-0 text-body-secondary py-1 px-0">Gender</td>
                    <td className="border-0 text-dark fw-medium py-1 ps-3">Female</td>
                  </tr>
                  <tr>
                    <td className="border-0 text-body-secondary py-1 px-0">Communication</td>
                    <td className="border-0 text-dark fw-medium py-1 ps-3">Mobile, email</td>
                  </tr>
                </tbody>
              </Table>
            </Col>
            <Col md={6} className="d-md-flex justify-content-end">
              <div className="w-100 border rounded-3 p-4" style={{ maxWidth: 212 }}>
                <Image className="d-block mb-2" src={gift} width={24} alt="Gift icon" />
                <h4 className="h5 lh-base mb-0">123 bonuses</h4>
                <p className="fs-sm text-body-secondary mb-0">1 bonus = $1</p>
              </div>
            </Col>
          </Row>
          <div className="alert alert-info d-flex mb-0" role="alert">
            <i className="ai-circle-info fs-xl" />
            <div className="ps-2">
              Fill in the information 100% to receive more suitable offers.
              <Link className="alert-link ms-1" to="/account/settings">
                Go to settings!
              </Link>
            </div>
          </div>
        </CardBody>
      </section>
    </>
  )
}

export default Basic
