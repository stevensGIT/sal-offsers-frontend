import { ChakraProvider } from "@chakra-ui/react";

import { DrinkList } from "./components/DrinkList";

import { drinksList } from "./drinks";

function App() {
  const { drinks } = drinksList;

  return (
    <ChakraProvider>
      <DrinkList drinks={drinks} />
    </ChakraProvider>
  );
}

export default App;
