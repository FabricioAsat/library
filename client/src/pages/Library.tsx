import { useState } from "react";

import searchImg from "../assets/search.svg";

import { Container } from "../components/Container";
import { CollectionSelector } from "../components/Library/CollectionSelector";
import { Items } from "../components/Library/Items";

export const Library = () => {
  const [search, setSearch] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(search);
  };

  return (
    <Container>
      <form
        onSubmit={handleSubmit}
        className="flex items-center w-full gap-2 max-w-[768px]"
      >
        <label htmlFor="search">
          <img src={searchImg} alt="search" className="w-8 h-8" />
        </label>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Start searching..."
          className="w-full p-2 text-lg font-bold rounded-md outline-none placeholder:italic"
          autoComplete="off"
        />
      </form>

      <CollectionSelector />
      <Items />
    </Container>
  );
};
