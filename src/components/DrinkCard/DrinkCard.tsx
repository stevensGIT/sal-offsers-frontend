import { HStack, Image, Heading, Flex, SimpleGrid } from "@chakra-ui/react";

import { DrinkType } from "./../types";

// @ts-ignore
import { ShakeSlow } from "reshake";

export default function DrinkCard({
  title,
  notes,
  logo,
  abv,
  vector,
}: DrinkType) {
  return (
    <HStack p="10px" position="relative" border="10px solid white" borderRadius="20px">
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
        <ShakeSlow
          h={0}
          int={35}
          max={100}
          fixed={true}
          fixedStop={true}
          freeze={false}
        >
          <Image src={vector} />
        </ShakeSlow>
      </Flex>
    </HStack>
  );
}
