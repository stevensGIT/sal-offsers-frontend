import { SimpleGrid, Heading, Box, Image } from "@chakra-ui/react";

import { DrinkList } from "../../components/DrinkList";

import { useQuery } from "react-query";

import Bottle from "../../assets/beer.png";
import Bitter from "../../assets/bitter.png";
import Ale from "../../assets/brown-ale.png";
import Beer from "../../assets/glass.png";
import Stout from "../../assets/stout.png";
import PaleAle from "../../assets/pale-ale.png";

const ENDPOINT = "https://4151-51-148-179-254.eu.ngrok.io/api/drinks";

export default function Screen() {
  // const { data } = useQuery(["drinks"], async () => {
  //   const res = await fetch(ENDPOINT);
  //   const data = await res.json();

  //   const categories = Object.keys(data);

  //   const drinks = categories.map((category) => ({
  //     name: category,
  //     drinks: data[category].map((drink: any) => ({
  //       id: drink.id,
  //       title: drink.brewery_name,
  //       notes: drink.description,
  //       logo: drink.image_url,
  //       abv: drink.abv,
  //     })),
  //   }));

  //   return drinks;
  // });

  const data = [
    {
      name: "Craft",
      drinks: [
        {
          id: 1,
          title: "Brewery 1",
          notes: "Description 1",
          abv: "5.6",
          vector: Beer,
        },
        {
          id: 2,
          title: "Brewery 2",
          notes: "Description 2",
          abv: "5.6",
          vector: Bottle,
        },
        {
          id: 3,
          title: "Brewery 3",
          notes: "Description 3",
          abv: "5.6",
          vector: Bitter,
        },
      ],
    },
    {
      name: "Ales",
      drinks: [
        {
          id: 1,
          title: "Brewery 1",
          notes: "Description 1",
          abv: "5.6",
          vector: Ale,
        },
        {
          id: 2,
          title: "Brewery 2",
          notes: "Description 2",
          abv: "5.6",
          vector: Stout,
        },
        {
          id: 3,
          title: "Brewery 3",
          notes: "Description 3",
          abv: "5.6",
          vector: PaleAle,
        },
      ],
    },
  ];

  return (
    <Box p="40px">
      <Heading size="4xl" textAlign="center" mb="40px" color="white">
        ON TAP 🤤
      </Heading>
      <SimpleGrid columns={2} spacing="40px" minChildWidth="500px">
        {data?.map((drink) => (
          <DrinkList key={drink.name} name={drink.name} drinks={drink.drinks} />
        ))}
      </SimpleGrid>
    </Box>
  );
}
