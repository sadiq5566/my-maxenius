import { Services } from "../Interfaces/servicesInterface";
import WebDesignSVG from "../public/assets/svgs/WebDesignSVG";
import CustomDevelopmentSVG from "../public/assets/svgs/CustomDevelopmentSVG";
import UxUiSVG from "../public/assets/svgs/UxUiSVG";
import QualityAssuranceSVG from "../public/assets/svgs/QualityAssuranceSVG";
import DataEntrySVG from "../public/assets/svgs/DataEntrySVG";
import DiscoveryWorkshopSVG from "../public/assets/svgs/DiscoveryWorkshopSVG";
import MobileDevelopmentSVG from "../public/assets/svgs/MobileDevelopmentSVG";
import SalesforceSVG from "../public/assets/svgs/SalesforceSVG";
import SalesforceIntSVG from "../public/assets/svgs/SalesforceIntSVG";

export const servicesData: Services[] = [
  {
    id: 1,
    svg: WebDesignSVG,
    title: "Web Design",
    description:
      "Our experts know how to craft unique experiences to cater to the markets our customers operate within."
  },
  {
    id: 2,
    svg: CustomDevelopmentSVG,
    title: "Custom Development",
    description:
      "We build custom software for leading global companies, startups, and SMBs."
  },
  {
    id: 3,
    svg: UxUiSVG,
    title: "UX/UI Design",
    description:
      "Our team of experienced product designers & developers help you to build successful digital products."
  },
  {
    id: 4,
    svg: QualityAssuranceSVG,
    title: "Quality Assurance",
    description:
      "Our approach for QA is balanced between the need to deliver stable releases & the need to do so with each sprint."
  },
  {
    id: 5,
    svg: DataEntrySVG,
    title: "Data Entry",
    description:
      "We staff technical data entry specialists capable of formalizing the best approach for our customer's needs."
  },
  {
    id: 6,
    svg: DiscoveryWorkshopSVG,
    title: "Discovery Workshop",
    description:
      "Our two-week collaborative discovery workshop will help you define your ideas and business strategies."
  },
  {
    id: 7,
    svg: MobileDevelopmentSVG,
    title: "Mobile Development",
    description:
      "If you’re looking to make something that changes, our engineers ensure they deliver a product that stands out."
  },
  {
    id: 8,
    svg: SalesforceIntSVG,
    title: "Salesforce integrations",
    description: "Our team regularly provides middleware,"
  },
  {
    id: 9,
    svg: SalesforceSVG,
    title: "Salesforce",
    description:
      "We help you development robust and reliable Salesforce Solutions to surpass your business expectations."
  }
];
