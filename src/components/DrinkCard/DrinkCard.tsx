import { HStack, Image, Heading, Text, Flex } from "@chakra-ui/react";

import { DrinkType } from "./../types";

export default function DrinkCard({ title, notes, logo, abv }: DrinkType) {
  return (
    <HStack border="1px solid red" p="15px" spacing="15px" borderRadius="30px">
      <Image src={logo} borderRadius="10px" />
      <Flex direction="column" h="100%" color="white">
        <Heading alignSelf="flex-start">
          {title} - {abv}
        </Heading>
        <Text>{notes}</Text>
      </Flex>
    </HStack>
  );
}
