import { DrinkCard } from "../DrinkCard";

import { DrinkType } from "../types";

export default function DrinkList({ drinks }: { drinks: DrinkType[] }) {
  return (
    <>
      {drinks.map((drink) => (
        <DrinkCard {...drink} />
      ))}
    </>
  );
}
