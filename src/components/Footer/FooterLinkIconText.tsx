import { Image, Link } from "@chakra-ui/react";

type Props = {
  icon: string;
  href: string;
  children?: string;
};

const FooterLinkIconText = ({ icon, href, children }: Props) => {
  return (
    <Link
      href={href}
      isExternal
      display="flex"
      justifyContent="center"
      alignItems="center"
      gap={2}
    >
      <Image
        src={icon}
        alt="telegram icon"
        w={6}
        h={6}
        transition="ease-in-out"
        transitionDuration="0.15s"
        _hover={{ transform: "scale(1.1)" }}
      />
      {children}
    </Link>
    // <Link
    //   isExternal
    //   display="flex"
    //   href={href}
    //   justifyContent="center"
    //   alignItems="center"
    //   gap={2}
    //   transition="ease-in-out"
    //   transitionDuration="0.15s"
    //   _hover={{ transform: "scale(1.1)" }}
    // >
    //   <Image src={icon} alt="telegram icon" w={6} h={6} />
    //   {children}
    // </Link>
  );
};

export default FooterLinkIconText;
