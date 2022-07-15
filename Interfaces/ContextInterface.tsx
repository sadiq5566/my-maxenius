export interface ContextInterface {
  isLg?: boolean;
  setIsLg?: React.Dispatch<React.SetStateAction<boolean>> | undefined;
  isTab?: boolean;
  setIsTab?: React.Dispatch<React.SetStateAction<boolean>> | undefined;
  isMobile?: boolean;
  setIsMobile?: React.Dispatch<React.SetStateAction<boolean>> | undefined;
}
