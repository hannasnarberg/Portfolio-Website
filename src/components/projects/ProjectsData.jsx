import IMG1 from '../../assets/CPR.jpeg';
import IMG2 from '../../assets/Portfolio-trappkonst.png';
import IMG4 from '../../assets/portfolio-humper.png';
import IMG5 from '../../assets/Storyhunter.png';
import IMG6 from '../../assets/VR.png';
import IMG7 from '../../assets/Information-kiosk.png';
import IMG8 from '../../assets/Blandaren.png';
import IMG9 from '../../assets/Hide_and_meet.png';
import IMG10 from '../../assets/Edulearn.png';

const projectsData = [
   {
      id: 1,
      image: IMG5,
      title: 'Storyhunter',
      links: [
         {
            link: 'http://github.com',
            buttonText: 'Github',
         },
      ],
      description:
         "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book. Standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book. Standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it",
      shortDescription:
         'Lorem Ipsum is simply dummy text of the printing and typesetting industry...',
      keyWords: ['Web Development'],
   },
   {
      id: 2,
      image: IMG9,
      title: 'Hide and Meet',
      links: [
         {
            link: 'http://github.com',
            buttonText: 'Github',
         },
      ],
      description:
         "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book. Standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book. Standard dummy text ever since the 1500s, when an unknown printer took a galley.",
      shortDescription:
         'Lorem Ipsum is simply dummy text of the printing and typesetting industry...',
      keyWords: ['Interaction Design'],
   },

   {
      id: 3,
      image: IMG10,
      title: 'Preparing for the Future for All',
      links: [
         {
            link: 'https://library.iated.org/view/SNARBERG2022PRE',
            buttonText: 'Abstract',
         },
         {
            link: 'https://library.iated.org/view/SNARBERG2022PRE',
            buttonText: 'Study Proposal',
         },
      ],
      description: (
         <p>
            In spring 2022, I took part in conducting a research project on
            accessibility at KTH. My responsibility was to chart course an
            learning activities with relation to accessibility. The article that
            resulted from the work, for which I am the first author, was
            published in EDULEARN22 Proceedings.<br></br>
            <br></br>I was given the opportunity to take part in this project
            because of another report on accessibility I wrote as a school
            project. In that report, I propose a study to investigate how the
            learning management system used at KTH could be improved to increase
            accessibility for people with cognitive disabilities. Both papers
            are linked above.
         </p>
      ),
      shortDescription: (
         <p>
            In spring 2022, I took part in conducting a research project on
            accessibility at KTH. My responsibility was to chart...
         </p>
      ),
      keyWords: ['Conference Paper, Accessibility'],
   },

   {
      id: 4,
      image: IMG4,
      title: 'Color Palettes & Memory',
      links: [
         {
            link: 'http://github.com',
            buttonText: 'http://dribble.com/Alien_pixels',
         },
      ],
      description:
         "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      shortDescription:
         'Lorem is simply dummy text of the printing and typesetting industry...',
      keyWords: ['Perceptual Study'],
   },
   {
      id: 5,
      image: IMG6,
      title: 'Weight Perception in VR',
      links: [
         {
            link: 'http://github.com',
            buttonText: 'http://dribble.com/Alien_pixels',
         },
      ],
      description:
         "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      shortDescription:
         'Lorem Ipsum is simply dummy of the printing and typesetting industry...',
      keyWords: ['Perceptual Study'],
   },
   {
      id: 6,
      image: IMG8,
      title: 'Bländaren',
      links: [
         {
            link: 'http://github.com',
            buttonText: 'http://dribble.com/Alien_pixels',
         },
      ],
      description:
         "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      shortDescription:
         'Lorem Ipsum is simply dummy text of the printing and typesetting industry...',
      keyWords: ['Graphic Design', 'Leadership'],
   },

   {
      id: 7,
      image: IMG7,
      title: 'Play Beyond Play',
      links: [
         {
            link: 'http://github.com',
            buttonText: 'http://dribble.com/Alien_pixels',
         },
      ],
      description:
         "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      shortDescription:
         'Lorem Ipsum is simply dummy the printing and typesetting industry...',
      keyWords: ['Accessibility', 'Interaction Design'],
   },
   {
      id: 8,
      image: IMG1,
      title: 'How to Save a Life',
      links: [
         {
            link: 'http://github.com',
            buttonText: 'http://dribble.com/Alien_pixels',
         },
      ],
      description:
         "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      shortDescription:
         'Lorem Ipsum is simply dummy text of the printing and industry...',
      keyWords: ['Physical Interaction Design', 'Arduino'],
   },
   {
      id: 9,
      image: IMG2,
      title: 'The Takeoff',
      links: [
         {
            link: 'http://github.com',
            buttonText: 'http://dribble.com/Alien_pixels',
         },
      ],
      description:
         'I have always loved art, especially when I get to create it myself.  Here is me at the inauguration of my artwork “The Takeoff” with which I won an art competition hosted by Stockholms Studentbostäder. The design was created digitally using Adobe Illustrator and Procreate and then maximized in size to cover the stairs at Lappkärrsberget.',
      shortDescription: 'Lorem Ipsum is simply dummy text of the industry...',
      keyWords: ['Art', 'Fun!'],
   },
];

export default projectsData;
