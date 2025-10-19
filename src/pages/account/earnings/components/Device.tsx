import { ArcElement, Chart as ChartJS, Legend, Tooltip } from 'chart.js'
import { Col, Row } from 'react-bootstrap'
import { Pie } from 'react-chartjs-2'

ChartJS.register(ArcElement, Tooltip, Legend)

const Device = () => {
  const data = {
    labels: ['Mobile - 64%', 'Desktop - 19%', 'Tablet - 10%', 'Other - 7%'],
    datasets: [
      {
        label: 'Device share, %',
        data: [64, 19, 10, 7],
        borderWidth: 0,
        backgroundColor: ['#448c74', 'rgba(68,140,116,.64)', 'rgba(68,140,116,.4)', 'rgba(68,140,116,.2)'],
      },
    ],
  }

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'right' as const,
        labels: {
          usePointStyle: true,
          boxWidth: 12,
          boxHeight: 12,
          useBorderRadius: true,
          borderRadius: 8,
          padding: 20,
          font: {
            size: 15,
          },
        },
      },
    },
  }

  return (
    <>
      <Row className="g-4">
        <Col md={8} lg={12} xl={8} className="text-center text-sm-start">
          <div className="border rounded-3 p-4">
            <h2 className="h6 mb-4">Purchases from devices, %</h2>
            <div className="px-sm-4 my-n4 my-sm-n5">
              <Pie data={data} options={options} style={{ width: '370px !important' }} />
            </div>
          </div>
        </Col>
      </Row>
    </>
  )
}

export default Device
