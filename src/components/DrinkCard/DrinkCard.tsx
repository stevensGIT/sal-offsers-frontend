import { HStack, Avatar, Heading, Text, Flex } from "@chakra-ui/react";

type Props = {
  id: number;
  title: string;
  abv: string;
  logo: string;
  notes: string;
};

export default function DrinkCard({ title, notes, logo, abv }: Props) {
  return (
    <HStack border="1px solid red" p="15px" spacing="15px" borderRadius="30px">
      <Avatar src={logo} size="2xl" />
      <Flex direction="column" border="1px solid red" h="100%" color="white">
        <Heading alignSelf="flex-start">
          {title} - {abv}
        </Heading>
        <Text>{notes}</Text>
      </Flex>
    </HStack>
  );
}
