// src/data/imageData.ts

import imgFunctionalPatterns from "../img/System-functionalPatterns_09.webp";
import imgMotionData from "../img/System-motionData_11.webp";
import imgMovMed from "../img/System-movMed_10.webp";

// Definiujemy typ dla każdego elementu w tablicy obrazów
interface ImageItem {
  id: string;
  src: string;
}

// Tworzymy tablicę obrazów z typem `ImageItem[]`
const imagesMethodologySystem: ImageItem[] = [
  { id: "functionalPatterns", src: imgFunctionalPatterns },
  { id: "movMed", src: imgMovMed },
  { id: "motionData", src: imgMotionData },
];

export default imagesMethodologySystem;
