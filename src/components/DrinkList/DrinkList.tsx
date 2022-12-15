import { DrinkCard } from "../DrinkCard";

import { Heading, Flex } from "@chakra-ui/react";

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
      {drinks.map((drink) => (
        <DrinkCard key={drink.id} {...drink} />
      ))}
    </Flex>
  );
}
