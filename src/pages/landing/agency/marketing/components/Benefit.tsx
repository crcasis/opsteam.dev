import { Col, Row } from 'react-bootstrap'

type BenefitItem = {
  icon: string
  title: string
  description: string
  svgPath: string
}

const benefits: BenefitItem[] = [
  {
    icon: 'ai-search-settings text-primary fs-1',
    title: 'Online support',
    description: 'Pharetra morbi quis is massa maecenas vulputate elit non nullage a duis tortor mi massa pharetra.',
    svgPath:
      'M56.0059 60.5579C44.1549 78.9787 18.0053 58.9081 6.41191 46.5701C-2.92817 35.5074 -2.81987 12.1818 11.7792 3.74605C30.0281 -6.79858 48.0623 7.40439 59.8703 15.7971C71.6784 24.1897 70.8197 37.5319 56.0059 60.5579Z',
  },
  {
    icon: 'ai-bulb-alt text-primary fs-1',
    title: '100% guarantee',
    description: 'Sapien ultrices egestas at faucibus eu diam velit diam id amet nibh quam rutrum diam diam natoque scelerisque.',
    svgPath:
      'M65.0556 29.2672C75.4219 46.3175 48.5577 59.7388 33.8299 64.3181C21.0447 67.5599 1.98006 58.174 0.888673 42.8524C-0.475555 23.7004 18.3473 14.5883 29.9289 8.26059C41.5104 1.93285 52.0978 7.9543 65.0556 29.2672Z',
  },
  {
    icon: 'ai-circle-check-filled text-primary fs-2',
    title: 'Work on time',
    description: 'Morbi et massa fames ac scelerisque sit commodo dignissim faucibus vel quisque proin lectus orbi et massa fames.',
    svgPath:
      'M6.61057 18.2783C10.8205 -1.22686 39.549 7.51899 53.3869 14.3301C64.8949 20.7749 72.2705 40.7038 62.5199 52.5725C50.3318 67.4085 30.4034 61.0689 17.6454 57.6914C4.88745 54.314 1.3482 42.6597 6.61057 18.2783Z',
  },
  {
    icon: 'ai-rocket text-primary fs-2',
    title: 'Free consultation',
    description: 'Consectetur adipiscing elit proin volutpat mollis egestas nam luctus facilisis ultrices pellentesque volutpat ligula est.',
    svgPath:
      'M9.34481 53.5078C-7.24653 42.4218 11.4487 18.9206 22.8702 8.55583C33.0946 0.223307 54.3393 0.690942 61.7922 14.1221C71.1082 30.9111 57.886 47.1131 50.0546 57.7358C42.2233 68.3586 30.084 67.3653 9.34481 53.5078Z',
  },
]

const Benefit = () => {
  return (
    <section className="container py-5 my-lg-3 my-xl-4 my-xxl-5">
      <h2 className="h1 text-center pb-3 pt-2 pt-sm-3 pt-md-4 pt-lg-5 mt-md-3 mt-lg-0 mb-3 mb-lg-4">Our benefits</h2>
      <Row className="row-cols-1 row-cols-sm-2 row-cols-lg-4 gy-4 gy-sm-5 gx-4 pb-3 pb-md-4 pb-lg-5 mb-md-3 mb-lg-0">
        {benefits.map((item, idx) => (
          <Col className="text-center" key={idx}>
            <div className="ratio ratio-1x1 position-relative mx-auto mb-3 mb-sm-4" style={{ width: 68 }}>
              <i className={`${item.icon} d-flex align-items-center justify-content-center position-absolute start-0`} />
              <svg
                className="position-absolute top-0 start-0 text-primary"
                width={68}
                height={68}
                viewBox="0 0 68 68"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d={item.svgPath} fillOpacity="0.1" />
              </svg>
            </div>
            <h3 className="h4 pb-2 mb-1">{item.title}</h3>
            <p className="fs-sm mb-0">{item.description}</p>
          </Col>
        ))}
      </Row>
    </section>
  )
}

export default Benefit
