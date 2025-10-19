import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import listPlugin from '@fullcalendar/list'
import FullCalendar from '@fullcalendar/react'
import timeGridPlugin from '@fullcalendar/timegrid'
import { Link } from 'react-router-dom'

const Schedule = () => {
  return (
    <>
      <section className="container pt-5 mt-lg-3 mt-xl-4 mt-xxl-5">
        <h2 className="h1 text-center pb-3 pt-sm-3 pt-lg-5 mb-3 mb-lg-4">Schedule</h2>
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, listPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          initialDate="2022-08-01"
          headerToolbar={{
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,listWeek',
          }}
          eventTimeFormat={{
            hour: '2-digit',
            minute: '2-digit',
            hour12: false,
          }}
          events={[
            {
              title: 'Stretching',
              start: '2022-08-01T16:30',
              end: '2022-08-01T18:00',
              classNames: [
                'event-custom-style',
                'bg-light',
                'text-nav',
                'border-0',
                'rounded-1',
                'p-2',
                'ps-3',
                'border-start',
                'border-5',
                'border-purple',
              ],
            },
            {
              title: 'For pregnant',
              start: '2022-08-02T07:30',
              end: '2022-08-02T09:40',
              classNames: [
                'event-custom-style',
                'bg-light',
                'text-nav',
                'border-0',
                'rounded-1',
                'p-2',
                'ps-3',
                'border-start',
                'border-5',
                'border-warning',
              ],
            },
            {
              title: 'Healthy back',
              start: '2022-08-02T12:00',
              end: '2022-08-02T13:30',
              classNames: [
                'event-custom-style',
                'bg-light',
                'text-nav',
                'border-0',
                'rounded-1',
                'p-2',
                'ps-3',
                'border-start',
                'border-5',
                'border-info',
              ],
            },
            {
              title: 'Relax yoga',
              start: '2022-08-02T18:45',
              end: '2022-08-02T20:00',
              classNames: [
                'event-custom-style',
                'bg-light',
                'text-nav',
                'border-0',
                'rounded-1',
                'p-2',
                'ps-3',
                'border-start',
                'border-5',
                'border-danger',
              ],
            },
            {
              title: 'Beginners',
              start: '2022-08-03T11:00',
              end: '2022-08-03T13:00',
              classNames: [
                'event-custom-style',
                'bg-light',
                'text-nav',
                'border-0',
                'rounded-1',
                'p-2',
                'ps-3',
                'border-start',
                'border-5',
                'border-success',
              ],
            },
            {
              title: 'Relax yoga',
              start: '2022-08-03T12:35',
              end: '2022-08-03T14:00',
              classNames: [
                'event-custom-style',
                'bg-light',
                'text-nav',
                'border-0',
                'rounded-1',
                'p-2',
                'ps-3',
                'border-start',
                'border-5',
                'border-danger',
              ],
            },
            {
              title: 'Fly yoga',
              start: '2022-08-04T09:00',
              end: '2022-08-04T11:00',
              classNames: [
                'event-custom-style',
                'bg-light',
                'text-nav',
                'border-0',
                'rounded-1',
                'p-2',
                'ps-3',
                'border-start',
                'border-5',
                'border-primary',
              ],
            },
            {
              title: 'For pregnant',
              start: '2022-08-05T07:30',
              end: '2022-08-05T09:40',
              classNames: [
                'event-custom-style',
                'bg-light',
                'text-nav',
                'border-0',
                'rounded-1',
                'p-2',
                'ps-3',
                'border-start',
                'border-5',
                'border-warning',
              ],
            },
            {
              title: 'Beginners',
              start: '2022-08-08T11:00',
              end: '2022-08-03T13:00',
              classNames: [
                'event-custom-style',
                'bg-light',
                'text-nav',
                'border-0',
                'rounded-1',
                'p-2',
                'ps-3',
                'border-start',
                'border-5',
                'border-success',
              ],
            },
            {
              title: 'Relax yoga',
              start: '2022-08-08T12:35',
              end: '2022-08-03T14:00',
              classNames: [
                'event-custom-style',
                'bg-light',
                'text-nav',
                'border-0',
                'rounded-1',
                'p-2',
                'ps-3',
                'border-start',
                'border-5',
                'border-danger',
              ],
            },
            {
              title: 'For pregnant',
              start: '2022-08-09T07:30',
              end: '2022-08-09T09:40',
              classNames: [
                'event-custom-style',
                'bg-light',
                'text-nav',
                'border-0',
                'rounded-1',
                'p-2',
                'ps-3',
                'border-start',
                'border-5',
                'border-warning',
              ],
            },
            {
              title: 'Fly yoga',
              start: '2022-08-10T09:00',
              end: '2022-08-10T11:00',
              classNames: [
                'event-custom-style',
                'bg-light',
                'text-nav',
                'border-0',
                'rounded-1',
                'p-2',
                'ps-3',
                'border-start',
                'border-5',
                'border-primary',
              ],
            },
            {
              title: 'Stretching',
              start: '2022-08-11T16:30',
              end: '2022-08-11T18:00',
              classNames: [
                'event-custom-style',
                'bg-light',
                'text-nav',
                'border-0',
                'rounded-1',
                'p-2',
                'ps-3',
                'border-start',
                'border-5',
                'border-purple',
              ],
            },
            {
              title: 'Healthy back',
              start: '2022-08-11T12:00',
              end: '2022-08-11T13:30',
              classNames: [
                'event-custom-style',
                'bg-light',
                'text-nav',
                'border-0',
                'rounded-1',
                'p-2',
                'ps-3',
                'border-start',
                'border-5',
                'border-info',
              ],
            },
            {
              title: 'Relax yoga',
              start: '2022-08-12T12:35',
              end: '2022-08-12T14:00',
              classNames: [
                'event-custom-style',
                'bg-light',
                'text-nav',
                'border-0',
                'rounded-1',
                'p-2',
                'ps-3',
                'border-start',
                'border-5',
                'border-danger',
              ],
            },
          ]}
        />
        <div className="text-center pt-4 pt-md-5 mt-2 mt-sm-3 mt-md-0">
          <Link className="btn btn-outline-primary fs-base" to="">
            Try a free lesson
          </Link>
        </div>
      </section>
    </>
  )
}

export default Schedule
