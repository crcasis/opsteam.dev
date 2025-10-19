import { Offcanvas, OffcanvasBody, OffcanvasHeader, OffcanvasTitle } from 'react-bootstrap'
import { Link } from 'react-router-dom'

type Props = {
  isOpen: boolean
  toggle: () => void
}

const CardEmpty = ({ isOpen, toggle }: Props) => {
  return (
    <>
      <Offcanvas show={isOpen} onHide={toggle} placement="end" className="py-2 p-sm-4 p-md-5" id="cartOffcanvas" style={{ width: 680 }}>
        <div className="px-4 pt-3">
          <div className="d-flex justify-content-between align-items-center border-bottom pb-3 pb-sm-4">
            <OffcanvasTitle as={'h2'} className="d-flex align-items-center mb-1">
              <svg
                className="text-body-secondary fs-1 me-3"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
              >
                <path d="m20 17.25h-11.57l-.19-1.58 12.11-.95c.82-.07 1.49-.7 1.6-1.52l.14-1.1c.05-.41-.24-.79-.65-.84-.42-.05-.79.24-.84.65l-.14 1.1c-.01.12-.11.21-.23.21l-12.17.96-.87-7.42h4.8c.41 0 .75-.34.75-.75s-.34-.75-.75-.75h-4.98l-.11-.96c-.13-1.13-.96-2.07-2.06-2.35l-2.66-.67c-.4-.1-.81.14-.91.55-.1.4.14.81.55.91l2.66.67c.5.12.88.55.94 1.07l1.53 13c-.99.41-1.7 1.4-1.7 2.54 0 1.52 1.23 2.75 2.75 2.75s2.75-1.23 2.75-2.75c0-.45-.12-.87-.31-1.25h7.13c-.19.38-.31.8-.31 1.25 0 1.52 1.23 2.75 2.75 2.75s2.75-1.23 2.75-2.75-1.23-2.75-2.75-2.75zm-10.75 2.75c0 .69-.56 1.25-1.25 1.25s-1.25-.56-1.25-1.25.56-1.25 1.25-1.25 1.25.56 1.25 1.25zm10.75 1.25c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25 1.25.56 1.25 1.25-.56 1.25-1.25 1.25zm-4.03-13.28 1.97-1.97-1.97-1.97c-.29-.29-.29-.77 0-1.06s.77-.29 1.06 0l1.97 1.97 1.97-1.97c.29-.29.77-.29 1.06 0s.29.77 0 1.06l-1.97 1.97 1.97 1.97c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22s-.38-.07-.53-.22l-1.97-1.97-1.97 1.97c-.15.15-.34.22-.53.22s-.38-.07-.53-.22c-.29-.29-.29-.77 0-1.06z" />
              </svg>
              Your cart is empty
            </OffcanvasTitle>
            <OffcanvasHeader closeButton />
          </div>
        </div>
        <OffcanvasBody>
          <p className="mb-4">
            Is your shopping cart feeling a little lonely? Don't let it sit there empty and forgotten. It's time to fill it up with your favorite
            macarons!
          </p>
          <Link className="btn btn-dark rounded-pill" to="" data-bs-dismiss="offcanvas">
            Start shopping
          </Link>
        </OffcanvasBody>
      </Offcanvas>
    </>
  )
}

export default CardEmpty
