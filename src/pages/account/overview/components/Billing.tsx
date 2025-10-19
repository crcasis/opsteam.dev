import { Card, CardBody } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Billing = () => {
  return (
    <>
      <section className="col">
        <Card className="h-100 border-0 py-1 p-md-2 p-xl-3 p-xxl-4">
          <CardBody>
            <div className="d-flex align-items-center mt-sm-n1 pb-4 mb-1 mb-lg-2">
              <i className="ai-wallet text-primary lead pe-1 me-2" />
              <h2 className="h4 mb-0">Billing</h2>
              <Link className="btn btn-sm btn-secondary ms-auto" to="/account/billing">
                <i className="ai-edit ms-n1 me-2" />
                Edit info
              </Link>
            </div>
            <div className="d-flex align-items-center pb-1 mb-2">
              <h3 className="h6 mb-0 me-3">Isabella Bocouse</h3>
              <span className="badge bg-primary bg-opacity-10 text-primary">Primary</span>
            </div>
            <div className="d-flex align-items-center pb-4 mb-2 mb-sm-3">
              <svg width={52} height={42} viewBox="0 0 52 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M22.6402 28.2865H18.5199L21.095 12.7244H25.2157L22.6402 28.2865ZM15.0536 12.7244L11.1255 23.4281L10.6607 21.1232L10.6611 21.124L9.27467 14.1256C9.27467 14.1256 9.10703 12.7244 7.32014 12.7244H0.8262L0.75 12.9879C0.75 12.9879 2.73586 13.3942 5.05996 14.7666L8.63967 28.2869H12.9327L19.488 12.7244H15.0536ZM47.4619 28.2865H51.2453L47.9466 12.7239H44.6345C43.105 12.7239 42.7324 13.8837 42.7324 13.8837L36.5873 28.2865H40.8825L41.7414 25.9749H46.9793L47.4619 28.2865ZM42.928 22.7817L45.093 16.9579L46.3109 22.7817H42.928ZM36.9095 16.4667L37.4975 13.1248C37.4975 13.1248 35.6831 12.4463 33.7916 12.4463C31.7469 12.4463 26.8913 13.3251 26.8913 17.5982C26.8913 21.6186 32.5902 21.6685 32.5902 23.7803C32.5902 25.8921 27.4785 25.5137 25.7915 24.182L25.1789 27.6763C25.1789 27.6763 27.0187 28.555 29.8296 28.555C32.6414 28.555 36.8832 27.1234 36.8832 23.2271C36.8832 19.1808 31.1331 18.8041 31.1331 17.0449C31.1335 15.2853 35.1463 15.5113 36.9095 16.4667Z"
                  fill="#2566AF"
                />
                <path
                  d="M10.6611 22.1235L9.2747 15.1251C9.2747 15.1251 9.10705 13.7239 7.32016 13.7239H0.8262L0.75 13.9874C0.75 13.9874 3.87125 14.6235 6.86507 17.0066C9.72766 19.2845 10.6611 22.1235 10.6611 22.1235Z"
                  fill="#E6A540"
                />
              </svg>
              <div className="ps-3 fs-sm">
                <div className="text-dark">Visa •••• 9016</div>
                <div className="text-body-secondary">Debit - Expires 03/24</div>
              </div>
            </div>
            <div className="alert alert-danger d-flex mb-0">
              <i className="ai-octagon-alert fs-xl me-2" />
              <p className="mb-0">Your primary credit card expired on 01/04/2023. Please add a new card or update this one.</p>
            </div>
          </CardBody>
        </Card>
      </section>
    </>
  )
}

export default Billing
