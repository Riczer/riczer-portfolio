import { StaticImageData } from "next/image";
import CyberraversImage from "/public/cyberravers.png";
import CaribesImage from "/public/caribes.png";
import AIBoticsImage from "/public/aibotics.png";
import TheArtProjectImage from "/public/the-art-project.png";
import Desarrollos1405Image from "/public/desarrollos1405.png";
import TNWGImage from "/public/tnwg.png";

export interface ProjectType {
  title: string;
  description: string;
  image: StaticImageData;
  live?: string;
}

export const PROJECTS: ProjectType[] = [
  {
    title: "AIBotics",
    description:
      "Website of a robotics company showing, their products, the services they offer and many other details about the company.",
    image: AIBoticsImage,
    live: "https://www.aibotics.net/",
  },
  {
    title: "The Nifty Way Galaxy",
    description:
      "dApp to mint NFTs, which integrates a DAO, a gallery and generation of discount codes only for token holders.",
    image: TNWGImage,
    live: "https://www.theniftywaygalaxy.com/",
  },
  {
    title: "Cyberravers",
    description:
      "dApp to mint NFTs, which includes a song player and different informative sections about the project.",
    image: CyberraversImage,
    live: "https://cyberravers.vercel.app/",
  },
  {
    title: "Caribes Fan Club",
    description:
      "dApp to mint NFTs, where holders can claim exclusive content and merchandise.",
    image: CaribesImage,
    live: "https://caribesfanclub.com/",
  },

  {
    title: "The Art Project",
    description:
      "dApp to mint NFTs, where holders can access exclusive content from the creators. ",
    image: TheArtProjectImage,
    live: "https://the-art-project-sjkc-toxic-souls.vercel.app/",
  },
  {
    title: "Desarrollos1405",
    description:
      "WebApp developed for the management of oil tankers, where all the information about their cargo, personnel and destinations is controlled through an administrative panel.",
    image: Desarrollos1405Image,
  },
];
