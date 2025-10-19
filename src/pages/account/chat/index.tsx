import { Col, Row } from 'react-bootstrap'
import Chat from './components/Chat'
import Contacts from './components/Contacts'

const page = () => {
  return (
    <>
      <Col lg={9} className="pt-4 pb-2 pb-sm-4">
        <h1 className="h2 mb-4">Chats</h1>
        <Row className="position-relative overflow-hidden gx-2 z-1">
          <Contacts />
          <Chat />
        </Row>
      </Col>
    </>
  )
}

export default page
