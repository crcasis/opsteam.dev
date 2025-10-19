import avatr1 from '@/assets/img/avatar/01.jpg'
import avatar from '@/assets/img/avatar/19.jpg'
import { useState } from 'react'
import { Card, CardFooter, Col, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import SimpleBar from 'simplebar-react'
import OpenSideBar from './OpenSideBar'

const Chat = () => {
  const [show, setShow] = useState(false)
  return (
    <>
      <Col xl={8}>
        <Card className="h-100 border-0">
          <div className="navbar card-header w-100 mx-0 px-4">
            <div className="d-flex align-items-center w-100 px-sm-3">
              <button
                onClick={() => setShow(true)}
                className="navbar-toggler d-xl-none me-3 me-sm-4"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#contactsList"
                aria-controls="contactsList"
                aria-label="Toggle contacts list">
                <span className="navbar-toggler-icon" />
              </button>
              <div className="position-relative flex-shrink-0">
                <Image className="rounded-circle" src={avatar} width={48} alt="Avatar" />
                <span
                  className="position-absolute bottom-0 end-0 bg-success border border-white rounded-circle me-1"
                  style={{ width: '.625rem', height: '.625rem' }}
                />
              </div>
              <div className="h6 ps-2 ms-1 mb-0">Mark Virgows</div>
              <Dropdown className="ms-auto">
                <DropdownToggle
                  as={'button'}
                  className="btn btn-icon btn-sm btn-outline-secondary border-0 rounded-circle me-n2 content-none"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-label="Actions">
                  <i className="ai-dots-vertical fs-4 fw-bold" />
                </DropdownToggle>
                <DropdownMenu align={'end'} className="my-1">
                  <DropdownItem>
                    <i className="ai-user fs-base opacity-80 me-2" />
                    View profile
                  </DropdownItem>
                  <DropdownItem>
                    <i className="ai-bell-off fs-base opacity-80 me-2" />
                    Disable notifications
                  </DropdownItem>
                  <DropdownItem>
                    <i className="ai-edit fs-base opacity-80 me-2" />
                    Edit contact
                  </DropdownItem>
                  <DropdownItem>
                    <i className="ai-trash fs-base opacity-80 me-2" />
                    Delete contact
                  </DropdownItem>
                  <DropdownItem>
                    <i className="ai-logout fs-base opacity-80 me-2" />
                    Leave chat
                  </DropdownItem>
                  <DropdownItem>
                    <i className="ai-circle-slash fs-base opacity-80 me-2" />
                    Block user
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </div>
          </div>
          <SimpleBar className="card-body pb-0 pt-4" data-simplebar style={{ maxHeight: 580 }}>
            <div className="text-body-secondary text-center mb-4">May 27, 2023</div>
            <div className="mb-3" style={{ maxWidth: 392 }}>
              <div className="d-flex align-items-end mb-2">
                <div className="flex-shrink-0 pe-2 me-1">
                  <Image className="rounded-circle" src={avatar} width={48} alt="Avatar" />
                </div>
                <div className="message-box-start text-dark">Thank you for recommending me as a designer. I have an interview tomorrow!</div>
              </div>
              <div className="fs-xs text-body-secondary text-end">11:32 am</div>
            </div>
            <div className="ms-auto mb-3" style={{ maxWidth: 392 }}>
              <div className="d-flex align-items-end mb-2">
                <div className="message-box-end bg-primary text-white">Oh no thanks! I just know that you are a great specialist!</div>
                <div className="flex-shrink-0 ps-2 ms-1">
                  <Image className="rounded-circle" src={avatr1} width={48} alt="Avatar" />
                </div>
              </div>
              <div className="fs-xs text-body-secondary">
                <i className="ai-checks text-primary fs-xl mt-n1 me-1" />
                2:18 pm
              </div>
            </div>
            <div className="text-body-secondary text-center my-4">May 29, 2023</div>
            <div className="mb-3" style={{ maxWidth: 392 }}>
              <div className="d-flex align-items-end mb-2">
                <div className="flex-shrink-0 pe-2 me-1">
                  <Image className="rounded-circle" src={avatar} width={48} alt="Avatar" />
                </div>
                <div className="w-100">
                  <div className="message-box-start text-dark mb-2">I have great news, I've been hired! 🚀</div>
                  <div className="message-box-start text-dark">Thanks again!</div>
                </div>
              </div>
              <div className="fs-xs text-body-secondary text-end">4:04 am</div>
            </div>
            <div className="ms-auto mb-3" style={{ maxWidth: 392 }}>
              <div className="d-flex align-items-end mb-2">
                <div className="message-box-end bg-primary text-white">You are welcome!</div>
                <div className="flex-shrink-0 ps-2 ms-1">
                  <Image className="rounded-circle" src={avatr1} width={48} alt="Avatar" />
                </div>
              </div>
              <div className="fs-xs text-body-secondary">
                <i className="ai-check text-primary fs-xl mt-n1 me-1" />
                2:18 pm
              </div>
            </div>
            <div className="text-body-secondary text-center my-4">Today</div>
            <div className="mb-3" style={{ maxWidth: 392 }}>
              <div className="d-flex align-items-end mb-2">
                <div className="flex-shrink-0 pe-2 me-1">
                  <Image className="rounded-circle" src={avatar} width={48} alt="Avatar" />
                </div>
                <div className="message-box-start text-dark">
                  I'm so happy to be part of the team and work with you on this new exciting project. Can't thank you enough 😊
                </div>
              </div>
              <div className="fs-xs text-body-secondary text-end">10:17 am</div>
            </div>
          </SimpleBar>
          <CardFooter className="w-100 border-0 mx-0 px-4">
            <div className="d-flex align-items-end border rounded-3 pb-3 pe-3 mx-sm-3">
              <textarea className="form-control border-0" rows={3} placeholder="Type a message" style={{ resize: 'none' }} />
              <div className="nav flex-nowrap align-items-center">
                <Link className="nav-link text-body-secondary p-1 me-1" to="" aria-label="Attach">
                  <i className="ai-paperclip fs-xl" />
                </Link>
                <Link className="nav-link text-body-secondary p-1" to="" aria-label="Emoji">
                  <i className="ai-emoji-smile fs-xl" />
                </Link>
                <button className="btn btn-sm btn-secondary ms-3" type="button">
                  Send
                </button>
              </div>
            </div>
          </CardFooter>
        </Card>
      </Col>

      {show && <OpenSideBar show={show} onClose={() => setShow(false)} />}
    </>
  )
}

export default Chat
