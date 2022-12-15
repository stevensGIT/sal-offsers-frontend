import { QueryClientProvider, QueryClient } from "react-query";

import { ChakraProvider } from "@chakra-ui/react";

import { Screen } from "./screen/Screen";

function App() {
  const client = new QueryClient();

  return (
    <QueryClientProvider client={client}>
      <ChakraProvider>
        <Screen />
      </ChakraProvider>
    </QueryClientProvider>
  );
}

export default App;
