import avatar from '@/assets/img/avatar/02.jpg'
import { CardBody, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Basic = () => {
  return (
    <>
      <section className="card border-0 py-1 p-md-2 p-xl-3 p-xxl-4 mb-4">
        <CardBody>
          <div className="d-flex align-items-center mt-sm-n1 pb-4 mb-0 mb-lg-1 mb-xl-3">
            <i className="ai-user text-primary lead pe-1 me-2" />
            <h2 className="h4 mb-0">Basic info</h2>
          </div>
          <div className="d-flex align-items-center">
            <div className="dropdown">
              <Link
                className="d-flex flex-column justify-content-end position-relative overflow-hidden rounded-circle bg-size-cover bg-position-center flex-shrink-0"
                to=""
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{ width: 80, height: 80, backgroundImage: `url(${avatar})` }}
                aria-label="Upload picture"
              >
                <span className="d-block text-light text-center lh-1 pb-1" style={{ backgroundColor: 'rgba(0,0,0,.5)' }}>
                  <i className="ai-camera" />
                </span>
              </Link>
              <div className="dropdown-menu my-1">
                <Link className="dropdown-item fw-normal" to="">
                  <i className="ai-camera fs-base opacity-70 me-2" />
                  Upload new photo
                </Link>
                <Link className="dropdown-item text-danger fw-normal" to="">
                  <i className="ai-trash fs-base me-2" />
                  Delete photo
                </Link>
              </div>
            </div>

            <div className="ps-3">
              <h3 className="h6 mb-1">Profile picture</h3>
              <p className="fs-sm text-body-secondary mb-0">PNG or JPG no bigger than 1000px wide and tall.</p>
            </div>
          </div>
          <Row className="g-3 g-sm-4 mt-0 mt-lg-2">
            <Col sm={6}>
              <label className="form-label" htmlFor="fn">
                First name
              </label>
              <input className="form-control" type="text" defaultValue="Isabella" id="fn" />
            </Col>
            <Col sm={6}>
              <label className="form-label" htmlFor="ln">
                Last name
              </label>
              <input className="form-control" type="text" defaultValue="Bocouse" id="ln" />
            </Col>
            <Col sm={6}>
              <label className="form-label" htmlFor="email">
                Email address
              </label>
              <input className="form-control" type="email" defaultValue="bocouse@example.com" id="email" />
            </Col>
            <Col sm={6}>
              <label className="form-label" htmlFor="phone">
                Phone <span className="text-body-secondary">(optional)</span>
              </label>
              <input
                className="form-control"
                type="tel"
                data-format='{"numericOnly": true, "delimiters": ["+1 ", " ", " "], "blocks": [0, 3, 3, 2]}'
                placeholder="+1 ___ ___ __"
                id="phone"
              />
            </Col>
            <Col sm={6}>
              <label className="form-label" htmlFor="country">
                Country
              </label>
              <select className="form-select" id="country">
                <option disabled>Select country</option>
                <option value="Australia">Australia</option>
                <option value="Belgium">Belgium</option>
                <option value="Canada">Canada</option>
                <option value="Denmark">Denmark</option>
                <option value="USA">USA</option>
              </select>
            </Col>
            <Col sm={6}>
              <label className="form-label" htmlFor="language">
                Language
              </label>
              <select className="form-select" id="language">
                <option disabled>Select language</option>
                <option value="English">English</option>
                <option value="Français">Français</option>
                <option value="Deutsch">Deutsch</option>
                <option value="Italiano">Italiano</option>
              </select>
            </Col>
            <Col sm={6}>
              <label className="form-label" htmlFor="timezone">
                Time zone
              </label>
              <select className="form-select" id="timezone">
                <option disabled>Select time zone</option>
                <option value="AST">Atlantic Standard Time (AST)</option>
                <option value="EST">Eastern Standard Time (EST)</option>
                <option value="CST">Central Standard Time (CST)</option>
                <option value="MST">Mountain Standard Time (MST)</option>
                <option value="PST">Pacific Standard Time (PST)</option>
                <option value="AKST">Alaskan Standard Time (AKST)</option>
                <option value="HST">Hawaii-Aleutian Standard Time (HST)</option>
              </select>
            </Col>
            <Col sm={6}>
              <label className="form-label" htmlFor="currency">
                Currency
              </label>
              <select className="form-select" id="currency">
                <option disabled>Select currency</option>
                <option value="usd">$ USD</option>
                <option value="eur">€ EUR</option>
                <option value="ukp">£ UKP</option>
                <option value="jpy">¥ JPY</option>
              </select>
            </Col>
            <Col xs={12}>
              <label className="form-label" htmlFor="bio">
                Bio
              </label>
              <textarea className="form-control" rows={5} placeholder="Add a bio" id="bio" />
            </Col>
            <Col xs={12} className="d-sm-flex align-items-center pt-sm-2 pt-md-3">
              <div className="form-label text-body-secondary mb-2 mb-sm-0 me-sm-4">Gender:</div>
              <div className="form-check form-check-inline mb-0">
                <input className="form-check-input" type="radio" name="gender" defaultValue="Male" id="male" />
                <label className="form-check-label" htmlFor="male">
                  Male
                </label>
              </div>
              <div className="form-check form-check-inline mb-0">
                <input className="form-check-input" type="radio" name="gender" defaultValue="Female" defaultChecked id="female" />
                <label className="form-check-label" htmlFor="female">
                  Female
                </label>
              </div>
              <div className="form-check form-check-inline mb-0">
                <input className="form-check-input" type="radio" name="gender" defaultValue="Other" id="other" />
                <label className="form-check-label" htmlFor="other">
                  Other
                </label>
              </div>
            </Col>
            <Col xs={12} className="d-sm-flex align-items-center">
              <div className="form-label text-body-secondary mb-2 mb-sm-0 me-sm-4">Communication:</div>
              <div className="form-check form-check-inline mb-0">
                <input className="form-check-input" type="checkbox" name="com-email" defaultValue="Email" defaultChecked id="c-email" />
                <label className="form-check-label" htmlFor="c-email">
                  Email
                </label>
              </div>
              <div className="form-check form-check-inline mb-0">
                <input className="form-check-input" type="checkbox" name="com-phone" defaultValue="Phone" id="c-phone" />
                <label className="form-check-label" htmlFor="c-phone">
                  Phone
                </label>
              </div>
            </Col>
            <Col xs={12} className="d-flex justify-content-end pt-3">
              <button className="btn btn-secondary" type="button">
                Cancel
              </button>
              <button className="btn btn-primary ms-3" type="button">
                Save changes
              </button>
            </Col>
          </Row>
        </CardBody>
      </section>
    </>
  )
}

export default Basic
