export const Item = ({
  id,
  title,
  subtitle,
  image,
  alternativeImage,
}: {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  alternativeImage: string;
}) => {
  return (
    <div className="flex flex-col w-32 h-44" key={id}>
      <img
        src={image || alternativeImage}
        alt="Book image"
        className={`object-contain h-full rounded-lg ${
          image ? "w-full" : "w-2/3 m-auto"
        }`}
      />
      <div className="flex flex-col items-center justify-center">
        <span title={title} className="text-lg font-bold truncate">
          {title || "Sin título"}
        </span>
        <span title={subtitle} className="text-sm italic truncate">
          {subtitle || "Desconocido"}
        </span>
      </div>
    </div>
  );
};
