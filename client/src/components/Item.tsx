import { useNavigate } from "react-router-dom";

export const Item = ({
  type,
  title,
  subtitle,
  image,
  alternativeImage,
  id,
}: {
  type: string;
  title: string;
  subtitle: string;
  image: string;
  alternativeImage: string;
  id: string;
}) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/${id}?type=${type}`)}
      className="flex flex-col w-40 pb-2 transition-all duration-300 ease-in-out cursor-pointer select-none hover:shadow-lg h-52 max-w-32 rounded-2xl hover:bg-neutral-100 hover:shadow-neutral-500/15 hover:scale-105"
      key={crypto.randomUUID()}
    >
      <img
        src={image || alternativeImage}
        alt="Book image"
        className={`object-contain max-h-36 h-full ${
          image ? "w-full rounded-2xl object-cover mb-2" : "w-2/3 m-auto"
        }`}
      />
      <div className="flex flex-col items-center justify-center w-full max-w-32">
        <span
          title={title}
          className="w-32 text-lg font-bold text-center truncate"
        >
          {title || "Sin título"}
        </span>
        <span title={subtitle} className="text-sm italic truncate">
          {subtitle || "Desconocido"}
        </span>
      </div>
    </div>
  );
};
