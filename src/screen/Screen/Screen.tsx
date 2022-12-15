import { SimpleGrid } from "@chakra-ui/react";

import { DrinkList } from "../../components/DrinkList";

import { drinksList } from "../../drinks";

export default function Screen() {
  const { drinks } = drinksList;

  return (
    <SimpleGrid columns={2} spacing="40px" p="40px" minChildWidth="500px">
      <DrinkList drinks={drinks} />
      <DrinkList drinks={drinks} />
    </SimpleGrid>
  );
}
