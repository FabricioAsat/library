import { Link } from "react-router-dom";

export const NoCollections = () => {
  return (
    <div className="flex flex-col items-center justify-center my-10 gap-y-2">
      <small className="text-sm italic font-semibold">
        Necesitas una colección para agregar un item
      </small>
      <nav className="flex items-center justify-center">
        <Link
          to="/addcollection"
          className="px-4 py-2 font-bold text-white rounded-md bg-neutral-800"
        >
          Crear una colección
        </Link>
      </nav>
    </div>
  );
};
