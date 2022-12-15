import { ChakraProvider, SimpleGrid } from "@chakra-ui/react";

import { DrinkList } from "./components/DrinkList";

import { drinksList } from "./drinks";

function App() {
  const { drinks } = drinksList;

  return (
    <ChakraProvider>
      <SimpleGrid columns={2} spacing="40px" p="40px" minChildWidth="500px">
        <DrinkList drinks={drinks} />
        <DrinkList drinks={drinks} />
      </SimpleGrid>
    </ChakraProvider>
  );
}

export default App;
