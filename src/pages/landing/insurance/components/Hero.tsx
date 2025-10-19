import award from '@/assets/img/landing/insurance/hero/award.png'
import bghero from '@/assets/img/landing/insurance/hero/bg-image.jpg'
import clientdark from '@/assets/img/landing/insurance/hero/clients-dark.png'
import clientlight from '@/assets/img/landing/insurance/hero/clients-light.png'
import google from '@/assets/img/landing/insurance/hero/google-reviews.png'
import Jarallax from '@/components/Jarallax'
import { Container, Image } from 'react-bootstrap'

const Hero = () => {
  return (
    <>
      <section className="position-relative pt-md-2 pt-lg-4 pt-xl-5 pb-5 pb-lg-0">
        <div
          className="position-absolute top-0 start-0 w-100 bg-secondary d-none d-lg-block"
          style={{
            height: 792,
            margin: '-1px 0 0 -1px',
            backgroundSize: '75px 75px',
            backgroundImage:
              'linear-gradient(to right, var(--ar-gray-200) 1px, transparent 1px), linear-gradient(to bottom, var(--ar-gray-200) 1px, transparent 1px)',
          }}
        />
        <div
          className="position-absolute top-0 start-0 w-100 h-100 bg-secondary d-lg-none"
          style={{
            margin: '-1px 0 0 -1px',
            backgroundSize: '75px 75px',
            backgroundImage:
              'linear-gradient(to right, var(--ar-gray-200) 1px, transparent 1px), linear-gradient(to bottom, var(--ar-gray-200) 1px, transparent 1px)',
          }}
        />
        <Container className="position-relative z-2 pt-5 pb-2 pb-sm-3 pb-lg-0">
          <div className="text-center py-5 mt-3 mt-sm-4 mb-md-3 mb-lg-4 mb-xl-5 mx-auto" style={{ maxWidth: 760 }}>
            <h1 className="display-3 pb-1 pb-sm-2 pb-md-3">Start Preparing Today for a Serene Tomorrow</h1>
            <p className="fs-lg mb-0">Easily secure affordable coverage for your family's future.</p>
          </div>
          <div className="position-relative d-none d-md-block">
            <div className="position-absolute" style={{ right: '78.24%' }}>
              <Image className="position-relative z-2" src={google} width={282} alt="Google reviews" />
              <div className="position-absolute top-0 start-0 w-100 h-100 bg-light rounded-3 shadow-sm d-dark-mode-none" />
              <div
                className="position-absolute top-0 start-0 w-100 h-100 rounded-3 d-none d-dark-mode-block"
                style={{ backgroundColor: '#202327' }}
              />
            </div>
          </div>
          <Jarallax
            className="jarallax rounded overflow-hidden z-2"
            data-jarallax
            data-speed="0.65"
            style={{ WebkitClipPath: 'url(#shape)', clipPath: 'url(#shape)' }}
          >
            <div className="d-none d-md-block ratio ratio-21x9" />
            <div className="d-md-none ratio ratio-16x9" />
            <svg className="d-none d-md-block" width={0} height={0} viewBox="0 0 1296 506">
              <defs>
                <clipPath id="shape" clipPathUnits="objectBoundingBox" transform="scale(0.0007716049383, 0.001976284585)">
                  <path d="M18 110H288C297.941 110 306 101.941 306 92V18C306 8.05887 314.059 0 324 0H1278C1287.94 0 1296 8.05888 1296 18V378C1296 387.941 1287.94 396 1278 396H1008C998.059 396 990 404.059 990 414V488C990 497.941 981.941 506 972 506H18C8.05887 506 0 497.941 0 488V128C0 118.059 8.05887 110 18 110Z" />
                </clipPath>
              </defs>
            </svg>
            <Image className="position-absolute top-0 end-0 z-2 mt-4 me-4" src={award} width={132} alt="Award" />
            <span className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-25" />
            <div className="jarallax-img" style={{ backgroundImage: `url(${bghero})` }} />
          </Jarallax>
          <div className="position-absolute bottom-0 d-none d-md-block" style={{ left: '77.5%' }}>
            <Image className="position-relative z-2 d-dark-mode-none" src={clientlight} width={282} alt="Google reviews" />
            <Image className="position-relative z-2 d-none d-dark-mode-block" src={clientdark} width={282} alt="Google reviews" />
            <div className="position-absolute top-0 start-0 w-100 h-100 bg-light rounded-3 shadow-sm d-dark-mode-none" />
            <div className="position-absolute top-0 start-0 w-100 h-100 rounded-3 d-none d-dark-mode-block" style={{ backgroundColor: '#202327' }} />
          </div>
          <div className="d-flex flex-column flex-sm-row gap-3 pt-3 d-md-none">
            <div className="position-relative d-flex justify-content-center w-100">
              <Image className="position-relative z-2" src={google} width={282} alt="Google reviews" />
              <div className="position-absolute top-0 start-0 w-100 h-100 bg-light rounded-3 shadow-sm d-dark-mode-none" />
              <div
                className="position-absolute top-0 start-0 w-100 h-100 rounded-3 d-none d-dark-mode-block"
                style={{ backgroundColor: '#202327' }}
              />
            </div>
            <div className="position-relative d-flex justify-content-center w-100">
              <Image className="position-relative z-2 d-dark-mode-none" src={clientlight} width={282} alt="Google reviews" />
              <Image className="position-relative z-2 d-none d-dark-mode-block" src={clientdark} width={282} alt="Google reviews" />
              <div className="position-absolute top-0 start-0 w-100 h-100 bg-light rounded-3 shadow-sm d-dark-mode-none" />
              <div
                className="position-absolute top-0 start-0 w-100 h-100 rounded-3 d-none d-dark-mode-block"
                style={{ backgroundColor: '#202327' }}
              />
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}

export default Hero
