// src/data/personImageData.ts
import person1 from "../img/Person/_DSC3672-Edit_wynik.webp";
// import person3 from "../img/Person03_Marek.webp";

interface ImageItemPerson {
  id: string;
  src: string;
}

const personImageData: ImageItemPerson[] = [
  { id: "person1", src: person1 },
  // { id: "person3", src: person3 },
];

export default personImageData;
