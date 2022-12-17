import {
  HStack,
  Image,
  Heading,
  Text,
  Flex,
  SimpleGrid,
} from "@chakra-ui/react";

import { DrinkType } from "./../types";

export default function DrinkCard({
  title,
  notes,
  logo,
  abv,
  vector,
}: DrinkType) {
  console.log(title);
  return (
    <HStack p="15px" borderRadius="30px" position="relative">
      <Image
        style={{ width: "10%" }}
        src="https://cdn.shopify.com/s/files/1/0265/9441/0576/products/image001_41a231c9-bb13-4a1e-ac2d-cf1ee4701fdd.png?v=1647357508"
        borderRadius="10px"
      />
      <SimpleGrid columns={2} h="100%">
        <Flex direction="column" color="white" position="absolute">
          <Heading alignSelf="flex-start">
            {title} - {abv}
          </Heading>
          <Text>{notes}</Text>
        </Flex>
      </SimpleGrid>
      <Flex position="absolute" w="17%" right="0.5%">
        <Image src={vector} />
      </Flex>
    </HStack>
  );
}
