import editImg from "../../assets/edit.svg";
import deleteImg from "../../assets/delete.svg";

export const Header = ({ isLoading }: { isLoading: boolean }) => {
  return (
    <>
      {!isLoading && (
        <header className="fixed bottom-0 lg:top-0 border-t-2 border-neutral-200 w-full lg:max-w-[calc(100%-320px)] h-full max-h-16 shadow-md left-0 lg:left-80 bg-white z-50 lg:shadow-neutral-200/50">
          <div className="flex items-center justify-center w-full h-16 px-10 gap-x-10 lg:justify-start">
            <button className="flex items-center h-full gap-2 px-10 transition-colors duration-300 hover:bg-gray-100">
              <img src={editImg} alt="edit img" className="w-auto h-5" />
              <strong className="h-5 text-base">Edit</strong>
            </button>

            <button className="flex items-center h-full gap-2 px-10 text-red-500 transition-colors duration-300 hover:bg-gray-100">
              <img src={deleteImg} alt="delete img" className="w-auto h-5" />
              <strong className="h-5 text-base">Delete</strong>
            </button>
          </div>
        </header>
      )}
    </>
  );
};
