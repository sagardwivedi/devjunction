import { IconType } from "react-icons";
import { AiFillGitlab } from "react-icons/ai";
import { PiGithubLogoFill } from "react-icons/pi";
import { RiTwitterXLine } from "react-icons/ri";

interface PlatformOptionsProps {
  id: number;
  logo: IconType;
  platform: string;
}

export const PlatformOptions: PlatformOptionsProps[] = [
  {
    id: 1,
    logo: PiGithubLogoFill,
    platform: "Github",
  },
  {
    id: 2,
    logo: AiFillGitlab,
    platform: "Gitlab",
  },
  {
    id: 3,
    logo: RiTwitterXLine,
    platform: "Twitter",
  },
];

interface PlatformData {
  backgroundColor: string;
  logo: IconType; // Replace 'string' with the actual type for your logo
}

export const platform: Record<string, PlatformData> = {
  Github: { backgroundColor: "bg-black", logo: PiGithubLogoFill },
  Gitlab: { backgroundColor: "bg-orange-500", logo: AiFillGitlab },
  Twitter: { backgroundColor: "bg-blue-500", logo: RiTwitterXLine },
};

export function getPlatformData(platformId: string): PlatformData {
  return platform[platformId];
}
