import { v4 as uuidv4 } from 'uuid';
import DigitRecog from '../images/digitRecog.png';

const projects = [
  {
    id: uuidv4(),
    name: 'Handwritten Digit Recognition using CNN',
    desc: 'Developed a CNN model which correctly classifies handwritten digits based on the pixel values given as features. Built a Python application for real-time digit recognition using the OpenCV library.',
    img: DigitRecog,
  },
];

export default projects;
