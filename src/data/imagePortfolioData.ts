// src/data/imagePortfolioData.ts

import imgPortfolio_01 from "../img/01_desktop_Hero.webp";
import imgPortfolio_02 from "../img/01_tablet_Hero.webp";
import imgPortfolio_03 from "../img/01_mobile_Hero.webp";
import imgPortfolio_04 from "../img/02_desktop_Hero.webp";
import imgPortfolio_05 from "../img/02_tablet_Hero.webp";
import imgPortfolio_06 from "../img/02_mobile_Hero.webp";
import imgPortfolio_07 from "../img/03_desktop_Hero.webp";
import imgPortfolio_08 from "../img/03_tablet_Hero.webp";
import imgPortfolio_09 from "../img/03_mobile_Hero.webp";

interface ImageItem {
  id: string;
  src: string;
  alt: string;
}

const imagePortfolioData: ImageItem[] = [
    { id: "portfolio_01", src: imgPortfolio_01, alt: "Photo of a scenic mountain landscape" },
    { id: "portfolio_02", src: imgPortfolio_02, alt: "Photo of a serene forest in the morning" },
    { id: "portfolio_03", src: imgPortfolio_03, alt: "Photo of a vibrant city skyline at sunset" },
    { id: "portfolio_04", src: imgPortfolio_04, alt: "Photo of a beautiful golden desert dune" },
    { id: "portfolio_05", src: imgPortfolio_05, alt: "Photo of a calm ocean during twilight" },
    { id: "portfolio_06", src: imgPortfolio_06, alt: "Photo of a serene forest in the morning" },
    { id: "portfolio_07", src: imgPortfolio_07, alt: "Photo of a vibrant city skyline at sunset" },
    { id: "portfolio_08", src: imgPortfolio_08, alt: "Photo of a beautiful golden desert dune" },
    { id: "portfolio_09", src: imgPortfolio_09, alt: "Photo of a calm ocean during twilight" },
];

export default imagePortfolioData;
