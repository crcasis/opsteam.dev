import TextFormInput from '@/components/form/TextFormInput'
import { yupResolver } from '@hookform/resolvers/yup'
import { Card, OverlayTrigger, Tooltip } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import * as yup from 'yup'

const page = () => {
  const emailSchema = yup.object({
    email: yup.string().email('Please enter a valid Email').required('Please enter your email address'),
  })

  const { control, handleSubmit } = useForm({
    resolver: yupResolver(emailSchema),
  })

  return (
    <>
      <OverlayTrigger overlay={<Tooltip>Back to home</Tooltip>} placement="left">
        <Link
          to="/"
          className="text-nav btn btn-icon bg-light border rounded-circle position-absolute top-0 end-0 z-2 p-0 mt-3 me-3 mt-sm-4 me-sm-4"
          data-bs-toggle="tooltip">
          <i className="ai-home" />
        </Link>
      </OverlayTrigger>
      <div className="d-flex flex-column align-items-center position-relative h-100 px-3 pt-5" style={{ marginTop: 152 }}>
        <div className="mt-auto" style={{ maxWidth: 700 }}>
          <h1 className="pt-3 pb-2 pb-lg-3">Forgot your password?</h1>
          <p className="pb-2">Change your password in three easy steps. This helps to keep your new password secure.</p>
          <ul className="list-unstyled pb-2 pb-lg-0 mb-4 mb-lg-5">
            <li className="d-flex mb-2">
              <span className="text-primary fw-semibold me-2">1.</span>
              Fill in your email address below.
            </li>
            <li className="d-flex mb-2">
              <span className="text-primary fw-semibold me-2">2.</span>
              We'll email you a temporary code.
            </li>
            <li className="d-flex mb-2">
              <span className="text-primary fw-semibold me-2">3.</span>
              Use the code to change your password on our secure website.
            </li>
          </ul>
          <Card className="border-0 bg-primary" data-bs-theme="dark">
            <form className="card-body" onSubmit={handleSubmit(() => {})}>
              <div className="mb-4">
                <div className="position-relative">
                  <i className="ai-mail fs-lg position-absolute top-50 start-0 translate-middle-y text-light opacity-80 ms-3" />
                  <TextFormInput control={control} name="email" type="text" placeholder="Email address" className="form-control-lg ps-5" />
                </div>
              </div>
              <button className="btn btn-light" type="submit">
                Get new password
              </button>
            </form>
          </Card>
        </div>

        <p className="nav w-100 fs-sm pt-5 mb-5" style={{ maxWidth: 700, marginTop: 150 }}>
          <span className="text-body-secondary">© All rights reserved. Made by</span>
          <Link className="nav-link d-inline-block p-0 ms-1" to="https://stackbros.in/" target="_blank" rel="noopener">
            Stackbros
          </Link>
        </p>
      </div>
    </>
  )
}

export default page
