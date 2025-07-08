// src/data/imageDataHero.ts
import imgHero_01_mobile from "../img/Hero/_DSC4179_mobile_wynik.webp";
import imgHero_01_tablet from "../img/Hero/DSC03307_tablet_wynik.webp";
import imgHero_01_desktop from "../img/Hero/DSC02726_desktop_wynik.webp";
import imgHero_02_mobile from "../img/Hero/_DSC5449_mobile_wynik.webp";
import imgHero_02_tablet from "../img/Hero/_DSC1057_tablet_wynik.webp";
import imgHero_02_desktop from "../img/Hero/DSC04967_desktop_wynik.webp";
import imgHero_03_mobile from "../img/Hero/_DSC8190_mobile_wynik.webp";
import imgHero_03_tablet from "../img/Hero/_DSC3904_tablet_wynik.webp";
import imgHero_03_desktop from "../img/Hero/DSC09834_desktop_wynik.webp";
import imgHero_04_mobile from "../img/Hero/_DSC8436_mobile_wynik.webp";
import imgHero_04_desktop from "../img/Hero/_DSC3904_desktop_wynik.webp";

interface ImageItem {
  id: string;
  srcMobile: string;
  srcTablet: string;
  srcDesktop: string;
}

const imageMMHero: ImageItem[] = [
  {
    id: "MM_01",
    srcMobile: imgHero_01_mobile,
    srcTablet: imgHero_01_tablet,
    srcDesktop: imgHero_01_desktop,
  },
  {
    id: "MM_02",
    srcMobile: imgHero_02_mobile,
    srcTablet: imgHero_02_tablet,
    srcDesktop: imgHero_02_desktop,
  },
  {
    id: "MM_03",
    srcMobile: imgHero_03_mobile,
    srcTablet: imgHero_03_tablet,
    srcDesktop: imgHero_03_desktop,
  },
  {
    id: "MM_04",
    srcMobile: imgHero_04_mobile,
    srcTablet: imgHero_02_tablet,
    srcDesktop: imgHero_04_desktop,
  },
];

export default imageMMHero;
