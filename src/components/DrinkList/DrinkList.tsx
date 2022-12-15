import { DrinkCard } from "../DrinkCard";

type Drink = {
  id: number;
  title: string;
  abv: string;
  logo: string;
  notes: string;
};

export default function DrinkList({ drinks }: { drinks: Drink[] }) {
  return (
    <>
      {drinks.map((drink) => (
        <DrinkCard {...drink} />
      ))}
    </>
  );
}
