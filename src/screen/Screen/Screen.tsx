import { SimpleGrid } from "@chakra-ui/react";

import { DrinkList } from "../../components/DrinkList";

import { useQuery } from "react-query";

const ENDPOINT = "https://4151-51-148-179-254.eu.ngrok.io/api/drinks";

export default function Screen() {
  const { data } = useQuery(["drinks"], async () => {
    const res = await fetch(ENDPOINT);
    const data = await res.json();

    const categories = Object.keys(data);

    const drinks = categories.map((category) => ({
      name: category,
      drinks: data[category].map((drink: any) => ({
        id: drink.id,
        title: drink.brewery_name,
        notes: drink.description,
        logo: drink.image_url,
        abv: drink.abv,
      })),
    }));

    return drinks;
  });

  return (
    <SimpleGrid columns={2} spacing="40px" p="40px" minChildWidth="500px">
      {data?.map((drink) => (
        <DrinkList key={drink.name} name={drink.name} drinks={drink.drinks} />
      ))}
    </SimpleGrid>
  );
}
