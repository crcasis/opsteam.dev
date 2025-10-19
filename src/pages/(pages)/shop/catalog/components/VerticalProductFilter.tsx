import marble from '@/assets/img/shop/pattern/marble.jpg'
import wood from '@/assets/img/shop/pattern/wood.jpg'
import Nouislider from 'nouislider-react'
import { useState } from 'react'
import { Accordion, AccordionBody, AccordionHeader, AccordionItem } from 'react-bootstrap'
import wNumb from 'wnumb'

const VerticalProductFilter = () => {
  const [selectedValue, setSelectedValue] = useState([10, 50])
  const handleSliderChange = (values: any) => {
    setSelectedValue(values)
  }

  const handleOptionChange = (event: any) => {
    if (selectedValue[1] >= Math.round(event.target.value)) {
      setSelectedValue([Math.round(event.target.value), selectedValue[1]])
    }
  }

  const handleInputChange = (event: any) => {
    if (selectedValue[0] <= Math.round(event.target.value)) {
      setSelectedValue([selectedValue[0], Math.round(event.target.value)])
    }
  }
  return (
    <>
      <div className="pe-lg-4">
        <h3 className="h5">Categories</h3>
        <Accordion defaultActiveKey={'1'} className="accordion-alt pb-2 mb-4" id="shopCategories">
          <AccordionItem eventKey="1" className="mb-0">
            <AccordionHeader as={'h4'}>
              <span className="fs-base">Living room</span>
            </AccordionHeader>
            <AccordionBody className="py-1 mb-1">
              <div className="form-check">
                <input className="form-check-input" type="checkbox" id="lr-all" />
                <label className="form-check-label d-flex align-items-center" htmlFor="lr-all">
                  <span className="text-nav fw-medium">View all</span>
                  <span className="fs-xs text-body-secondary ms-auto">697</span>
                </label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" defaultChecked id="lr-vases" />
                <label className="form-check-label d-flex align-items-center" htmlFor="lr-vases">
                  <span className="text-nav fw-medium">Vases</span>
                  <span className="fs-xs text-body-secondary ms-auto">234</span>
                </label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" id="lr-mirrors" />
                <label className="form-check-label d-flex align-items-center" htmlFor="lr-mirrors">
                  <span className="text-nav fw-medium">Mirrors</span>
                  <span className="fs-xs text-body-secondary ms-auto">182</span>
                </label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" id="lr-paintings" />
                <label className="form-check-label d-flex align-items-center" htmlFor="lr-paintings">
                  <span className="text-nav fw-medium">Paintings</span>
                  <span className="fs-xs text-body-secondary ms-auto">133</span>
                </label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" id="lr-furniture" />
                <label className="form-check-label d-flex align-items-center" htmlFor="lr-furniture">
                  <span className="text-nav fw-medium">Furniture</span>
                  <span className="fs-xs text-body-secondary ms-auto">24</span>
                </label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" defaultChecked id="lr-clocks" />
                <label className="form-check-label d-flex align-items-center" htmlFor="lr-clocks">
                  <span className="text-nav fw-medium">Clocks</span>
                  <span className="fs-xs text-body-secondary ms-auto">49</span>
                </label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" id="lr-frames" />
                <label className="form-check-label d-flex align-items-center" htmlFor="lr-frames">
                  <span className="text-nav fw-medium">Photo frames</span>
                  <span className="fs-xs text-body-secondary ms-auto">75</span>
                </label>
              </div>
            </AccordionBody>
          </AccordionItem>
          <AccordionItem eventKey="2" className="mb-0">
            <AccordionHeader as={'h4'}>
              <span className="fs-base">Kitchen</span>
            </AccordionHeader>
            <AccordionBody className="py-1 mb-1">
              <div className="form-check">
                <input className="form-check-input" type="checkbox" id="kitchen-all" />
                <label className="form-check-label d-flex align-items-center" htmlFor="kitchen-all">
                  <span className="text-nav fw-medium">View all</span>
                  <span className="fs-xs text-body-secondary ms-auto">813</span>
                </label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" id="kitchen-cutlery" />
                <label className="form-check-label d-flex align-items-center" htmlFor="kitchen-cutlery">
                  <span className="text-nav fw-medium">Cutlery</span>
                  <span className="fs-xs text-body-secondary ms-auto">387</span>
                </label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" id="kitchen-storage" />
                <label className="form-check-label d-flex align-items-center" htmlFor="kitchen-storage">
                  <span className="text-nav fw-medium">Storage</span>
                  <span className="fs-xs text-body-secondary ms-auto">124</span>
                </label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" id="kitchen-bins" />
                <label className="form-check-label d-flex align-items-center" htmlFor="kitchen-bins">
                  <span className="text-nav fw-medium">Waste bins</span>
                  <span className="fs-xs text-body-secondary ms-auto">59</span>
                </label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" id="kitchen-holders" />
                <label className="form-check-label d-flex align-items-center" htmlFor="kitchen-holders">
                  <span className="text-nav fw-medium">Holders</span>
                  <span className="fs-xs text-body-secondary ms-auto">227</span>
                </label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" id="kitchen-sinks" />
                <label className="form-check-label d-flex align-items-center" htmlFor="kitchen-sinks">
                  <span className="text-nav fw-medium">Sinks</span>
                  <span className="fs-xs text-body-secondary ms-auto">16</span>
                </label>
              </div>
            </AccordionBody>
          </AccordionItem>
          <AccordionItem eventKey="3" className="mb-0">
            <AccordionHeader as={'h4'}>
              <span className="fs-base">Bathroom</span>
            </AccordionHeader>
            <AccordionBody className="py-1 mb-1">
              <div className="form-check">
                <input className="form-check-input" type="checkbox" id="bathroom-all" />
                <label className="form-check-label d-flex align-items-center" htmlFor="bathroom-all">
                  <span className="text-nav fw-medium">View all</span>
                  <span className="fs-xs text-body-secondary ms-auto">1416</span>
                </label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" id="bathroom-showers" />
                <label className="form-check-label d-flex align-items-center" htmlFor="bathroom-showers">
                  <span className="text-nav fw-medium">Showers</span>
                  <span className="fs-xs text-body-secondary ms-auto">113</span>
                </label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" id="bathroom-basins" />
                <label className="form-check-label d-flex align-items-center" htmlFor="bathroom-basins">
                  <span className="text-nav fw-medium">Basins</span>
                  <span className="fs-xs text-body-secondary ms-auto">98</span>
                </label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" id="bathroom-dispensers" />
                <label className="form-check-label d-flex align-items-center" htmlFor="bathroom-dispensers">
                  <span className="text-nav fw-medium">Dispensers</span>
                  <span className="fs-xs text-body-secondary ms-auto">205</span>
                </label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" id="bathroom-cleaning" />
                <label className="form-check-label d-flex align-items-center" htmlFor="bathroom-cleaning">
                  <span className="text-nav fw-medium">Cleaning</span>
                  <span className="fs-xs text-body-secondary ms-auto">747</span>
                </label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" id="bathroom-holders" />
                <label className="form-check-label d-flex align-items-center" htmlFor="bathroom-holders">
                  <span className="text-nav fw-medium">Holders</span>
                  <span className="fs-xs text-body-secondary ms-auto">253</span>
                </label>
              </div>
            </AccordionBody>
          </AccordionItem>
          <AccordionItem eventKey="4" className="mb-0">
            <AccordionHeader as={'h4'}>
              <span className="fs-base">Bedroom</span>
            </AccordionHeader>
            <AccordionBody className="py-1 mb-1">
              <div className="form-check">
                <input className="form-check-input" type="checkbox" id="bedroom-all" />
                <label className="form-check-label d-flex align-items-center" htmlFor="bedroom-all">
                  <span className="text-nav fw-medium">View all</span>
                  <span className="fs-xs text-body-secondary ms-auto">1219</span>
                </label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" id="bedroom-furniture" />
                <label className="form-check-label d-flex align-items-center" htmlFor="bedroom-furniture">
                  <span className="text-nav fw-medium">Furniture</span>
                  <span className="fs-xs text-body-secondary ms-auto">43</span>
                </label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" id="bedroom-linen" />
                <label className="form-check-label d-flex align-items-center" htmlFor="bedroom-linen">
                  <span className="text-nav fw-medium">Bed linen</span>
                  <span className="fs-xs text-body-secondary ms-auto">528</span>
                </label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" id="bedroom-lighting" />
                <label className="form-check-label d-flex align-items-center" htmlFor="bedroom-lighting">
                  <span className="text-nav fw-medium">Lighting</span>
                  <span className="fs-xs text-body-secondary ms-auto">391</span>
                </label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" id="bedroom-storage" />
                <label className="form-check-label d-flex align-items-center" htmlFor="bedroom-storage">
                  <span className="text-nav fw-medium">Storage</span>
                  <span className="fs-xs text-body-secondary ms-auto">75</span>
                </label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" id="bedroom-mirrors" />
                <label className="form-check-label d-flex align-items-center" htmlFor="bedroom-mirrors">
                  <span className="text-nav fw-medium">Mirrors</span>
                  <span className="fs-xs text-body-secondary ms-auto">182</span>
                </label>
              </div>
            </AccordionBody>
          </AccordionItem>
        </Accordion>

        <h3 className="h5">Price</h3>
        <div
          className="range-slider pb-3 mb-4"
          data-start-min={10}
          data-start-max={50}
          data-min={0}
          data-max={80}
          data-step={1}
          data-tooltip-prefix="$"
        >
          <Nouislider
            className="range-slider-ui"
            style={{ height: '3px' }}
            step={1}
            tooltips={[wNumb({ decimals: 0, prefix: '$' }), wNumb({ decimals: 0, prefix: '$' })]}
            range={{ min: 0, max: 80 }}
            start={selectedValue}
            connect={true}
            onSlide={handleSliderChange}
          />
          <div className="d-flex">
            <div className="d-flex align-items-center w-50">
              <label className="form-label fs-xs me-2 mb-0" htmlFor="price-min">
                From
              </label>
              <input
                value={selectedValue[0]}
                onChange={handleOptionChange}
                className="form-control form-control-sm range-slider-value-min"
                type="number"
                style={{ maxWidth: '6rem' }}
                id="price-min"
              />
            </div>
            <div className="d-flex align-items-center justify-content-end w-50">
              <label className="form-label fs-xs me-2 mb-0" htmlFor="price-max">
                To
              </label>
              <input
                value={selectedValue[1]}
                onChange={handleInputChange}
                className="form-control form-control-sm range-slider-value-max"
                type="number"
                style={{ maxWidth: '6rem' }}
                id="price-max"
              />
            </div>
          </div>
        </div>

        <h3 className="h5">Color</h3>
        <div className="d-flex pb-2 mb-4">
          <div className="me-2 mb-2">
            <input className="btn-check" type="checkbox" defaultValue="Black" defaultChecked id="color1" />
            <label className="btn btn-icon btn-sm btn-outline-secondary rounded-circle" htmlFor="color1">
              <span className="d-block rounded-circle" style={{ width: '1.5rem', height: '1.5rem', backgroundColor: '#1d211f' }} />
            </label>
          </div>
          <div className="me-2 mb-2">
            <input className="btn-check" type="checkbox" defaultValue="Soft beige" id="color2" />
            <label className="btn btn-icon btn-sm btn-outline-secondary rounded-circle" htmlFor="color2">
              <span className="d-block rounded-circle" style={{ width: '1.5rem', height: '1.5rem', backgroundColor: '#d9c9a1' }} />
            </label>
          </div>
          <div className="me-2 mb-2">
            <input className="btn-check" type="checkbox" defaultValue="Bluish sky" id="color3" />
            <label className="btn btn-icon btn-sm btn-outline-secondary rounded-circle" htmlFor="color3">
              <span className="d-block rounded-circle" style={{ width: '1.5rem', height: '1.5rem', backgroundColor: '#a1b7d9' }} />
            </label>
          </div>
          <div className="me-2 mb-2">
            <input className="btn-check" type="checkbox" defaultValue="Green grass" id="color4" />
            <label className="btn btn-icon btn-sm btn-outline-secondary rounded-circle" htmlFor="color4">
              <span className="d-block rounded-circle" style={{ width: '1.5rem', height: '1.5rem', backgroundColor: '#74947d' }} />
            </label>
          </div>
          <div className="me-2 mb-2">
            <input className="btn-check" type="checkbox" defaultValue="Woody brown" id="color5" />
            <label className="btn btn-icon btn-sm btn-outline-secondary rounded-circle" htmlFor="color5">
              <span
                className="d-block bg-size-cover bg-position-center rounded-circle"
                style={{
                  width: '1.5rem',
                  height: '1.5rem',
                  backgroundColor: '#af8352',
                  backgroundImage: `url(${wood})`,
                }}
              />
            </label>
          </div>
          <div className="mb-2">
            <input className="btn-check" type="checkbox" defaultValue="Gray marble" id="color6" />
            <label className="btn btn-icon btn-sm btn-outline-secondary rounded-circle" htmlFor="color6">
              <span
                className="d-block bg-size-cover bg-position-center rounded-circle"
                style={{
                  width: '1.5rem',
                  height: '1.5rem',
                  backgroundColor: '#c0c0c0',
                  backgroundImage: `url(${marble})`,
                }}
              />
            </label>
          </div>
        </div>

        <h3 className="h5">Brand</h3>
        <div className="pb-2">
          <div className="form-check">
            <input className="form-check-input" type="checkbox" defaultValue="Pazolinni" id="brand1" />
            <label className="form-check-label d-flex align-items-center" htmlFor="brand1">
              <span className="text-nav fw-medium">Pazolinni</span>
              <span className="fs-xs text-body-secondary ms-auto">48</span>
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" defaultValue="Tither Room" defaultChecked id="brand2" />
            <label className="form-check-label d-flex align-items-center" htmlFor="brand2">
              <span className="text-nav fw-medium">Tither Room</span>
              <span className="fs-xs text-body-secondary ms-auto">32</span>
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" defaultValue="Moissy Decor" id="brand3" />
            <label className="form-check-label d-flex align-items-center" htmlFor="brand3">
              <span className="text-nav fw-medium">Moissy Decor</span>
              <span className="fs-xs text-body-secondary ms-auto">25</span>
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" defaultValue="Victorio Via" id="brand4" />
            <label className="form-check-label d-flex align-items-center" htmlFor="brand4">
              <span className="text-nav fw-medium">Victorio Via</span>
              <span className="fs-xs text-body-secondary ms-auto">56</span>
            </label>
          </div>
        </div>
      </div>
    </>
  )
}

export default VerticalProductFilter
