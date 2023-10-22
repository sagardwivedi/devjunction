import { IconType } from "react-icons";
import { BiLogoGithub, BiLogoGitlab, BiLogoTwitter } from "react-icons/bi";

interface PlatformOptionsProps {
  id: number;
  logo: IconType;
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
];
