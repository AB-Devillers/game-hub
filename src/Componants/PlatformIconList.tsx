import { Platform } from "../hooks/useGame";
import {
  FaWindows,
  FaPlaystation,
  FaApple,
  FaAndroid,
  FaLinux,
  FaXbox,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { IconType } from "react-icons";
interface props {
  platform: Platform[];
}
const PlatformIconList = ({ platform }: props) => {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    linux: FaLinux,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    mac: FaApple,
    android: FaAndroid,
    ios: MdPhoneIphone,
    web: BsGlobe,
  };
  return (
    <>
      {platform.map((p) => {
        const IconComponent = iconMap[p.slug];
        return IconComponent ? (
          <IconComponent
            key={p.slug}
            className="inline-block mx-1 text-gray-500"
          />
        ) : null;
      })}
    </>
  );
};

export default PlatformIconList;
