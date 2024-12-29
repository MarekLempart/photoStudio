// src/data/imageData.ts

import imgRegis_01 from "../img/_DSC6963-Edit.webp";
import imgRegis_02 from "../img/_DSC6919.webp";
import imgRegis_03 from "../img/_DSC6928.webp";
import imgRegis_04 from "../img/_DSC7418-Edit.webp";
import imgRegis_05 from "../img/_DSC6937-Edit.webp";

// Definicja typu dla kazdego elementu w tablicy obrazów

interface ImageItem {
    id: string;
    src: string;
}

// Tworzenie tablicy obrazów z typu 'ImageItem[]'

const imageRegis: ImageItem[] = [
    { id: "Regis_01", src: imgRegis_01 },
    { id: "Regis_02", src: imgRegis_02 },
    { id: "Regis_03", src: imgRegis_03 },
    { id: "Regis_04", src: imgRegis_04 },
    { id: "Regis_05", src: imgRegis_05 },
];

export default imageRegis;
