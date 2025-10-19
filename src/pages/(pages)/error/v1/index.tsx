import animdark from '@/assets/json/animation-404-dark.json'
import anim from '@/assets/json/animation-404-light.json'
import { Player, Player as PlayerType } from '@lordicon/react'
import { useEffect, useRef } from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const page = () => {
  const lightRef = useRef<PlayerType | null>(null)
  const darkRef = useRef<PlayerType | null>(null)

  useEffect(() => {
    lightRef.current?.playFromBeginning()
    darkRef.current?.playFromBeginning()
  }, [])
  return (
    <>
      <Container className="d-flex flex-column justify-content-center min-vh-100 py-5">
        <div className="d-dark-mode-none mt-n5">
          <Player size={1162} ref={lightRef} icon={anim} colors="transparent" onComplete={() => lightRef.current?.playFromBeginning()} />
        </div>
        <div className="d-none d-dark-mode-block mt-n5">
          <Player size={1296} ref={darkRef} icon={animdark} colors="transparent" onComplete={() => darkRef.current?.playFromBeginning()} />
        </div>
        <div className="text-center pt-4 mt-lg-2">
          <h1 className="display-5">Page not found</h1>
          <p className="fs-lg pb-2 pb-md-0 mb-4 mb-md-5">The page you are looking for was moved, removed or might never existed.</p>
          <Link className="btn btn-lg btn-primary" to="/">
            Go to homepage
          </Link>
        </div>
      </Container>
    </>
  )
}

export default page
