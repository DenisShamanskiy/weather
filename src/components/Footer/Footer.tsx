import { Flex, GridItem, Text } from "@chakra-ui/react";
import icon_logo from "../../assets/logo.svg";
import icon_email from "../../assets/mail.svg";
import icon_github from "../../assets/github.svg";
import icon_linkedin from "../../assets/linkedin.svg";
import icon_telegram from "../../assets/telegram.svg";
import FooterLink from "./FooterLink";

const Footer = () => {
  return (
    <GridItem
      colStart={1}
      colEnd={{ base: 2, md: 13 }}
      rowStart={{ base: 6, md: 7 }}
      rowEnd={{ base: 7, md: 8 }}
      display={{ base: "flex", md: "flex" }}
      justifyContent="space-between"
      flexWrap="wrap"
      gap={4}
      px={{ base: 6, md: 0 }}
      py={{ base: 12, md: 2 }}
      color="white"
      borderTop="1px"
      borderColor="rgba(255,255,255, 0.2)"
    >
      <Flex
        display="inline-flex"
        flexDirection={{ base: "column", md: "row" }}
        justifyContent="center"
        gap={2}
        columnGap={{ md: 8 }}
      >
        <FooterLink icon={icon_logo} href={"https://www.denis-shamansky.com/"}>
          Денис Шаманский
        </FooterLink>
        <FooterLink icon={icon_email} href={"mailto:d.g.shaman@yandex.ru"}>
          d.g.shaman@yandex.ru
        </FooterLink>
      </Flex>
      <Flex
        display="inline-flex"
        flexDirection={{ base: "column", md: "row" }}
        justifyContent="center"
        gap={2}
      >
        <Text fontSize="2xl" visibility={{ md: "hidden" }}>
          Медиа
        </Text>
        <Flex gap={2}>
          <FooterLink
            icon={icon_telegram}
            href={"https://t.me/Denis_Shamanskiy"}
          />
          <FooterLink
            icon={icon_github}
            href={"https://github.com/DenisShamanskiy"}
          />
          <FooterLink
            icon={icon_linkedin}
            href={"https://www.linkedin.com/in/denis-shamanskiy/"}
          />
        </Flex>
      </Flex>
    </GridItem>
  );
};

export default Footer;
