import flagfrance from '@/assets/img/account/flags/france.png'
import flagindia from '@/assets/img/account/flags/india.png'
import flagsouth from '@/assets/img/account/flags/south-africa.png'
import flagsweden from '@/assets/img/account/flags/sweden.png'
import flagusa from '@/assets/img/account/flags/usa.png'
import type { ApexOptions } from 'apexcharts'
import { lazy } from 'react'
import { Col, Image, ProgressBar, Row } from 'react-bootstrap'

const Chart = lazy(() => import('react-apexcharts'))

type StatType = {
  title: string
  value: string | number
  subtitle: string
}

const statsData: StatType[] = [
  { title: 'Earnings (before taxes)', value: '$842.00', subtitle: 'Sales 8/1/2023 - 8/15/2023' },
  { title: 'Your balance', value: '$735.00', subtitle: 'To be paid on 8/15/2023' },
  { title: 'Lifetime earnings', value: '$9,156.74', subtitle: 'Based on list price' },
]

const Stats = () => {
  const chartOptions: ApexOptions = {
    chart: {
      height: 151,
      width: 503,
      type: 'line',
      zoom: { enabled: false },
    },
    dataLabels: { enabled: false },
    stroke: { width: 3, curve: 'smooth' },
    colors: ['#448c74'],
    xaxis: {
      categories: ['22 Jul', '', '24 Jul', '', '26 Jul', '', '28 Jul', '', '30 Jul', '', '01 Aug', '', '03 Aug', '', '05 Aug'],
      labels: { style: { colors: '#858c97' } },
      axisBorder: { color: '#e1e5eb' },
      axisTicks: { color: '#e1e5eb' },
    },
    yaxis: {
      min: 0,
      labels: { style: { colors: '#858c97' } },
    },
    grid: {
      borderColor: 'rgba(133,140,151,.18)',
      row: { colors: ['transparent'], opacity: 0.1 },
    },
    tooltip: { theme: 'light' },
  }

  const chartSeries = [
    {
      name: 'Sales, USD',
      data: [0, 100, 200, 175, 100, 50, 75, 0, 0, 50, 50, 50, 0, 100, 0],
      backgroundColor: 'rgba(68,140,116,.1)',
      borderWidth: '2',
      borderColor: 'rgba(68,140,116,.6)',
      pointBackgroundColor: '#448c74',
      pointBorderWidth: '3',
      pointBorderColor: '#448c74',
      pointHoverBorderColor: '#448c74',
      pointHoverBorderWidth: '6',
      responsive: true,
      scales: {
        y: {
          beginAtZero: true,
          border: {
            color: 'rgba(133,140,151,.18)',
          },
          grid: {
            color: 'rgba(133,140,151,.18)',
          },
        },
        x: {
          border: {
            color: 'rgba(133,140,151,.18)',
          },
          grid: {
            color: 'rgba(133,140,151,.18)',
          },
        },
      },
    },
  ]

  return (
    <>
      <Row className="g-3 g-xl-4">
        {statsData.map((item, idx) => (
          <Col md={4} sm={6} key={idx}>
            <div className="h-100 bg-secondary rounded-3 text-center p-4">
              <h2 className="h6 pb-2 mb-1">{item.title}</h2>
              <div className="h2 text-primary mb-2">{item.value}</div>
              <p className="fs-sm text-body-secondary mb-0">{item.subtitle}</p>
            </div>
          </Col>
        ))}
      </Row>
      <Row className="g-4 py-4">
        <Col md={8}>
          <div className="h-100 border rounded-3 p-4">
            <h2 className="h6 text-center text-sm-start mb-4">Sales value, USD</h2>
            <Chart options={chartOptions} series={chartSeries} type="line" height={251} />
          </div>
        </Col>
        <Col md={4}>
          <div className="h-100 border rounded-3 p-4">
            <h2 className="h6 text-center text-sm-start mb-4">Your top countries</h2>
            <div className="d-flex justify-content-between text-body-secondary fs-sm">
              <span>Country</span>
              <span>Value</span>
            </div>
            {[
              { flag: flagusa, name: 'United States', value: '$352', percent: 48 },
              { flag: flagsweden, name: 'Sweden', value: '$218', percent: 30 },
              { flag: flagindia, name: 'India', value: '$97', percent: 14 },
              { flag: flagfrance, name: 'France', value: '$40', percent: 6 },
              { flag: flagsouth, name: 'South Africa', value: '$16', percent: 3 },
            ].map((country, idx) => (
              <div className="mt-3" key={idx}>
                <div className="d-flex align-items-center fs-sm text-dark pb-1 mb-2">
                  <Image src={country.flag} width={16} alt={country.name} />
                  <span className="ms-2">{country.name}</span>
                  <span className="ms-auto">{country.value}</span>
                </div>
                <ProgressBar now={country.percent} style={{ height: 3 }} />
              </div>
            ))}
          </div>
        </Col>
      </Row>
    </>
  )
}

export default Stats
