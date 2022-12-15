import { DrinkCard } from "../DrinkCard";

import { Heading, Flex, VStack } from "@chakra-ui/react";

import { DrinkType } from "../types";

export default function DrinkList({
  name,
  drinks,
}: {
  name: string;
  drinks: DrinkType[];
}) {
  return (
    <Flex direction="column">
      <Heading color="white" mb="30px">
        {name}
      </Heading>
      <VStack w="100%" align="flex-start" spacing="30px">
        {drinks.map((drink) => (
          <DrinkCard key={drink.id} {...drink} />
        ))}
      </VStack>
    </Flex>
  );
}
