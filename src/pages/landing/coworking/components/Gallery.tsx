import gallery01 from '@/assets/img/landing/coworking-space/gallery/01.jpg'
import gallery02 from '@/assets/img/landing/coworking-space/gallery/02.jpg'
import gallery03 from '@/assets/img/landing/coworking-space/gallery/03.jpg'
import gallery04 from '@/assets/img/landing/coworking-space/gallery/04.jpg'
import gallery05 from '@/assets/img/landing/coworking-space/gallery/05.jpg'
import galleryth01 from '@/assets/img/landing/coworking-space/gallery/th01.jpg'
import galleryth02 from '@/assets/img/landing/coworking-space/gallery/th02.jpg'
import galleryth03 from '@/assets/img/landing/coworking-space/gallery/th03.jpg'
import galleryth04 from '@/assets/img/landing/coworking-space/gallery/th04.jpg'
import galleryth05 from '@/assets/img/landing/coworking-space/gallery/th05.jpg'
import GlightBox from '@/components/GlightBox'
import { Image } from 'react-bootstrap'

type GalleryItem = {
  id: number
  full: string
  thumb: string
  alt: string
  col: string
  maxWidth?: number
}

const galleryItems: GalleryItem[] = [
  { id: 1, full: gallery01, thumb: galleryth01, alt: 'Open space', col: 'col-sm-5' },
  { id: 2, full: gallery02, thumb: galleryth02, alt: 'Kitchen', col: 'col-sm-7' },
  { id: 3, full: gallery03, thumb: galleryth03, alt: 'Lounge zone', col: 'col-sm-4' },
  { id: 4, full: gallery04, thumb: galleryth04, alt: 'Open space', col: 'col-sm-3', maxWidth: 458 },
  { id: 5, full: gallery05, thumb: galleryth05, alt: 'Cafe', col: 'col-sm-5' },
]

const Gallery = () => {
  return (
    <section className="container py-5 my-lg-3 my-xl-4 my-xxl-5">
      <div className="text-center pb-3 pt-sm-3 pt-md-4 mx-auto mt-xxl-1 mb-3 mb-lg-4" style={{ maxWidth: 525 }}>
        <h2 className="h1">Our space</h2>
        <p className="mb-0">Morbi et massa fames ac scelerisque sit commodo dignissim faucibus vel quisque proin lectus et massa.</p>
      </div>
      <ul className="nav nav-tabs flex-nowrap overflow-auto text-nowrap w-100 mx-auto pb-3 mb-3 mb-lg-4" role="tablist" style={{ maxWidth: 646 }}>
        {['All', 'Open space', 'Lounge zone', 'Kitchen', 'Parking'].map((tab, idx) => (
          <li className="nav-item mb-0" key={idx}>
            <a className={`nav-link ${idx === 0 ? 'active' : ''}`} href="#" role="tab">
              {tab}
            </a>
          </li>
        ))}
      </ul>
      <div className="gallery row g-4 g-sm-3 g-lg-4 pb-2 pb-sm-4 pb-xl-5 mb-lg-2 mb-xl-0 mb-xxl-2">
        {galleryItems.map(({ id, full, thumb, alt, col, maxWidth }) => (
          <div key={id} className={col} style={maxWidth ? { maxWidth } : {}}>
            <GlightBox className="glightbox d-block gallery-item card-hover zoom-effect" href={full}>
              <div className="d-flex justify-content-center align-items-center position-absolute top-0 start-0 w-100 h-100 rounded-5 overflow-hidden z-2 opacity-0">
                <i className="ai-zoom-in fs-2 text-white position-relative z-2" />
                <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-40" />
              </div>
              <div className="zoom-effect-wrapper rounded-5">
                <Image className="zoom-effect-img" src={thumb} alt={alt} />
              </div>
            </GlightBox>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Gallery
