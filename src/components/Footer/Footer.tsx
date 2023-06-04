import { Flex, GridItem, Text } from "@chakra-ui/react";

import icon_logo from "../../assets/logo.svg";
import icon_email from "../../assets/mail.svg";
import icon_github from "../../assets/github.svg";
import icon_linkedin from "../../assets/linkedin.svg";
import icon_telegram from "../../assets/telegram.svg";
import FooterLinkIcon from "./FooterLinkIcon";
import FooterLinkIconText from "./FooterLinkIconText";

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
        justifyContent={{ base: "center", md: "space-between" }}
        alignItems={{ base: "flex-start", md: "center" }}
        rowGap={4}
        columnGap={{ md: 8 }}
      >
        <FooterLinkIconText
          icon={icon_logo}
          href={"https://www.denis-shamansky.com/"}
        >
          Денис Шаманский
        </FooterLinkIconText>
        <FooterLinkIconText
          icon={icon_email}
          href={"mailto:d.g.shaman@yandex.ru"}
        >
          d.g.shaman@yandex.ru
        </FooterLinkIconText>
      </Flex>
      <Flex
        display="inline-flex"
        flexDirection={{ base: "column", md: "row" }}
        justifyContent={{ base: "center", md: "space-between" }}
        rowGap={4}
      >
        <Text textAlign="end" display={{ md: "none" }}>
          Медиа
        </Text>
        <Flex gap={2}>
          <FooterLinkIcon
            icon={icon_telegram}
            href={"https://t.me/Denis_Shamanskiy"}
          />
          <FooterLinkIcon
            icon={icon_github}
            href={"https://github.com/DenisShamanskiy"}
          />
          <FooterLinkIcon
            icon={icon_linkedin}
            href={"https://www.linkedin.com/in/denis-shamanskiy/"}
          />
        </Flex>
      </Flex>
    </GridItem>
  );
};

export default Footer;
