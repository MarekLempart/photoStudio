// src/data/personImageData.ts
import person1 from "../img/Person/_DSC3672-Edit_wynik.webp";

interface ImageItemPerson {
  id: string;
  src: string;
}

const personImageData: ImageItemPerson[] = [
  { id: "person1", src: person1 },
];

export default personImageData;
