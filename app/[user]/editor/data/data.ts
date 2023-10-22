import { IconType } from "react-icons";
import { BiLogoGithub, BiLogoGitlab, BiLogoTwitter } from "react-icons/bi";

interface PlatformOptionsProps {
  id: number;
  logo?: IconType;
  platform: string;
}

export const PlatformOptions: PlatformOptionsProps[] = [
  {
    id: 1,
    logo: BiLogoGithub,
    platform: "Github",
  },
  {
    id: 2,
    logo: BiLogoGitlab,
    platform: "Gitlab",
  },
  {
    id: 3,
    logo: BiLogoTwitter,
    platform: "Twitter",
  },
  {
    id: 4,
    platform: "Platform 4",
  },
  {
    id: 5,
    platform: "Platform 5",
  },
  {
    id: 6,
    platform: "Platform 6",
  },
  {
    id: 7,
    platform: "Platform 7",
  },
  {
    id: 8,
    platform: "Platform 8",
  },
  {
    id: 9,
    platform: "Platform 9",
  },
  {
    id: 10,
    platform: "Platform 10",
  },
];
