import CPR from '../../assets/pictures/cpr.jpeg';
import ArtWork from '../../assets/pictures/artwork.png';
import ColorSchemeStudy from '../../assets/pictures/colorSchemeStudy.png';
import StoryHunter from '../../assets/pictures/storyhunter.png';
import VR from '../../assets/pictures/vr.png';
import InformationScreen from '../../assets/pictures/informationScreen.png';
import Blandaren from '../../assets/pictures/blandaren.png';
import HideAndMeet from '../../assets/pictures/Hide_and_meet.png';
import Edulearn from '../../assets/pictures/edulearn.png';

const projectsData = [
   {
      id: 1,
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
      description:
         'Story Hunter is a web app where visitors can browse TV series. You can search for series, add them to your watchlist, see what’s trending or receive recommendations based on other series you like. For the adventurous, there is also an option for receiving randomized suggestions. Story Hunter was created in a group of four, using a model-view-presenter architecture. I was mainly responsible for the model and the presenters, meaning I worked less with CSS and more with JavaScript. Data was retrieved from The Movie Database (TMDB) API. For the live demo, feel free to use our guest account. Email: guest@gmail.com. Password: guest1.',
      keyWords: ['Web Development', 'React'],
   },
   {
      id: 2,
      image: HideAndMeet,
      title: 'Hide & Meet',
      links: [
         {
            link: 'https://drive.google.com/file/d/1egBN99wePSRnZie1saCc41BtbMA6mFo0/view?usp=sharing',
            buttonText: 'Workbook',
         },
      ],
      description:
         'Hide & Meet is an app prototype and the result of a double diamond design process which aimed to support introverted practices in a hypothetical future world of only introverted people. It provides people at parties with a fun way of socializing, ruling out the possibilities of face-to-face rejection or not having anything to talk about. The party attendees scan the environment with their mobile camera to find virtual objects that other people have placed in the room using AR technology. If you want to meet up with the creator of an object you find interesting, the object is both the meeting point and the conversation starter. Users are invited by the party host, and meeting invites only remain until the end of the party. The memories, however, are eternal and embodied in the personal objects of others which the user can collect on their virtual memory shelf. Check out the workbook for details on the design process!',
      keyWords: ['Interaction Design'],
   },

   {
      id: 3,
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
      description: (
         <p>
            I am the first author for a conference paper called Preparing for
            the Future for All which was published in EDULEARN22 Proceedings.
            The paper reports on a research project about accessibility
            education at KTH, which I was part of conducting. My responsibility
            was to chart course and learning activities with relation to the
            subject of accessibility.
            <br></br>
            <br></br>
            My lecturer, who I carried out the project with, first gained trust
            in me from reading another report of mine on accessibility. In that
            report, I propose a study to investigate how the learning management
            system used at KTH could be improved for people with cognitive
            disabilities. I linked it as a bonus report!
         </p>
      ),
      keyWords: ['Conference Paper', 'Accessibility'],
   },

   {
      id: 4,
      image: InformationScreen,
      title: 'Play Beyond Play',
      links: [
         {
            link: 'https://drive.google.com/file/d/1CsnUxK1v-UIV2AtePGUON0zo6z7nMkp7/view?usp=sharing',
            buttonText: 'Report',
         },
      ],
      description:
         'As a final project of a KTH course on accessibility, three classmates and I investigated how the information screens in the Play Beyond Play exhibition at Tekniska Museet could be redesigned to improve user experience for visitors with dyslexia. Accessibility guidelines were used for evaluating the original design and for creating a new prototype. Both the original version and then new prototype were then subjects for user testing. Take a look at the report for more information about the process and for pictures of the prototype.',
      keyWords: ['Interaction Design', 'Accessibility'],
   },

   {
      id: 5,
      image: ColorSchemeStudy,
      title: 'Color Palettes & Memory',
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
         'This project aimed at investigating how the degree of similarity in the color scheme of a website affects memorability of its content and user experience. With a Wix website template as a starting point, two websites which were identical in all aspects but the color scheme were created. An experiment with a total of 12 participants was then conducted for comparison. The project was too small-scaled to yield any statistically significant results, but it did teach me a lot about the process of perceptual experiments. Please have a look at the poster which summarizes the study, or why not read the whole report?',
      keyWords: ['User Research'],
   },
   {
      id: 6,
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
         "In this study, three classmates and I extended the existing work of my friend’s bachelor's thesis on how to communicate weight in virtual reality. To their already implemented virtual environment where users throw virtual spheres at a target, we added auditory and/or haptic feedback as a response to ball movement. The aim was to see if varying frequencies and amplitudes in the feedback could induce a sense of weight difference between balls. Models for sound and haptic feedback were carefully designed with regards to previous research on cross-sensory correspondences between audio, haptics and weight. User tests showed that both audio and haptics can effectively communicate ball weight. However, no statistically significant results were shown when comparing sound and haptic feedback.",
      keyWords: ['User Research', 'Unity', 'VR'],
   },

   {
      id: 7,
      image: CPR,
      title: 'How to Save a Life',
      links: [
         {
            link: 'https://github.com/hannasnarberg/How-to-Save-a-Life',
            buttonText: 'GitHub',
         },
      ],
      description:
         'How to Save a Life is an interactive simulation of a life-saving process involving chest compressions, mouth-to-mouth resuscitation and emergency calls. The star of the show is Tage, the CPR doll, who was created using a wide range of sensors and actuators as well as everyday materials found at home (yes, the head is an easter egg). This is among the most engaging projects I have been involved with at KTH, since there was room for a lot of creativity and because I was introduced to new and exciting programming languages, software and hardware. To read more, please visit the GitHub Repository.',
      keyWords: ['Physical Interaction Design', 'Arduino'],
   },

   {
      id: 8,
      image: Blandaren,
      title: 'Bländaren',
      links: [],
      description:
         "In 2021, I participated in the KTH Media Technology chapter’s reception of new students. My main role was editor in chief of the reception's weekly magazine Bländaren. I gained experience in leadership and in working with inDesign, Illustrator and Procreate. Above you can see the front covers of each publication. I illustrated the second edition, depicting a scene from one of my favorite movies, The Shining.",
      keyWords: ['Graphic Design', 'Leadership'],
   },
   {
      id: 9,
      image: ArtWork,
      title: 'The Takeoff',
      links: [],
      description:
         'I have always loved art, especially when I get to create it myself.  Here is me at the inauguration of my artwork “The Takeoff” with which I won an art competition hosted by Stockholms Studentbostäder. The design was created digitally using Adobe Illustrator and Procreate.',
      keyWords: ['Art', 'Fun!'],
   },
];

export default projectsData;
