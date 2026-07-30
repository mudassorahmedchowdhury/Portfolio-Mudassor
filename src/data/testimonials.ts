export interface Testimonial {
  quote: string
  name: string
  role: string
  photo: string
  linkedin: string
  email?: string
  phone?: string
}

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Mudassor is a highly skilled and dependable QA engineer. He consistently identifies edge cases, uncovers hidden issues, and doesn't just wait for problems to arise — he anticipates them.",
    name: 'Anamul Hasan',
    role: 'Manager, ICT @ Padakhep',
    photo: '/images/testimonials/anamul-hasan.png',
    linkedin: 'https://linkedin.com/in/devanamul',
    email: 'ahfahad118@gmail.com',
  },
  {
    quote:
      'His adaptability skill is really good. Also, he is a very quick learner — I think anyone who gets a chance to work with him will enjoy it.',
    name: 'Nasim Rana',
    role: 'Independent Contractor @ Apple',
    photo: '/images/testimonials/nasim-rana.jpg',
    linkedin: 'https://linkedin.com/in/nasim1725',
    email: 'nasimrana69@gmail.com',
  },
  {
    quote:
      'A very polite guy with excellent knowledge. I can recommend him without any doubt — he knows how to research new things and find the best solution.',
    name: 'Faysal Khan',
    role: 'Sr. UX-UI Engineer @ Softzino',
    photo: '/images/testimonials/faysal-khan.png',
    linkedin: 'https://linkedin.com/in/iamfaysal',
    email: 'faysal.fpz@gmail.com',
    phone: '+8801737527348',
  },
  {
    quote:
      'Hard-working, bright, and a skilled communicator in the field of QA. What makes him stand out is his willingness to help others.',
    name: 'Ruhul Amin Khan',
    role: 'Senior Frontend Engineer',
    photo: '/images/testimonials/ruhul-amin.jpg',
    linkedin: 'https://linkedin.com/in/ruhulaminkhan',
    email: 'shapon.ite@gmail.com',
    phone: '+8801722117278',
  },
  {
    quote:
      'His analytical skills and ability to solve complex security challenges impressed me greatly. I highly recommend him for any cybersecurity role.',
    name: 'Mushfiqur Rahman',
    role: 'Security Engineer',
    photo: '/images/testimonials/mushfiqur-rahman.jpg',
    linkedin: 'https://linkedin.com/in/mushfiqur-bd',
    email: 'mushfiqur.real@gmail.com',
    phone: '+8801714218217',
  },
]
