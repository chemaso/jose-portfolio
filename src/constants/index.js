export const colors = {
  primary: '#9c9c9c',
  secondary: '#b34a4a',
  tertiary: '#5579a2',
  ['primary-variant']: '#ff0076',
  ['secondary-variant']: '#f1ba18',
  ['tertiary-variant']: '#f009ff',
  nerdwallet: 'rgb(255, 190, 105)',
  recreation: 'rgb(48, 172, 48)',
  google: 'red',
  apollo: 'purple',
  starmeup: 'rgb(98, 209, 194)',
  freelance: 'black'
};

export const shuffleOptions = [
  {
    item: '0.glb',
    color: '#eaeaea',
    background: '#ffffff',
    spot: 'black',
    geometry: 'Bolt',
    materials: 'x4',
    style: 'dark',
    frequency: 100,
    title: 'primary'
  },
  {
    item: '1.glb',
    color: '#e88888',
    background: '#E88888',
    spot: '#E88888',
    geometry: 'Cube033',
    materials: 'x1',
    frequency: 100,
    title: 'secondary'
  },
  {
    item: '2.glb',
    color: '#1abedb',
    spot: 'white',
    background: '#1abedb',
    geometry: 'Cube016',
    materials: 'A2',
    frequency: 20,
    title: 'tertiary'
  },
  {
    item: '3.glb',
    color: '#c48fc1',
    spot: '#cb94d3',
    geometry: 'Cube001',
    materials: 'A4',
    background: '#a988ad',
    frequency: 100,
    title: 'primary-variant'
  },
  {
    item: '4.glb',
    color: 'orange',
    spot: 'orange',
    background: '#f7da00',
    geometry: 'Cylinder004',
    materials: 'x11',
    style: 'dark',
    frequency: 100,
    title: 'secondary-variant'
  },
  {
    item: '5.glb',
    background: '#eaeaea',
    color: 'black',
    spot: 'white',
    geometry: 'Cylinder005',
    materials: 'x4',
    style: 'dark',
    frequency: 100,
    title: 'tertiary-variant'
  },
  {
    item: '5.glb',
    background: '#eaeaea',
    color: 'white',
    spot: 'white',
    geometry: 'Cylinder005',
    materials: 'x4',
    frequency: 100,
    title: 'recreation'
  },
  {
    item: '5.glb',
    background: '#eaeaea',
    color: 'black',
    spot: 'white',
    geometry: 'Cylinder005',
    materials: 'x4',
    style: 'dark',
    frequency: 100,
    title: 'nerdwallet'
  },
  {
    item: '5.glb',
    background: '#eaeaea',
    color: 'black',
    spot: 'white',
    geometry: 'Cylinder005',
    materials: 'x4',
    style: 'dark',
    frequency: 100,
    title: 'google'
  },
  {
    item: '5.glb',
    background: '#eaeaea',
    color: 'black',
    spot: 'white',
    geometry: 'Cylinder005',
    materials: 'x4',
    frequency: 100,
    title: 'apollo'
  },
  {
    item: '5.glb',
    background: '#eaeaea',
    color: 'black',
    spot: 'white',
    geometry: 'Cylinder005',
    materials: 'x4',
    frequency: 100,
    title: 'starmeup'
  },
  {
    item: '5.glb',
    background: '#eaeaea',
    color: 'black',
    spot: 'white',
    geometry: 'Cylinder005',
    materials: 'x4',
    frequency: 100,
    title: 'freelance'
  }
];

export const aboutTitleOptions = [
  {
    delay: 250,
    className: '',
    key: 'about-1',
    id: 'about-me-container-static',
    title: 'ABOUT'
  },
  {
    delay: 500,
    key: 'about-2',
    id: 'about-me-container',
    className: 'shadow',
    title: 'ABOUT'
  },
  {
    delay: 750,
    className: 'halftone',
    key: 'about-3',
    id: 'about-me-container-static',
    title: 'ABOUT'
  },
  {
    delay: 100,
    id: 'about-me-container',
    key: 'about-4',
    className: 'halftone halftone-color',
    title: 'ABOUT'
  }
];

export const workTitleOptions = [
  {
    delay: 150,
    className: '',
    id: 'work-container-static',
    title: 'WORK'
  },
  {
    delay: 300,
    id: 'work-container',
    className: 'shadow',
    title: 'WORK'
  },
  {
    delay: 450,
    className: 'halftone',
    id: 'work-container-static-2',
    title: 'WORK'
  },
  {
    delay: 600,
    id: 'work-container-2',
    className: 'halftone halftone-color',
    title: 'WORK'
  },
  {
    delay: 750,
    className: '',
    id: 'work-container-static-3',
    title: 'WORK'
  },
  {
    delay: 900,
    id: 'work-container-3',
    className: 'shadow',
    title: 'WORK'
  },
  {
    delay: 1050,
    className: 'halftone',
    id: 'work-container-static-4',
    title: 'WORK'
  },
  {
    delay: 1200,
    id: 'work-container-4',
    className: 'halftone halftone-color',
    title: 'WORK'
  }
];

export const contactTitleOptions = [
  {
    delay: 250,
    className: '',
    id: 'contact-container-static',
    title: 'CONTACT'
  },
  {
    delay: 500,
    id: 'contact-container',
    className: 'shadow',
    title: 'CONTACT'
  },
  {
    delay: 750,
    className: 'halftone',
    id: 'contact-container-static-2',
    title: 'CONTACT'
  },
  {
    delay: 1000,
    id: 'contact-container-2',
    className: 'halftone halftone-color',
    title: 'CONTACT'
  }
];

export const products = [
  {
    id: 'product-1',
    name: 'Recreation.gov',
    background: 'https://jose-porfolio.s3.amazonaws.com/recreation.png',
    next: 'https://jose-porfolio.s3.amazonaws.com/rec-2.jpg',
    title: 'recreation',
    label: 'React & Golang App',
    role: 'Development & Maintenance'
  },
  {
    id: 'product-2',
    name: 'Google I/O',
    background: 'https://jose-porfolio.s3.amazonaws.com/google.png',
    next: 'https://jose-porfolio.s3.amazonaws.com/google-1.jpg',
    title: 'google',
    label: 'Preact Web App',
    role: 'Development & Animations'
  },
  {
    id: 'product-3',
    name: 'Nerdwallet',
    background: 'https://jose-porfolio.s3.amazonaws.com/nerdwallet.png',
    title: 'nerdwallet',
    next: 'https://jose-porfolio.s3.amazonaws.com/nerdwallet-3.jpg',
    label: 'React Web App',
    role: 'Development & Animations'
  },
  {
    id: 'product-4',
    name: 'IQVIA Transparency',
    background: 'https://jose-porfolio.s3.amazonaws.com/apollo.png',
    title: 'apollo',
    next: 'https://jose-porfolio.s3.amazonaws.com/iqvia-4.jpg',
    label: 'React Web App',
    role: 'From Scratch Development'
  },
  {
    id: 'product-5',
    name: 'StarmeUp',
    background: 'https://jose-porfolio.s3.amazonaws.com/starmeup.png',
    title: 'starmeup',
    next: 'https://jose-porfolio.s3.amazonaws.com/starmeup-1.jpg',
    label: 'React Web App',
    role: 'Development & Design'
  },
  {
    id: 'product-6',
    name: 'Freelance',
    background: 'https://jose-porfolio.s3.amazonaws.com/freelance.png',
    title: 'freelance',
    label: 'Javascript',
    role: 'Development & Design'
  }
];

export const freelanceImages = [
  { url: 'https://jose-porfolio.s3.amazonaws.com/sipreco.jpg', alt: 'Sipreco' },
  {
    url: 'https://jose-porfolio.s3.amazonaws.com/tecnoware.jpg',
    alt: 'Tecnoware'
  },
  {
    url: 'https://jose-porfolio.s3.amazonaws.com/valdez.jpg',
    alt: 'Valdez Perfumeria'
  },
  {
    url: 'https://jose-porfolio.s3.amazonaws.com/transcascante.jpg',
    alt: 'transcascante'
  },
  {
    url: 'https://jose-porfolio.s3.amazonaws.com/sipreco-1.jpg',
    alt: 'sipreco'
  },
  { url: 'https://jose-porfolio.s3.amazonaws.com/sice.jpg', alt: 'sice' },
  {
    url: 'https://jose-porfolio.s3.amazonaws.com/seguro-social-cr.jpg',
    alt: 'caja de seguro social costarricense'
  },
  { url: 'https://jose-porfolio.s3.amazonaws.com/jgs.jpg', alt: 'jgs' },
  {
    url: 'https://jose-porfolio.s3.amazonaws.com/pluslegal.jpg',
    alt: 'pluslegal'
  },
  {
    url: 'https://jose-porfolio.s3.amazonaws.com/gestion-integrada.jpg',
    alt: 'gestion integrada'
  },
  { url: 'https://jose-porfolio.s3.amazonaws.com/chema.jpg', alt: 'chema' },
  {
    url: 'https://jose-porfolio.s3.amazonaws.com/sipreco-1.jpg',
    alt: 'sipreco'
  },
  {
    url: 'https://jose-porfolio.s3.amazonaws.com/banco-nacional.jpg',
    alt: 'banco nacional costa rica'
  },
  {
    url: 'https://jose-porfolio.s3.amazonaws.com/seguro-social-cr.jpg',
    alt: 'caja de seguro social costarricense'
  }
];

export const contents = [
  {
    id: 'recreation',
    product: 'RECREATION.GOV',
    subtle:
      'Recreation.gov is a popular online platform that provides users with access to a wide range of outdoor recreational activities, including camping, hiking, fishing, and more.',
    boxes: [
      {
        label: 'Position:',
        value: 'React/Golang Engineer',
        id: 'recreation-1'
      },
      {
        label: 'From where:',
        value: 'Remote (Argentina/Portugal)',
        id: 'recreation-2'
      },
      {
        label: 'Year:',
        value: '2020-2023',
        id: 'recreation-3'
      }
    ],
    overview: [
      "As a developer on the Recreation project, I was responsible for building and maintaining various components of the site's front-end extensively using React and Redux, as well as implementing server-side logic and APIs using Golang. I also worked with AWS services such as SNS/SQS, S3, and DynamoDB.",
      'One of my key achievements on the project was the Venue Reservations UI that give to the external users the oportunity to make reservations for Day / Recurring Activities, events or ceremonies on the National Parks.'
    ],
    images: [
      'https://jose-porfolio.s3.amazonaws.com/rec-3.jpg',
      'https://jose-porfolio.s3.amazonaws.com/rec-4.jpg',
      'https://jose-porfolio.s3.amazonaws.com/rec-1.jpg',
      'https://jose-porfolio.s3.amazonaws.com/rec-2.jpg',
      'https://jose-porfolio.s3.amazonaws.com/rec-5.jpg',
      'https://jose-porfolio.s3.amazonaws.com/rec-6.jpg',
      'https://jose-porfolio.s3.amazonaws.com/rec-7.jpg',
      'https://jose-porfolio.s3.amazonaws.com/rec-3.jpg',
      'https://jose-porfolio.s3.amazonaws.com/rec-4.jpg',
      'https://jose-porfolio.s3.amazonaws.com/rec-1.jpg',
      'https://jose-porfolio.s3.amazonaws.com/rec-2.jpg',
      'https://jose-porfolio.s3.amazonaws.com/rec-5.jpg',
      'https://jose-porfolio.s3.amazonaws.com/rec-6.jpg',
      'https://jose-porfolio.s3.amazonaws.com/rec-7.jpg'
    ],
    stack: [
      {
        label: 'React',
        level: '95'
      },
      {
        label: 'Golang',
        level: '95'
      },
      {
        label: 'AWS',
        level: '90'
      },
      {
        label: 'Redux',
        level: '80'
      },
      {
        label: 'CSS',
        level: '70'
      }
    ]
  },
  {
    id: 'google',
    product: 'GOOGLE I/O 2021',
    subtle:
      'Google I/O is an annual developer conference hosted by Google, focused on showcasing the latest developments in software, hardware, and other cutting-edge technologies.',
    boxes: [
      {
        label: 'Position:',
        value: 'React/Animations Engineer',
        id: 'google-1'
      },
      {
        label: 'From where:',
        value: 'Remote (Argentina)',
        id: 'google-2'
      },
      {
        label: 'Year:',
        value: '2021',
        id: 'google-3'
      }
    ],
    overview: [
      'As a developer on this project one of my key areas of focus was on using React to create reusable components that could be used throughout the site. I also had a special interest in CSS animations and worked to incorporate them into the site in a way that enhanced the user experience. I used libraries like React Lottie and Animate.css to create visually appealing and interactive user experiences.',
      "Throughout the development process, I was committed to maintaining high standards of quality and ensuring that the website met Google's rigorous standards for accessibility and performance. I also had the opportunity to learn about the latest technologies and best practices in front-end development."
    ],
    images: [
      'https://jose-porfolio.s3.amazonaws.com/google-1.jpg',
      'https://jose-porfolio.s3.amazonaws.com/google-2.jpg',
      'https://jose-porfolio.s3.amazonaws.com/google-3.jpg',
      'https://jose-porfolio.s3.amazonaws.com/google-4.jpg',
      'https://jose-porfolio.s3.amazonaws.com/google-5.jpg',
      'https://jose-porfolio.s3.amazonaws.com/google-6.jpg',
      'https://jose-porfolio.s3.amazonaws.com/google-7.jpg',
      'https://jose-porfolio.s3.amazonaws.com/google-1.jpg',
      'https://jose-porfolio.s3.amazonaws.com/google-2.jpg',
      'https://jose-porfolio.s3.amazonaws.com/google-3.jpg',
      'https://jose-porfolio.s3.amazonaws.com/google-4.jpg',
      'https://jose-porfolio.s3.amazonaws.com/google-5.jpg',
      'https://jose-porfolio.s3.amazonaws.com/google-6.jpg',
      'https://jose-porfolio.s3.amazonaws.com/google-7.jpg'
    ],
    stack: [
      {
        label: 'React',
        level: '95'
      },
      {
        label: 'React Lottie',
        level: '95'
      },
      {
        label: 'I18next',
        level: '90'
      },
      {
        label: 'Mobx',
        level: '80'
      },
      {
        label: 'Typescript',
        level: '90'
      },
      {
        label: 'Animations',
        level: '95'
      }
    ]
  },
  {
    id: 'nerdwallet',
    product: 'Nerdwallet',
    subtle:
      'NerdWallet is a popular personal finance platform that offers users a wide range of financial tools, resources, and advice. ',
    boxes: [
      {
        label: 'Position:',
        value: 'React/Animations Engineer',
        id: 'nerdwallet-1'
      },
      {
        label: 'From where:',
        value: 'Remote (Argentina)',
        id: 'nerdwallet-2'
      },
      {
        label: 'Year:',
        value: '2022',
        id: 'nerdwallet-3'
      }
    ],
    overview: [
      'As a React developer at Nerdwallet, I was responsible for building and maintaining some of the front-end user and some internal building tool interfaces of the finance platform.',
      "I had a special focus on CSS animations and used libraries like React Lottie to create visually appealing and interactive user experiences. I collaborated with designers and product managers to ensure that the interface met the needs of Nerdwallet's users and communicated information effectively."
    ],
    images: [
      'https://jose-porfolio.s3.amazonaws.com/nerdwallet-1.jpg',
      'https://jose-porfolio.s3.amazonaws.com/nerdwallet-2.jpg',
      'https://jose-porfolio.s3.amazonaws.com/nerdwallet-3.jpg',
      'https://jose-porfolio.s3.amazonaws.com/nerdwallet-4.jpg',
      'https://jose-porfolio.s3.amazonaws.com/nerdwallet-5.jpg',
      'https://jose-porfolio.s3.amazonaws.com/nerdwallet-6.jpg',
      'https://jose-porfolio.s3.amazonaws.com/nerdwallet-7.jpg',
      'https://jose-porfolio.s3.amazonaws.com/nerdwallet-1.jpg',
      'https://jose-porfolio.s3.amazonaws.com/nerdwallet-2.jpg',
      'https://jose-porfolio.s3.amazonaws.com/nerdwallet-3.jpg',
      'https://jose-porfolio.s3.amazonaws.com/nerdwallet-4.jpg',
      'https://jose-porfolio.s3.amazonaws.com/nerdwallet-5.jpg',
      'https://jose-porfolio.s3.amazonaws.com/nerdwallet-6.jpg',
      'https://jose-porfolio.s3.amazonaws.com/nerdwallet-7.jpg'
    ],
    stack: [
      {
        label: 'React',
        level: '95'
      },
      {
        label: 'Typescript',
        level: '90'
      },
      {
        label: 'GraphQL',
        level: '60'
      },
      {
        label: 'CSS',
        level: '70'
      },
      {
        label: 'Animations',
        level: '90'
      }
    ]
  },
  {
    id: 'apollo',
    product: 'IQVIA TRANSPARENCY',
    subtle:
      'IQVIA Transparency Reporting is a platform that enables life sciences companies to comply with global transparency and disclosure regulations',
    boxes: [
      {
        label: 'Position:',
        value: 'React Engineer',
        id: 'apollo-1'
      },
      {
        label: 'From where:',
        value: 'Remote (Argentina)',
        id: 'apollo-2'
      },
      {
        label: 'Year:',
        value: '2019',
        id: 'apollo-3'
      }
    ],
    overview: [
      'As a React developer on the IQVIA Transparency reporting project, I was part of a team that built the platform from scratch using React, React Router, and Material UI. Our goal was to create a modern, responsive web application that could be used by healthcare organizations to report their financial relationships with healthcare providers.',
      'Working on the IQVIA Transparency reporting project was a rewarding experience that allowed me to work on an important project with a talented team of developers and designers. '
    ],
    images: [
      'https://jose-porfolio.s3.amazonaws.com/iqvia-1.jpg',
      'https://jose-porfolio.s3.amazonaws.com/iqvia-5.jpg',
      'https://jose-porfolio.s3.amazonaws.com/iqvia-3.jpg',
      'https://jose-porfolio.s3.amazonaws.com/iqvia-4.jpg',
      'https://jose-porfolio.s3.amazonaws.com/iqvia-5.jpg',
      'https://jose-porfolio.s3.amazonaws.com/iqvia-6.jpg',
      'https://jose-porfolio.s3.amazonaws.com/iqvia-7.jpg',
      'https://jose-porfolio.s3.amazonaws.com/iqvia-1.jpg',
      'https://jose-porfolio.s3.amazonaws.com/iqvia-5.jpg',
      'https://jose-porfolio.s3.amazonaws.com/iqvia-3.jpg',
      'https://jose-porfolio.s3.amazonaws.com/iqvia-4.jpg',
      'https://jose-porfolio.s3.amazonaws.com/iqvia-5.jpg',
      'https://jose-porfolio.s3.amazonaws.com/iqvia-6.jpg',
      'https://jose-porfolio.s3.amazonaws.com/iqvia-7.jpg'
    ],
    stack: [
      {
        label: 'React',
        level: '95'
      },
      {
        label: 'Google Cloud',
        level: '80'
      },
      {
        label: 'Webpack',
        level: '90'
      },
      {
        label: 'Redux',
        level: '70'
      },
      {
        label: 'Redux',
        level: '80'
      }
    ]
  },
  {
    id: 'starmeup',
    product: 'STARMEUP',
    subtle:
      'StarmeUp is an employee engagement platform that helps companies foster a culture of innovation, collaboration, and continuous learning.',
    boxes: [
      {
        label: 'Position:',
        value: 'Web UI Developer',
        id: 'starmeup-1'
      },
      {
        label: 'From where:',
        value: 'Argentina',
        id: 'starmeup-2'
      },
      {
        label: 'Year:',
        value: '2018',
        id: 'starmeup-3'
      }
    ],
    overview: [
      'My role on the team was to develop and maintain the front-end user interface of the platform, which included building data visualizations using D3 and Google Charts. I worked closely with designers to ensure that the visualizations were provided meaningful insights into the data.',
      'Using D3, I created custom visualizations that allowed users to explore data in a more interactive and engaging way. I also used Google Charts to create more traditional graphs and charts, which provided a quick and easy way for users to get a sense of the data at a glance.'
    ],
    images: [
      'https://jose-porfolio.s3.amazonaws.com/starmeup-1.jpg',
      'https://jose-porfolio.s3.amazonaws.com/starmeup-2.jpg',
      'https://jose-porfolio.s3.amazonaws.com/starmeup-3.jpg',
      'https://jose-porfolio.s3.amazonaws.com/starmeup-4.jpg',
      'https://jose-porfolio.s3.amazonaws.com/starmeup-5.jpg',
      'https://jose-porfolio.s3.amazonaws.com/starmeup-1.jpg',
      'https://jose-porfolio.s3.amazonaws.com/starmeup-2.jpg',
      'https://jose-porfolio.s3.amazonaws.com/starmeup-4.jpg',
      'https://jose-porfolio.s3.amazonaws.com/starmeup-3.jpg',
      'https://jose-porfolio.s3.amazonaws.com/starmeup-4.jpg',
      'https://jose-porfolio.s3.amazonaws.com/starmeup-5.jpg',
      'https://jose-porfolio.s3.amazonaws.com/starmeup-2.jpg'
    ],
    stack: [
      {
        label: 'React',
        level: '95'
      },
      {
        label: 'Javascript',
        level: '95'
      },
      {
        label: 'HTML/CSS',
        level: '90'
      },
      {
        label: 'Angular 2',
        level: '70'
      },
      {
        label: 'Animations',
        level: '80'
      }
    ]
  },
  {
    id: 'freelance',
    product: 'FREELANCE PROJECTS',
    subtle: 'Lorem ipsum dolor sitem est la',
    boxes: [
      {
        label: 'Position:',
        value: 'React/Javascript Developer / Wordpress Developer ',
        id: 'freelance-1'
      },
      {
        label: 'From where:',
        value: 'Venezuela / Costa Rica',
        id: 'freelance-2'
      },
      {
        label: 'Year:',
        value: '2016 - 2017',
        id: 'freelance-3'
      }
    ],
    overview: [
      "As a developer on the Recreation project, I was responsible for building and maintaining various components of the site's front-end using React, as well as implementing server-side logic and APIs using Golang. I also worked extensively with AWS services such as SNS/SQS, S3, and DynamoDB.",
      'One of my key achievements on the project was the Venue Reservations UI that give to the external users the oportunity to make reservations for Day / Recurring Activities, events or ceremonies on the National Parks.'
    ],
    images: [
      'https://via.placeholder.com/600x400/d41a1a/969696',
      'https://via.placeholder.com/600x400/d41a1a/969696'
    ],
    stack: [
      {
        label: 'React',
        level: '95'
      },
      {
        label: 'Golang',
        level: '95'
      },
      {
        label: 'AWS',
        level: '90'
      },
      {
        label: 'Redux',
        level: '70'
      },
      {
        label: 'Animations',
        level: '80'
      }
    ]
  }
];

export const skills = [
  {
    label: 'React',
    level: '100'
  },
  {
    label: 'Javascript',
    level: '95'
  },
  {
    label: 'Golang',
    level: '90'
  },
  {
    label: 'CSS/SCSS',
    level: '93'
  },
  {
    label: 'Redux',
    level: '90'
  },
  {
    label: 'I18next',
    level: '90'
  },
  {
    label: 'Accessibility',
    level: '90'
  },
  {
    label: 'AWS',
    level: '70'
  },
  {
    label: 'TypeScript',
    level: '75'
  },
  {
    label: 'Mobx',
    level: '75'
  },
  {
    label: 'WordPress',
    level: '80'
  },
  {
    label: 'Rest API',
    level: '75'
  }
];

export const clients = [
  'GOOGLE',
  'BOOZ ALLEN',
  'GLOBANT',
  'NERDWALLET',
  'TECNOWARE',
  'VALDEZ',
  'BANCO NACIONAL',
  'GESTION INTEGRADA',
  'JGS'
];

export const metaOptions = [
  {
    path: '/',
    title: 'Software Engineer | Creative Spirit | Jose Aguilar',
    description: 'Resume Page of Jose Aguilar a Software engineer with a passion for creativity.'
  },
  {
    path: '/work',
    title: 'Portfolio | Creative Spirit | Jose Aguilar',
    description: 'Portfolio of Jose Aguilar a Software engineer with a passion for creativity.'
  },
  {
    path: '/about',
    title: 'About | Creative Spirit | Jose Aguilar',
    description:
      'Get to know more about Jose Aguilar a Software engineer with a passion for creativity.'
  },
  {
    path: '#contact',
    title: 'Contact | Creative Spirit | Jose Aguilar',
    description: 'Get in touch with Jose Aguilar a Software engineer with a passion for creativity.'
  },
  {
    path: '#more',
    title: 'More Projects | Creative Spirit | Jose Aguilar',
    description: 'Portfolio of Jose Aguilar a Software engineer with a passion for creativity.'
  },
  {
    path: '/work/nerdwallet',
    title: 'Nerdwallet | Creative Spirit | Jose Aguilar',
    description: 'Resume of Jose Aguilar journey on Nerdwallet.'
  },
  {
    path: '/work/recreation',
    title: 'Recreation.gov | Creative Spirit | Jose Aguilar',
    description: 'Resume of Jose Aguilar journey on Recreation.gov.'
  },
  {
    path: '/work/google',
    title: 'Google I/O | Creative Spirit | Jose Aguilar',
    description: 'Resume of Jose Aguilar journey on Google I/O.'
  },
  {
    path: '/work/starmeup',
    title: 'StarMeUp | Creative Spirit | Jose Aguilar',
    description: 'Resume of Jose Aguilar journey on StarMeUp.'
  },
  {
    path: '/work/apollo',
    title: 'IQVIA Transparency | Creative Spirit | Jose Aguilar',
    description: 'Resume of Jose Aguilar journey on IQVIA Transparency.'
  }
];
