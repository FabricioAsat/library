import searchImg from "../../assets/search.svg";

const books = [
  "book1",
  "book2",
  "book3",
  "book4",
  "book5",
  "book6",
  "book7",
  "book8",
  "book9",
  "book10",
];

export const Items = () => {
  return (
    <div className="flex flex-wrap justify-start gap-2">
      {books.map((book) => (
        <div className="flex flex-col w-32 h-44" key={book}>
          <img
            src={searchImg}
            alt="Book image"
            className="object-contain w-full h-full rounded-lg"
          />
          <div className="flex flex-col items-center justify-center">
            <span className="text-lg font-bold">{book}</span>
            <span className="text-sm italic">Juan Perez</span>
          </div>
        </div>
      ))}
    </div>
  );
};
