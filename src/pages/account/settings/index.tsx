import { Col } from 'react-bootstrap'
import Basic from './components/BasicInfo'
import DeleteAccount from './components/DeleteAccount'
import Notification from './components/Notification'
import Password from './components/Password'

const page = () => {
  return (
    <>
      <Col lg={9} className="pt-4 pb-2 pb-sm-4">
        <h1 className="h2 mb-4">Overview</h1>
        <Basic />
        <Password />
        <Notification />
        <DeleteAccount />
      </Col>
    </>
  )
}

export default page
