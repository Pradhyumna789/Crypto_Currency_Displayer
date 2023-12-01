import { Avatar, Box, Stack, Text, VStack } from "@chakra-ui/react";
import React from "react";

const avatarSrc = "https://media.licdn.com/dms/image/D5603AQEFyHU1iy6QjQ/profile-displayphoto-shrink_400_400/0/1672638706366?e=1706745600&v=beta&t=GDBaRoqQTIGHNOS9bqNlHhJ38WYrevLntzhQwlZilQw";
const Footer = () => {
  return (
    <Box
      bgColor={"blackAlpha.900"}
      color={"whiteAlpha.700"}
      minH={"48"}
      px={"16"}
      py={["16", "8"]}
    >
      <Stack direction={["column", "row"]} h={"full"} alignItems={"center"}>
        <VStack w={"full"} alignItems={["center", "flex-start"]}>
          <Text fontWeight={"bold"}>About Us</Text>
          <Text
            fontSize={"sm"}
            letterSpacing={"widest"}
            textAlign={["center", "left"]}
          >
            We are the best crypto trading app in India, we provide our guidance
            at a very cheap price.
          </Text>
        </VStack>

        <VStack>
          <Avatar boxSize={"3xs"} mt={["4", "0"]} src={avatarSrc} />
          <Text fontSize={"1.5rem"}>Our Founder</Text>
        </VStack>
      </Stack>
    </Box>
  );
};

export default Footer;