import { HStack, Image, Heading, Flex, SimpleGrid } from "@chakra-ui/react";

import { DrinkType } from "./../types";

export default function DrinkCard({
  title,
  notes,
  logo,
  abv,
  vector,
}: DrinkType) {
  return (
    <HStack p="10px" position="relative" className="chalk-border">
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
          <Heading alignSelf="flex-start" size="md">
            {notes}
          </Heading>
        </Flex>
      </SimpleGrid>
      <Flex position="absolute" w="20%" right="-7%" transform="rotate(20deg)">
        <Image src={vector} />
      </Flex>
    </HStack>
  );
}
