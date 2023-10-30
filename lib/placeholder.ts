import { GitHubLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons";
import { IconProps } from "@radix-ui/react-icons/dist/types";

interface PlatformOptionsProps {
  id: number;
  logo: React.ForwardRefExoticComponent<
    IconProps & React.RefAttributes<SVGSVGElement>
  >;
  platform: string;
}

export const PlatformOptions: PlatformOptionsProps[] = [
  {
    id: 1,
    logo: GitHubLogoIcon,
    platform: "Github",
  },
  {
    id: 2,
    logo: TwitterLogoIcon,
    platform: "Twitter",
  },
];

interface PlatformData {
  backgroundColor: string;
  logo: React.ForwardRefExoticComponent<
    IconProps & React.RefAttributes<SVGSVGElement>
  >;
}

export const platform: Record<string, PlatformData> = {
  Github: { backgroundColor: "bg-black", logo: GitHubLogoIcon },
  Twitter: { backgroundColor: "bg-blue-500", logo: TwitterLogoIcon },
};

export function getPlatformData(platformId: string): PlatformData {
  return platform[platformId];
}
