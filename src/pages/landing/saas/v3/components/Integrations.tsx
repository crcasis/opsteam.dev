import dropbox from '@/assets/img/landing/saas-3/tools/dropbox.svg'
import evernote from '@/assets/img/landing/saas-3/tools/evernote.svg'
import gmail from '@/assets/img/landing/saas-3/tools/gmail.svg'
import google from '@/assets/img/landing/saas-3/tools/google.svg'
import mailchimp from '@/assets/img/landing/saas-3/tools/mailchimp.svg'
import slack from '@/assets/img/landing/saas-3/tools/slack.svg'
import trello from '@/assets/img/landing/saas-3/tools/trello.svg'
import zoom from '@/assets/img/landing/saas-3/tools/zoom.svg'
import { Card, CardBody, Col, Container, Image, Row } from 'react-bootstrap'

type Integration = {
  name: string
  image: string
  description: string
}

const integrationsData: Integration[] = [
  { name: 'Google', image: google, description: 'Lorem magnis pretium sed curabitur nunc facilisi nunc cursus sagittis volutpat.' },
  { name: 'Zoom', image: zoom, description: 'In eget a mauris quis. Tortor dui tempus quis integer est sit natoque placerat dolor.' },
  { name: 'Slack', image: slack, description: 'Donec blandit nulla elementum eu. Est dui nibh eget amet curabitur nunc.' },
  { name: 'Gmail', image: gmail, description: 'Rutrum interdum tortor, sed at nulla. A cursus bibendum elit purus cras praesent.' },
  { name: 'Trello', image: trello, description: 'Congue pellentesque amet, viverra curabitur quam diam scelerisque fermentum urna.' },
  { name: 'Mailchimp', image: mailchimp, description: 'Turpis fermentum, volutpat ultrices sed ultrices proin risus bibendum elit purus.' },
  { name: 'Dropbox', image: dropbox, description: 'Ut in turpis consequat odio diam lectus elementum. Est faucibus blandit platea.' },
  { name: 'Evernote', image: evernote, description: 'Arcu, lorem facilisis nunc tellus, molestie urna nam mi, ullamcorper tempus quis.' },
]

const Integrations = () => {
  return (
    <>
      <section className="position-relative py-5" style={{ marginTop: '-250px' }}>
        <div style={{ height: 250 }} />
        <div className="bg-secondary position-absolute top-0 start-0 w-100 h-100 d-dark-mode-none" />
        <Container className="position-relative z-2 py-2 py-sm-3 py-md-4 py-lg-5 mb-sm-2 mb-md-3 mb-xxl-5 my-xl-4">
          <h2 className="h1 text-center pt-xxl-3 pb-3 mb-lg-4 mx-auto" style={{ maxWidth: 850 }}>
            Integrate your favorite tools to complete your workflow
          </h2>
          <Row className="row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-xl-4 g-4 pb-xxl-3">
            {integrationsData.map((item, idx) => (
              <Col key={idx}>
                <Card className="h-100 border-0 rounded-4">
                  <div className="bg-secondary position-absolute top-0 start-0 w-100 h-100 rounded-4 d-none d-dark-mode-block" />
                  <CardBody className="position-relative z-2">
                    <Image className="d-block mb-4" src={item.image} alt={item.name} />
                    <p className="mb-0">{item.description}</p>
                  </CardBody>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  )
}

export default Integrations
