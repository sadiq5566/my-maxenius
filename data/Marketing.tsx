import MarketingServicesSvg from "../public/assets/svgs/MarketingServicesSvg";
import SocialMediaMarketingSVG from "../public/assets/svgs/SocialMediaMarketingSVG";
import ZigBlackArrowSVG from "../public/assets/svgs/ZigBlackArrowSVG";
import ContentMarketingSVG from "../public/assets/svgs/ContentMarketingSVG";
import { Market } from "../Interfaces/marketInterface";

export const marketingData: Market[] = [
  {
    id: 1,
    svg: ZigBlackArrowSVG,
    title: "Search Engine Optimization",
    description:
      "Traffic Warrior is the fastest way to get more traffic. Your website needs traffic to survive."
  },
  {
    id: 2,
    svg: SocialMediaMarketingSVG,
    title: "Social Media Marketing",
    description:
      "Traffic Warrior is the fastest way to get more traffic. Your website needs traffic to survive."
  },
  {
    id: 3,
    svg: MarketingServicesSvg,
    title: "Marketing & Campaign",
    description:
      "Traffic Warrior is the fastest way to get more traffic. Your website needs traffic to survive."
  },
  {
    id: 4,
    svg: ContentMarketingSVG,
    title: "In Bond / Content Marketing",
    description:
      "Traffic Warrior is the fastest way to get more traffic. Your website needs traffic to survive."
  }
];
