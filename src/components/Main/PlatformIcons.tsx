import { Icon } from "@chakra-ui/react";
import Platform from "../../entities/Platform";
import {
  FaWindows,
  FaPlaystation,
  FaLinux,
  FaAndroid,
  FaApple,
  FaXbox,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { IconType } from "react-icons";
import { HStack } from "@chakra-ui/react";

const PlatformIcons = ({ platform }: { platform: Platform[] }) => {
  const iconMap :{ [key:string] : IconType}= {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    android: FaAndroid,
    mac: FaApple,
    ios: MdPhoneIphone,
    linux: FaLinux,
    web: BsGlobe,
  };
  return (
    <>
        <HStack >
        {platform.map(p=>(
            <Icon key={p.id} as={iconMap[p.slug]} color={"gray.500"}  marginY={5}></Icon>
        ))}
        </HStack>
    </>
  );
};

export default PlatformIcons;
