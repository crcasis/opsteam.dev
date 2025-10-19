import { Link } from 'react-router-dom'

const About = () => {
  return (
    <>
      <section className="container pt-5 mt-lg-3 mt-xl-4 mt-xxl-5">
        <div className="pt-2 pt-sm-3 mt-md-3" style={{ maxWidth: '60rem' }}>
          <h2 className="pb-3 mb-2 mb-sm-3 mb-lg-4">
            I'm a 32 year old blogger, fitness instructor and content creator. I was recognized as the
            <span className="text-primary">top 100 sport influencers</span> under the age of 30. Over 25K people have already changed their life for
            the better with me.
          </h2>
          <p className="fs-lg">Subscribe to get free webinars:</p>
          <div className="d-flex">
            <Link className="btn btn-outline-secondary btn-icon btn-sm btn-instagram me-3" to="" aria-label="Instagram">
              <i className="ai-instagram" />
            </Link>
            <Link className="btn btn-outline-secondary btn-icon btn-sm btn-facebook me-3" to="" aria-label="Facebook">
              <i className="ai-facebook" />
            </Link>
            <Link className="btn btn-outline-secondary btn-icon btn-sm btn-youtube" to="" aria-label="YouTube">
              <i className="ai-youtube" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default About
