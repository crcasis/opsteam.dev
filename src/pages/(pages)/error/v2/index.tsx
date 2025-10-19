import layer from '@/assets/img/404/layer01.png'
import layer02light from '@/assets/img/404/layer02-light.png'
import layer03dark from '@/assets/img/404/layer03-dark.png'
import layer03light from '@/assets/img/404/layer03-light.png'
import { Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const page = () => {
  return (
    <>
      <div className="d-flex flex-column flex-lg-row justify-content-between min-vh-100 position-relative">
        <div className="position-absolute top-0 start-0 w-100 h-100 d-lg-none">
          <div className="d-dark-mode-none position-absolute top-0 start-0 w-100 h-100" style={{ backgroundColor: '#f2f3f7' }} />
        </div>
        <div className="d-flex flex-column justify-content-center w-lg-50 position-relative z-2 mt-auto mt-lg-0">
          <div className="text-center text-lg-start pt-5 pb-3 py-lg-5 px-3 px-sm-4 px-lg-5 mx-auto" style={{ maxWidth: 630 }}>
            <h1 className="display-1">Error 404</h1>
            <p className="lead pb-2 mb-4 mb-lg-5">The page you are looking for was moved, removed or might never existed.</p>
            <Link className="btn btn-lg btn-primary" to="/">
              Go to homepage
            </Link>
          </div>
        </div>
        <div className="d-flex flex-column position-relative justify-content-end align-items-center w-lg-50 overflow-hidden">
          <div className="position-absolute top-0 start-0 w-100 h-100 d-none d-lg-block">
            <div className="d-dark-mode-none position-absolute top-0 start-0 w-100 h-100" style={{ backgroundColor: '#f2f3f7' }} />
            <div
              className="d-none d-dark-mode-block position-absolute top-0 start-0 w-100 h-100"
              style={{ backgroundColor: 'rgba(255,255,255, .04)' }}
            />
          </div>
          <div className="position-relative z-2" style={{ maxWidth: 948 }}>
            <Image src={layer} alt="Lady" id="lady" />
            <Image className="position-absolute top-0 start-0 w-100 h-100" src={layer02light} alt="Bubble" id="bubble" />
            <div className="position-absolute top-0 start-0 w-100 h-100" id="question">
              <Image className="d-dark-mode-none" src={layer03light} alt="Question mark" />
              <Image className="d-none d-dark-mode-block" src={layer03dark} alt="Question mark" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default page
