// src/data/imageDataHero.ts

import imgHero_01_mobile from "../img/01_mobile_Hero.webp";
import imgHero_01_tablet from "../img/01_tablet_Hero.webp";
import imgHero_01_desktop from "../img/01_desktop_Hero.webp";
import imgHero_02_mobile from "../img/02_mobile_Hero.webp";
import imgHero_02_tablet from "../img/02_tablet_Hero.webp";
import imgHero_02_desktop from "../img/02_desktop_Hero.webp";
import imgHero_03_mobile from "../img/03_mobile_Hero.webp";
import imgHero_03_tablet from "../img/03_tablet_Hero.webp";
import imgHero_03_desktop from "../img/03_desktop_Hero.webp";
interface ImageItem {
  id: string;
  srcMobile: string;
  srcTablet: string;
  srcDesktop: string;
}

const imageRegisHero: ImageItem[] = [
  {
    id: "Regis_01",
    srcMobile: imgHero_01_mobile,
    srcTablet: imgHero_01_tablet,
    srcDesktop: imgHero_01_desktop,
  },
  {
    id: "Regis_02",
    srcMobile: imgHero_02_mobile,
    srcTablet: imgHero_02_tablet,
    srcDesktop: imgHero_02_desktop,
  },
  {
    id: "Regis_03",
    srcMobile: imgHero_03_mobile,
    srcTablet: imgHero_03_tablet,
    srcDesktop: imgHero_03_desktop,
  },
];

export default imageRegisHero;
