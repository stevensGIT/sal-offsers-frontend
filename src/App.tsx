import { QueryClientProvider, QueryClient } from "react-query";

import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "./theme";

import { Screen } from "./screen/Screen";

import "./App.css";

function App() {
  const client = new QueryClient();

  return (
    <QueryClientProvider client={client}>
      <ChakraProvider theme={theme}>
        <Screen />
      </ChakraProvider>
    </QueryClientProvider>
  );
}

export default App;
