import avatar05 from '@/assets/img/avatar/05.jpg'
import avatar06 from '@/assets/img/avatar/06.jpg'
import avatar08 from '@/assets/img/avatar/08.jpg'
import avatar09 from '@/assets/img/avatar/09.jpg'
import avatar10 from '@/assets/img/avatar/10.jpg'
import avatar11 from '@/assets/img/avatar/11.jpg'
import avatar19 from '@/assets/img/avatar/19.jpg'
import avatar20 from '@/assets/img/avatar/20.jpg'

type Contact = {
  name: string
  message: string
  time: string
  unread?: number
  avatar?: string
  initials?: string
  initialsColor?: string
  online?: boolean
  disabled?: boolean
}

export const contactsData: Contact[] = [
  {
    name: 'Mikaela Collins',
    message: 'Thank you for ...',
    time: '15:01',
    unread: 2,
    avatar: avatar06,
    online: true,
  },
  {
    name: 'Robert Fox',
    message: 'Documents have ...',
    time: '13:10',
    unread: 3,
    avatar: avatar08,
    online: false,
  },
  {
    name: 'Furry Aocklen',
    message: 'I got it, thanks 👍',
    time: '12:04',
    initials: 'FA',
    initialsColor: 'rgba(var(--ar-primary-rgb), .15)',
    online: false,
  },
  {
    name: 'Mark Virgows',
    message: 'Ac aliquam victoria ...',
    time: '11:36',
    avatar: avatar19,
    online: true,
    disabled: true,
  },
  {
    name: 'Nadia Davidson',
    message: 'Nullam id devices ...',
    time: '20 hr',
    initials: 'ND',
    initialsColor: 'rgba(var(--ar-info-rgb), .15)',
    online: false,
  },
  {
    name: 'Alica Hawkins',
    message: 'Massa laoreet molit ...',
    time: '23 hr',
    avatar: avatar09,
    online: false,
  },
  {
    name: 'Natalia Bocous',
    message: 'Awesome 🚀',
    time: '2 days',
    avatar: avatar05,
    online: true,
  },
  {
    name: 'Marry Black',
    message: 'I have great news!',
    time: '3 days',
    avatar: avatar20,
    online: false,
  },
  {
    name: 'Jerome Bell',
    message: 'Ok 👌',
    time: 'May 21',
    avatar: avatar10,
    online: true,
  },
  {
    name: 'Jerome Bell',
    message: 'Do you know how ...',
    time: '2 days',
    avatar: avatar11,
    online: false,
  },
]
