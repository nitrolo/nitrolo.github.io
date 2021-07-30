import { v4 as uuidv4 } from 'uuid';
import DigitRecog from '../images/digitRecog.png';
import NoteTakingApp from '../images/note-taking-app.jpg';

const projects = [
  {
    id: uuidv4(),
    name: 'Handwritten Digit Recognition using CNN',
    desc: 'Developed a CNN model which correctly classifies handwritten digits based on the pixel values given as features. Built a Python application for real-time digit recognition using the OpenCV library.',
    img: DigitRecog,
  },
  {
    id: uuidv4(),
    name: 'Note-taking app',
    desc: 'Built a note-taking app with add and delete features using ReactJS.',
    img: NoteTakingApp,
  },
];

export default projects;
