import avatar07 from '@/assets/img/avatar/07.jpg'
import avatar08 from '@/assets/img/avatar/08.jpg'
import avatar10 from '@/assets/img/avatar/10.jpg'
import avatar11 from '@/assets/img/avatar/11.jpg'
import { useState } from 'react'
import { Card, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Comment = () => {
  const [open, setOpen] = useState(false)
  return (
    <>
      <section className="container pt-xl-2 pb-5 mb-md-2 mb-lg-4 mb-xl-5" id="comments">
        <div className="border-top border-bottom">
          <div className={`collapse ${open ? 'show' : ''}`} id="commentsCollapse" style={{ maxWidth: '54rem' }}>
            <div className="border-bottom py-4 mt-2 mb-4">
              <div className="d-flex align-items-center pb-1 mb-3">
                <Image className="rounded-circle" src={avatar08} width={48} alt="Comment author" />
                <div className="ps-3">
                  <h6 className="mb-0">Albert Flores</h6>
                  <span className="fs-sm text-body-secondary">5 hours ago</span>
                </div>
              </div>
              <p className="pb-2 mb-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tellus lectus, tempus eu urna eu, imperdiet dignissim augue. Aliquam
                fermentum est a ligula bibendum, ac gravida ipsum dictum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per
                inceptos himenaeos. Curabitur suscipit quam ut velit condimentum, nec mollis risus semper. Curabitur quis mauris eget ligula tincidunt
                venenatis. Sed congue pulvinar hendrerit.
              </p>
              <button className="nav-link fs-sm fw-semibold px-0 py-2" type="button">
                Reply
                <i className="ai-redo fs-xl ms-2" />
              </button>
            </div>
            <div className="border-bottom pt-2 pb-4">
              <div className="d-flex align-items-center pb-1 mb-3">
                <Image className="rounded-circle" src={avatar11} width={48} alt="Comment author" />
                <div className="ps-3">
                  <h6 className="mb-0">Jenny Wilson</h6>
                  <span className="fs-sm text-body-secondary">2 days ago at 9:20</span>
                </div>
              </div>
              <p className="pb-2 mb-0">
                Pellentesque urna pharetra, quis maecenas. Sit dolor amet nulla aenean eu, ac. Nisl mi tempus, iaculis viverra vestibulum scelerisque
                imperdiet montes mauris massa elit pretium elementum eget tortor quis
              </p>
              <button className="nav-link fs-sm fw-semibold px-0 py-2" type="button">
                Reply
                <i className="ai-redo fs-xl ms-2" />
              </button>
              <Card className="card-body border-0 bg-secondary mt-4">
                <div className="d-flex align-items-center pb-1 mb-3">
                  <Image className="rounded-circle" src={avatar10} width={48} alt="Comment author" />
                  <div className="ps-3">
                    <h6 className="mb-0">Ralph Edwards</h6>
                    <span className="fs-sm text-body-secondary">2 days ago at 11:45</span>
                  </div>
                </div>
                <p className="mb-0">
                  <Link className="fw-bold text-decoration-none" to="">
                    @Jenny Wilson
                  </Link>
                  Massa morbi duis et ornare urna dictum vestibulum pulvinar nunc facilisis ornare id at at ut arcu integer tristique placerat non
                  turpis nibh turpis ullamcorper est porttitor.
                </p>
              </Card>
            </div>
            <div className="pt-4 mt-2 mb-2">
              <div className="d-flex align-items-center pb-1 mb-3">
                <Image className="rounded-circle" src={avatar07} width={48} alt="Comment author" />
                <div className="ps-3">
                  <h6 className="mb-0">Esther Howard</h6>
                  <span className="fs-sm text-body-secondary">May 19, 2022</span>
                </div>
              </div>
              <p className="pb-2 mb-0">
                Donec et sollicitudin tellus. Duis maximus, dui eget egestas mattis, purus ex tempor nulla, quis tempor sapien neque at nisl. Aliquam
                eu nisi ut nisl ultrices posuere. Praesent dignissim efficitur nisi, a hendrerit ipsum elementum sit amet. Vivamus non ante nisl. Nunc
                faucibus velit at eros mollis semper.
              </p>
              <button className="nav-link fs-sm fw-semibold px-0 py-2" type="button">
                Reply
                <i className="ai-redo fs-xl ms-2" />
              </button>
            </div>
          </div>
          <div className="nav">
            <button
              className="btn-more nav-link w-100 justify-content-center p-3"
              type="button"
              onClick={() => setOpen(!open)}
              aria-expanded={open}
              aria-controls="commentsCollapse"
            >
              {open ? 'Hide all comments' : 'Show all comments'}
              <span className="fw-normal opacity-70 ms-1">(4)</span>
            </button>
          </div>
        </div>
      </section>
    </>
  )
}

export default Comment
