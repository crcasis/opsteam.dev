import { CardHeader, Col, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import SimpleBar from 'simplebar-react'
import { contactsData } from './data'

const Contacts = () => {
  return (
    <>
      <Col xl={4}>
        <div
          className="offcanvas-xl offcanvas-start position-absolute position-xl-relative h-100 bg-light rounded-5 border border-xl-0"
          id="contactsList"
          data-bs-scroll="true"
          data-bs-backdrop="false">
          <div className="rounded-5 overflow-hidden">
            <CardHeader className="w-100 border-0 px-4 pt-4 pb-3">
              <div className="d-flex d-xl-none justify-content-end mt-n2 mb-2">
                <button
                  className="btn btn-outline-secondary border-0 px-3 me-n2"
                  type="button"
                  data-bs-dismiss="offcanvas"
                  data-bs-target=" #contactsList">
                  <i className="ai-cross me-2" />
                  Close
                </button>
              </div>
              <div className="position-relative">
                <input className="form-control pe-5" type="text" placeholder="Search by name or email" />
                <i className="ai-search fs-lg text-nav position-absolute top-50 end-0 translate-middle-y me-3" />
              </div>
            </CardHeader>
            <SimpleBar className="card-body px-0 pb-4 pb-xl-0 pt-1" style={{ maxHeight: 700 }}>
              {contactsData.map((c, idx) => (
                <Link key={idx} className={`d-flex align-items-center text-decoration-none px-4 py-3 ${c.disabled ? 'pe-none bg-gray' : ''}`} to="">
                  <div className="position-relative flex-shrink-0 my-1">
                    {c.avatar ? (
                      <Image className="rounded-circle" src={c.avatar} width={48} height={48} alt={c.name} />
                    ) : (
                      <div
                        className="d-flex align-items-center justify-content-center rounded-circle text-primary fs-lg fw-semibold"
                        style={{ width: 48, height: 48, backgroundColor: c.initialsColor }}>
                        {c.initials}
                      </div>
                    )}
                    <span
                      className={`position-absolute bottom-0 end-0 border border-white rounded-circle me-1 ${c.online ? 'bg-success' : ''}`}
                      style={{
                        width: '.625rem',
                        height: '.625rem',
                        backgroundColor: c.online ? undefined : '#d7dde2',
                      }}
                    />
                  </div>
                  <div className="d-flex justify-content-between w-100 ps-2 ms-1 my-1">
                    <div className="me-3">
                      <div className="h6 mb-1">{c.name}</div>
                      <p className="text-body fs-sm mb-0">{c.message}</p>
                    </div>
                    <div className="text-end">
                      <span className="d-block fs-xs text-body-secondary">{c.time}</span>
                      {c.unread && <span className="badge bg-danger fs-xs lh-1 py-1 px-2">{c.unread}</span>}
                    </div>
                  </div>
                </Link>
              ))}
            </SimpleBar>
          </div>
        </div>
      </Col>
    </>
  )
}

export default Contacts
