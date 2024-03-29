import CPR from '../../assets/pictures/cpr.jpeg';
import ColorSchemeStudy from '../../assets/pictures/colorSchemeStudy.png';
import StoryHunter from '../../assets/pictures/storyhunter.png';
import VR from '../../assets/pictures/vr.png';
import InformationScreen from '../../assets/pictures/informationScreen.png';
import HideAndMeet from '../../assets/pictures/Hide_and_meet.png';
import Edulearn from '../../assets/pictures/edulearn.png';
import RobinHoodCalc from '../../assets/pictures/robinHoodCalc.png';
import GameDev from '../../assets/pictures/gameDev.png';

import CPRCompressed from '../../assets/pictures/compressed/cpr.jpeg';
import ColorSchemeStudyCompressed from '../../assets/pictures/compressed/colorSchemeStudy.png';
import StoryHunterCompressed from '../../assets/pictures/compressed/storyhunter.png';
import VRCompressed from '../../assets/pictures/compressed/vr.png';
import InformationScreenCompressed from '../../assets/pictures/compressed/informationScreen.png';
import HideAndMeetCompressed from '../../assets/pictures/compressed/Hide_and_meet.png';
import EdulearnCompressed from '../../assets/pictures/compressed/edulearn.png';
import RobinHoodCalcCompressed from '../../assets/pictures/compressed/robinHoodCalc.png';
import GameDevCompressed from '../../assets/pictures/compressed/gameDev.png';

const projectsData = [
   {
      id: 1,
      image: RobinHoodCalc,
      compressedImage: RobinHoodCalcCompressed,
      title: 'Robin Hood Calculator',
      urlParam: 'Robin-Hood-Calculator',
      links: [
         {
            link: 'https://robinhoodcalculator.web.app/',
            buttonText: 'Live Demo',
         },
         {
            link: 'https://github.com/Amandabru/RobinHoodCalc',
            buttonText: 'GitHub',
         },
      ],
      description: (
         <p>
            The Robin Hood Calculator is a web application that visualizes how
            income is distributed worldwide. It also lets the user make a
            difference through tax adjustments. The so-called Robin Hood taxes
            are taken from the wealthier individuals and given to those in
            extreme poverty. The main goal is to create awareness about income
            inequality. It was built by me and four classmates using React and
            D3.js. My primary role involved working on the interactive aspect
            using React. Follow the links above for a live demo and a video
            demo.
         </p>
      ),
      keyWords: ['Web Development', 'React', 'D3'],
   },
   {
      id: 2,
      image: GameDev,
      compressedImage: GameDevCompressed,
      title: 'Slipped Away',
      urlParam: 'Slipped-Away',
      links: [
         {
            link: 'https://slippedawaygame.com/',
            buttonText: 'Website',
         },
         {
            link: 'https://drive.google.com/file/d/1T-yvIgVP7z9pm0u6l_RIYN7uy3jPx9ed/view?usp=sharing',
            buttonText: 'Documentation',
         },
      ],
      description: (
         <p>
            Slipped Away is a puzzle game where the player moves between two
            parallel worlds, the world of the living and the world of the dead.
            The two worlds are imperfect reflections of one another, demanding
            the player to navigate a cycle of death and rebirth to solve the
            puzzles, all in pursuit of reconnecting with a grandmother that has
            passed on. This was a group work where I was the art director,
            responsible for the design of the characters and the background, as
            well as character animations. The art was created using Procreate
            and the animations using Unity’s 2D Animation package.
         </p>
      ),
      keyWords: ['Game Development', 'Design'],
   },
   {
      id: 3,
      image: StoryHunter,
      compressedImage: StoryHunterCompressed,
      title: 'Story Hunter',
      urlParam: 'Story-Hunter',
      links: [
         {
            link: 'https://gits-15.sys.kth.se/hannasn/Project-Group-37',
            buttonText: 'GitHub',
         },
         {
            link: 'https://storyhunter-2a3c7.web.app/',
            buttonText: 'Live Demo',
         },
      ],
      description: (
         <p>
            Story Hunter is a web app for browsing series. The user can search,
            add to their watchlist, stay current with trending shows or get
            personalized recommendations. The website was developed by a team of
            four, using a model-view-presenter architecture. I was mainly
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
      id: 4,
      image: HideAndMeet,
      compressedImage: HideAndMeetCompressed,
      title: 'Hide & Meet',
      urlParam: 'Hide-and-Meet',
      links: [
         {
            link: 'https://drive.google.com/file/d/1egBN99wePSRnZie1saCc41BtbMA6mFo0/view?usp=sharing',
            buttonText: 'Workbook',
         },
      ],
      description: (
         <p>
            Hide & Meet is a mobile app prototype with the purpose of supporting
            introverted practices in a hypothetical world of only introverts. It
            offers party guests a unique way to socialize, decreasing the risks
            of face-to-face rejection and lack of conversation starters. Using
            AR technology, users can scan their surroundings with their mobile
            camera to discover virtual objects placed in the room by other
            guests. If a user finds an object of interest and its creator is
            open to meeting, the object becomes both the meeting point and a
            conversation starter. The prototype was designed through a double
            diamond process. Want to learn more? Take a look at the workbook!
         </p>
      ),
      keyWords: ['Interaction Design'],
   },

   {
      id: 5,
      image: Edulearn,
      compressedImage: EdulearnCompressed,
      title: 'Preparing for the Future for All',
      urlParam: 'Preparing-for-the-Future-for-All',
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
            I am the first author of a conference paper titled Preparing for the
            Future for All, published in EDULEARN22 Proceedings. The paper
            presents a research project on accessibility education at technical
            universities, where my responsibility was to chart courses and
            learning activities at KTH related to accessibility. I was offered
            to take part in the project thanks to another report I wrote on
            accessible web applications. In that report, I propose a study to
            investigate how the KTH learning management system could be improved
            for people with cognitive disabilities. I linked it above as a bonus
            report!
         </p>
      ),
      keyWords: ['Conference Paper', 'Accessibility'],
   },

   {
      id: 6,
      image: InformationScreen,
      compressedImage: InformationScreenCompressed,
      title: 'Play Beyond Play',
      urlParam: 'Play-Beyond-Play',
      links: [
         {
            link: 'https://drive.google.com/file/d/1CsnUxK1v-UIV2AtePGUON0zo6z7nMkp7/view?usp=sharing',
            buttonText: 'Report',
         },
      ],
      description: (
         <p>
            In the final project of a KTH course on accessible design, my team
            of four assessed the information screens at the Play Beyond Play
            exhibition at Tekniska Museet and prototyped a new design with a
            focus on enhanced user experience for visitors with dyslexia. Our
            work was guided by accessibility guidelines and user tests on both
            the original design and the new prototype. For an overview of our
            process and a visual of the prototype, check out the report.
         </p>
      ),
      keyWords: ['Interaction Design', 'Accessibility'],
   },

   {
      id: 7,
      image: ColorSchemeStudy,
      compressedImage: ColorSchemeStudyCompressed,
      title: 'Color Relations & Memory',
      urlParam: 'Color-Relations-and-Memory',
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
      description: (
         <p>
            The purpose of this study that I conducted with three classmates was
            to explore the impact of color similarity on memorability of website
            content and user experience. Using a Wix website template as a base,
            two identical websites were created, differing only in their color
            scheme. Then twelve participants took part in experiments and data
            was gathered for comparison. While the results of this small-scale
            study were far from statistically significant, I learned a lot about
            the process of conducting perceptual experiments. Take a look at the
            poster for a summary or read the full report for more information.
         </p>
      ),
      keyWords: ['User Research'],
   },
   {
      id: 8,
      image: VR,
      compressedImage: VRCompressed,
      title: 'Weight Perception in VR',
      urlParam: 'Weight-Perception-in-VR',
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
      description: (
         <p>
            In this study, my team of three extended an existing bachelor's
            thesis on communicating weight in virtual reality. To their already
            implemented virtual environment where users throw spheres at a
            target, we added auditory and/or haptic feedback to respond to ball
            movement. The goal was to investigate if varying frequencies and
            amplitudes in the feedback could convey a sense of weight difference
            between balls. Models for auditory and haptic feedback were designed
            based on prior research on cross-sensory correspondences between
            audio, haptics, and weight. User testing revealed that both audio
            and haptics effectively communicate ball weight, but there were no
            notable differences in performance between the different feedback
            systems.
         </p>
      ),
      keyWords: ['User Research', 'Unity', 'VR'],
   },

   {
      id: 9,
      image: CPR,
      compressedImage: CPRCompressed,
      title: 'How to Save a Life',
      urlParam: 'How-to-Save-a-Life',
      links: [
         {
            link: 'https://github.com/hannasnarberg/How-to-Save-a-Life',
            buttonText: 'GitHub',
         },
      ],
      description: (
         <p>
            How to Save a Life is an interactive simulation of a life-saving
            process involving chest compressions, mouth-to-mouth resuscitation
            and emergency calls. The centerpiece is Tage, a CPR doll that was
            built using a variety of sensors, actuators, and everyday materials,
            including an Easter egg for the head. This is among my favorite
            projects because of the creative freedom and the introduction to a
            lot of new programming languages, software, and hardware. Find the
            code and an in-depth description of the project in the GitHub
            repository.
         </p>
      ),
      keyWords: ['Physical Interaction Design', 'Arduino'],
   },
];

export default projectsData;
