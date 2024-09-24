import { useState } from "react";
import { Container } from "../components/Container";
import { LabelAndImput } from "../components/LabelAndImput";
import { ICollection } from "../types/collections";
import { createCollection } from "../api/collectionReq";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

export const AddColl = () => {
  const [collection, setCollection] = useState<ICollection>({
    Name: "",
    ID: "",
    CreatedAt: new Date(),
    UpdatedAt: new Date(),
  });
  const navigateTo = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCollection({ ...collection, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    async function request() {
      const response = await createCollection(collection);
      if (!response.status) {
        toast.error(response.message);
        return;
      }

      toast.success(response.message);
      navigateTo("/");
    }

    request();
  };

  return (
    <Container>
      <h1 className="text-3xl font-bold">Agregar una colección</h1>

      <form
        className="flex flex-col px-4 mt-20 gap-y-4"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-bold">Collection title</h2>
        <LabelAndImput
          label=""
          id="Name"
          name="Name"
          value={collection.Name}
          placeholder="Collection title"
          onChange={handleChange}
          tinyInfo="Limit 40 characters."
        />

        <input
          type="submit"
          value="Create collection"
          className="px-5 py-2 mt-10 font-bold text-white rounded-md cursor-pointer bg-sky-500 max-w-40"
        />
      </form>
    </Container>
  );
};
