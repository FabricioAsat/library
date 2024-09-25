import { useParams, useSearchParams } from "react-router-dom";
import { Header } from "../components/itemPage/Header";
import { Book } from "../components/itemPage/Book";
import { useState } from "react";
import { Container } from "../components/Container";

export const ItemP = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [searchParams] = useSearchParams();
  const type = searchParams.get("type");
  const { id } = useParams();

  return (
    <Container>
      <div className="relative flex flex-col w-full h-full">
        <Header isLoading={isLoading} />

        {type === "book" ? (
          <Book id={id as string} setIsLoading={setIsLoading} />
        ) : null}
      </div>
    </Container>
  );
};
