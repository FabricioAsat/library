export const Item = ({
  title,
  subtitle,
  image,
  alternativeImage,
}: {
  title: string;
  subtitle: string;
  image: string;
  alternativeImage: string;
}) => {
  return (
    <div className="flex flex-col w-32 h-44 max-w-32" key={crypto.randomUUID()}>
      <img
        src={image || alternativeImage}
        alt="Book image"
        className={`object-contain h-full rounded-lg ${
          image ? "p-2 rounded-2xl object-cover" : "w-2/3 m-auto"
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
