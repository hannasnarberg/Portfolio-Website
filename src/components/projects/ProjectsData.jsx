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
      title: 'Story Hunter',
      links: [
         {
            link: 'http://github.com',
            buttonText: 'GitHub',
         },
         {
            link: 'https://storyhunter-2a3c7.web.app/',
            buttonText: 'Live Demo',
         },
      ],
      description:
         'Story Hunter is a React app where visitors can browse TV series. You can search for series, add them to your watchlist, see what’s trending or receive recommendations based on other series you like. For the adventurous, there is also an option for receiving randomized suggestions. The app was implemented in a group of four, using a model-view-presenter architecture. I was mainly responsible for the model and the presenters, meaning I worked less with CSS and more with JavaScript. Data was retrieved from The Movie Database (TMDB) API. For the live demo, feel free to use our guest account. Email: guest@gmail.com. Password: guest1.',
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
            buttonText: 'GitHub',
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
      ],
      description: (
         <p>
            In spring 2022, I took part in conducting a research project on
            accessibility at KTH. My responsibility was to chart course and
            learning activities with relation to accessibility. The article that
            resulted from the work was published in EDULEARN22 Proceedings,
            where I am listed as the first author.
            <br></br>
            <br></br>
            My lecturer, who I carried out the project with, first gained trust
            in me from reading another report of mine on the subject of
            accessibility. In that report, I propose a study to investigate how
            the learning management system used at KTH could be improved to
            increase accessibility for people with cognitive disabilities. I
            linked it as a bonus report, for the interested.
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
            buttonText: 'GitHub',
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
            buttonText: 'GitHub',
         },
      ],
      description:
         "In this study, three classmates and I extended the existing work of my friend’s bachelor's thesis on how to communicate weight in virtual reality. To their already implemented virtual environment where users throw virtual spheres at a target, we added auditory and/or haptic feedback as a response to ball movement. The aim was to see if varying frequencies and amplitudes in the feedback could induce a sense of weight difference between balls. Models for sound and haptic feedback were carefully designed with regards to previous research on cross-sensory correspondences between audio, haptics and weight. User tests showed that both audio and haptics can effectively communicate ball weight. However, no statistically significant results were shown when comparing sound and haptic feedback.",
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
            buttonText: 'GitHub',
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
            buttonText: 'GitHub',
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
            buttonText: 'GitHub',
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
            buttonText: 'GitHub',
         },
      ],
      description:
         'I have always loved art, especially when I get to create it myself.  Here is me at the inauguration of my artwork “The Takeoff” with which I won an art competition hosted by Stockholms Studentbostäder. The design was created digitally using Adobe Illustrator and Procreate and then maximized in size to cover the stairs at Lappkärrsberget.',
      shortDescription: 'Lorem Ipsum is simply dummy text of the industry...',
      keyWords: ['Art', 'Fun!'],
   },
];

export default projectsData;
