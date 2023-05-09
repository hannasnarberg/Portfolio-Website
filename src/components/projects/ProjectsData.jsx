import CPR from '../../assets/pictures/cpr.jpeg';
import ArtWork from '../../assets/pictures/artwork.png';
import ColorSchemeStudy from '../../assets/pictures/colorSchemeStudy.png';
import StoryHunter from '../../assets/pictures/storyhunter.png';
import VR from '../../assets/pictures/vr.png';
import InformationScreen from '../../assets/pictures/informationScreen.png';
import Blandaren from '../../assets/pictures/blandaren.png';
import HideAndMeet from '../../assets/pictures/Hide_and_meet.png';
import Edulearn from '../../assets/pictures/edulearn.png';
import RobinHoodCalc from '../../assets/pictures/robinHoodCalc.png';

const projectsData = [
   {
      id: 1,
      image: RobinHoodCalc,
      title: 'Robin Hood Calculator',
      links: [
         {
            link: 'https://robinhoodcalculator.web.app/',
            buttonText: 'Live Demo',
         },
         {
            link: 'https://drive.google.com/file/d/1ZDPjmmekMsvQOR7Xl2S9m3FX-u6d7B_u/view?usp=sharing',
            buttonText: 'Video Demo',
         },
      ],
      description: (
         <p>
            As a part of the KTH course DH2321 Information Visualization, four
            classmates and I, supervised by Angie Hjort at Gapminder, set up a
            web application for visualizing global income distribution. It is
            called the Robin Hood Calculator and is built using React and D3.js.
            I was mainly responsible for the React part of the project. Follow
            the links above for a live demo and a video demo.
         </p>
      ),
      keyWords: ['Web Development', 'React', 'D3'],
   },
   {
      id: 2,
      image: StoryHunter,
      title: 'Story Hunter',
      links: [
         {
            link: 'https://github.com/hannasnarberg/StoryHunter',
            buttonText: 'GitHub',
         },
         {
            link: 'https://storyhunter-2a3c7.web.app/',
            buttonText: 'Live Demo',
         },
      ],
      description: (
         <p>
            Story Hunter is a web app for browsing series. Search, add to your
            watchlist, stay current with trending shows, or get personalized
            recommendations based on your preferences. Feeling daring? Try a
            randomized suggestion. The website was developed by a team of four,
            using a model-view-presenter architecture, and I was mainly
            responsible for developing the model and presenters. This was my
            first experience with web development and it had me very interested
            in a future career in the field. For the live demo, feel free to use
            our guest account:
            <b> guest@gmail.com, password: guest1</b>{' '}
         </p>
      ),
      keyWords: ['Web Development', 'React'],
   },
   {
      id: 3,
      image: HideAndMeet,
      title: 'Hide & Meet',
      links: [
         {
            link: 'https://drive.google.com/file/d/1egBN99wePSRnZie1saCc41BtbMA6mFo0/view?usp=sharing',
            buttonText: 'Workbook',
         },
      ],
      description:
         'Hide & Meet is a mobile app prototype designed through a double diamond process with the aim of supporting introverted practices in a hypothetical world populated solely by introverts. It offers party guests a unique way to socialize, diminishing the risks of face-to-face rejection and lack of conversation starters. Using AR technology, users can scan their surroundings with their mobile camera to discover virtual objects placed in the room by other guests. If a user finds an object of interest and its creator is open to meeting, the object becomes both the meeting point and a conversation starter. Want to learn more about the design process? Take a peek at the workbook.',
      keyWords: ['Interaction Design'],
   },

   {
      id: 4,
      image: Edulearn,
      title: 'Preparing for the Future for All',
      links: [
         {
            link: 'https://library.iated.org/view/SNARBERG2022PRE',
            buttonText: 'Abstract',
         },
         {
            link: 'https://drive.google.com/file/d/1ncvFZHIWIQjOLCmi02kfCgqU4DEuT2XY/view?usp=sharing',
            buttonText: 'Bonus Report',
         },
      ],
      description:
         'I am the first author of a conference paper titled Preparing for the Future for All, published in EDULEARN22 Proceedings. The paper showcases a research project on accessibility education at technical universities, where I played a role in charting courses and learning activities at KTH related to accessibility. My involvement in the project stemmed from another report I wrote on accessible web applications. In that report, I propose a study to  investigate how the KTH learning management system could be improved for people with cognitive disabilities. I linked it as a bonus report!',
      keyWords: ['Conference Paper', 'Accessibility'],
   },

   {
      id: 5,
      image: InformationScreen,
      title: 'Play Beyond Play',
      links: [
         {
            link: 'https://drive.google.com/file/d/1CsnUxK1v-UIV2AtePGUON0zo6z7nMkp7/view?usp=sharing',
            buttonText: 'Report',
         },
      ],
      description:
         'In the final project of a KTH course on accessible design, my team of four assessed the information screens at the Play Beyond Play exhibition at Tekniska Museet and prototyped a new design with a focus on enhanced user experience for visitors with dyslexia. Our work was guided by accessibility guidelines, and we conducted user testing on both the original design and our new prototype. For an overview of our process and a visual of the prototype, check out the report.',
      keyWords: ['Interaction Design', 'Accessibility'],
   },

   {
      id: 6,
      image: ColorSchemeStudy,
      title: 'Color Relations & Memory',
      links: [
         {
            link: 'https://drive.google.com/file/d/1tl5-RH55G4qZGn3mOSHZ6bCVQsjGK3g1/view?usp=sharing',
            buttonText: 'Poster',
         },
         {
            link: 'https://drive.google.com/file/d/1bwrFpAmXKu40oUMKh7_nbeCY5W1CHwgS/view?usp=sharing',
            buttonText: 'Report',
         },
      ],
      description:
         'The purpose of this study was to explore the impact of color similarity on memorability of website content and user experience. Using a Wix website template as a base, two identical websites were created, differing only in their color scheme. Then twelve participants took part in experiments to gather data for comparison. While the results of the small-scale study were far from statistically significant, I learned a lot about the process of conducting perceptual experiments. Check out the poster for a summary or read the full report for more information.',
      keyWords: ['User Research'],
   },
   {
      id: 7,
      image: VR,
      title: 'Weight Perception in VR',
      links: [
         {
            link: 'https://drive.google.com/file/d/1iXENIKhr20vGGwE8diwG-ebJceo9nNgy/view?usp=sharing',
            buttonText: 'Report',
         },
         {
            link: 'https://youtu.be/TVSTVCTB4aU',
            buttonText: 'Video Demo',
         },
      ],
      description:
         "In this study, my team of three extended a friend’s bachelor's thesis on communicating weight in virtual reality. To their already implemented virtual environment where users throw spheres at a target, we added auditory and/or haptic feedback to respond to ball movement. The goal was to investigate if varying frequencies and amplitudes in the feedback could convey a sense of weight difference between balls. Models for auditory and haptic feedback were designed based on prior research on cross-sensory correspondences between audio, haptics, and weight. User testing revealed that both audio and haptics effectively communicate ball weight, but there were no notable differences in performance between the different feedback systems.",
      keyWords: ['User Research', 'Unity', 'VR'],
   },

   {
      id: 8,
      image: CPR,
      title: 'How to Save a Life',
      links: [
         {
            link: 'https://github.com/hannasnarberg/How-to-Save-a-Life',
            buttonText: 'GitHub',
         },
      ],
      description:
         'How to Save a Life is an interactive simulation of a life-saving process involving chest compressions, mouth-to-mouth resuscitation and emergency calls. The centerpiece is Tage, the CPR doll, built using a variety of sensors, actuators, and everyday materials, including an Easter egg for the head. This is among my favorite projects, because of the creative freedom and the introduction to new and exciting programming languages, software, and hardware. Find the code and an in-depth description of the project in the GitHub repository.',
      keyWords: ['Physical Interaction Design', 'Arduino'],
   },
   {
      id: 9,
      image: ArtWork,
      title: 'The Takeoff',
      links: [],
      description:
         'I have always loved art, especially when I get to create it myself.  This is a photo of me at the inauguration of my artwork “The Takeoff” with which I won an art competition hosted by Stockholms Studentbostäder. I designed it digitally using Adobe Illustrator and Procreate.',
      keyWords: ['Art', 'Fun!'],
   },
];

export default projectsData;
