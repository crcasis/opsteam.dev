import lines from '@/assets/img/coming/lines.png'
import useCountdown from '@/hook/useCountdown'
import { useEffect } from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Timer = () => {
  const { days, hours, minutes, seconds } = useCountdown('2026-01-01T12:00:00')

  useEffect(() => {
    document.body.classList.add('bg-secondary', 'bg-size-cover', 'bg-position-center')
    document.body.style.backgroundImage = `url(${lines})`

    return () => {
      document.body.classList.remove('bg-secondary', 'bg-size-cover', 'bg-position-center')
      document.body.style.backgroundImage = ''
    }
  }, [])
  return (
    <>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="py-5">
        <Container className="d-flex flex-column justify-content-center align-items-center h-100 text-center pb-2 py-sm-3 py-md-4 py-lg-5">
          <Link className="navbar-brand text-dark p-0 m-0 mb-5" to="/">
            <span className="text-primary flex-shrink-0 me-2">
              <svg width={35} height={32} viewBox="0 0 36 33" xmlns="http://www.w3.org/2000/svg">
                <path
                  fill="currentColor"
                  d="M35.6,29c-1.1,3.4-5.4,4.4-7.9,1.9c-2.3-2.2-6.1-3.7-9.4-3.7c-3.1,0-7.5,1.8-10,4.1c-2.2,2-5.8,1.5-7.3-1.1c-1-1.8-1.2-4.1,0-6.2l0.6-1.1l0,0c0.6-0.7,4.4-5.2,12.5-5.7c0.5,1.8,2,3.1,3.9,3.1c2.2,0,4.1-1.9,4.1-4.2s-1.8-4.2-4.1-4.2c-2,0-3.6,1.4-4,3.3H7.7c-0.8,0-1.3-0.9-0.9-1.6l5.6-9.8c2.5-4.5,8.8-4.5,11.3,0L35.1,24C36,25.7,36.1,27.5,35.6,29z"
                />
              </svg>
            </span>
            Around
          </Link>
          <h1 className="display-2 text-primary">Whipping up our website</h1>
          <p className="fs-xl mx-auto mb-5" style={{ maxWidth: 680 }}>
            We can't wait to unveil what we've been working on, and we appreciate your patience. Thanks for being a part of our journey!
          </p>
          <div className="countdown d-flex flex-wrap justify-content-center mb-5" data-countdown-date="01/01/2026 12:00:00">
            <div className="text-center mb-2">
              <div className="position-relative p-2">
                <span className="position-absolute top-0 start-0 w-100 h-100 bg-white rounded-1 d-dark-mode-none" />
                <span className="position-absolute top-0 start-0 w-100 h-100 bg-secondary rounded-1 d-none d-dark-mode-block" />
                <div className="h3 fw-medium position-relative z-1 mb-0 mx-1">{days}</div>
              </div>
              <span className="fs-sm">days</span>
            </div>
            <span className="blinking text-body-secondary fs-2 mx-2">:</span>
            <div className="text-center mb-2">
              <div className="position-relative p-2">
                <span className="position-absolute top-0 start-0 w-100 h-100 bg-white rounded-1 d-dark-mode-none" />
                <span className="position-absolute top-0 start-0 w-100 h-100 bg-secondary rounded-1 d-none d-dark-mode-block" />
                <div className="h3 fw-medium position-relative z-1 mb-0 mx-1">{hours}</div>
              </div>
              <span className="fs-sm">hours</span>
            </div>
            <span className="blinking text-body-secondary fs-2 mx-2">:</span>
            <div className="text-center mb-2">
              <div className="position-relative p-2">
                <span className="position-absolute top-0 start-0 w-100 h-100 bg-white rounded-1 d-dark-mode-none" />
                <span className="position-absolute top-0 start-0 w-100 h-100 bg-secondary rounded-1 d-none d-dark-mode-block" />
                <div className="h3 fw-medium position-relative z-1 mb-0 mx-1">{minutes}</div>
              </div>
              <span className="fs-sm">mins</span>
            </div>
            <span className="blinking text-body-secondary fs-2 mx-2">:</span>
            <div className="text-center mb-2">
              <div className="position-relative p-2">
                <span className="position-absolute top-0 start-0 w-100 h-100 bg-white rounded-1 d-dark-mode-none" />
                <span className="position-absolute top-0 start-0 w-100 h-100 bg-secondary rounded-1 d-none d-dark-mode-block" />
                <div className="h3 fw-medium position-relative z-1 mb-0 mx-1">{seconds}</div>
              </div>
              <span className="fs-sm">secs</span>
            </div>
          </div>

          <form className="input-group mx-auto" style={{ maxWidth: 480 }}>
            <input type="email" className="form-control" placeholder="Enter your email" required />
            <button type="submit" className="btn btn-primary">
              Notify me
            </button>
          </form>
        </Container>
      </div>
    </>
  )
}

export default Timer
