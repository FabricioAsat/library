import editImg from "../../assets/edit.svg";
import deleteImg from "../../assets/delete.svg";
import { useEffect, useState } from "react";
import { deleteItem } from "../../api/itemsReq";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

export const Header = ({
  isLoading,
  type,
  id,
  setShowEdit,
}: {
  isLoading: boolean;
  type: string;
  id: string;
  setShowEdit: (state: boolean) => void;
}) => {
  const [showDelete, setShowDelete] = useState(false);

  const navigateTo = useNavigate();

  const handleShowDelete = (state: boolean) => {
    setShowDelete(state);
  };

  const handleShowEdit = (state: boolean) => {
    setShowEdit(state);
  };

  const handleDelete = async () => {
    const res = await deleteItem(id, type);
    if (!res.status) {
      toast.error(res.message);
      return;
    }
    toast.success(res.message);
    setShowDelete(false);
    navigateTo("/");
  };

  useEffect(() => {}, []);

  return (
    <>
      {!isLoading && (
        <header className="fixed bottom-0 lg:top-0 border-t-2 border-neutral-200 w-full lg:max-w-[calc(100%-320px)] h-full max-h-16 shadow-md left-0 lg:left-80 bg-white z-50 lg:shadow-neutral-200/50">
          <div className="flex items-center justify-center w-full h-16 px-10 gap-x-10 lg:justify-start">
            <button
              onClick={() => handleShowEdit(true)}
              className="flex items-center h-full gap-2 px-10 transition-colors duration-300 hover:bg-gray-100"
            >
              <img src={editImg} alt="edit img" className="w-auto h-5" />
              <strong className="h-5 text-base">Edit</strong>
            </button>

            <button
              onClick={() => handleShowDelete(true)}
              className="flex items-center h-full gap-2 px-10 text-red-500 transition-colors duration-300 hover:bg-gray-100"
            >
              <img src={deleteImg} alt="delete img" className="w-auto h-5" />
              <strong className="h-5 text-base">Delete</strong>
            </button>
          </div>
        </header>
      )}

      {showDelete && (
        <aside className="fixed z-50 w-full h-auto px-4 py-5 -translate-x-1/2 lg:-translate-x-[calc(100%-320px)] -translate-y-1/2 bg-white border max-w-80 rounded-xl border-neutral-800 top-1/2 left-1/2 lg:top-1/2">
          <p className="text-lg font-bold text-center">
            Are you sure you want to delete this {type}?
          </p>
          <div className="flex items-center justify-center w-full h-full mt-10 gap-x-5">
            <button
              onClick={() => handleDelete()}
              className="px-4 py-2 font-bold text-white rounded-md bg-neutral-800"
            >
              Delete
            </button>
            <button
              onClick={() => handleShowDelete(false)}
              className="px-4 py-2 font-bold text-white rounded-md bg-neutral-800"
            >
              Cancel
            </button>
          </div>
        </aside>
      )}
    </>
  );
};
