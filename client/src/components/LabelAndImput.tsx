export const LabelAndImput = ({
  label,
  id,
  name,
  value,
  placeholder,
  tinyInfo = "",
  onChange,
}: {
  label: string;
  id: string;
  name: string;
  value: string;
  placeholder?: string;
  tinyInfo?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <div className="flex flex-col w-full gap-y-1">
      <label htmlFor={id} className="text-base font-bold">
        {label}
      </label>

      <input
        type="text"
        id={id}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        autoComplete="off"
        className="w-full p-1 font-bold transition-all duration-300 ease-in-out border-2 border-gray-300 rounded-md outline-none focus:bg-gray-50 focus:border-gray-300 focus:shadow-lg focus:shadow-gray-300/25"
      />
      {tinyInfo.length > 0 && (
        <small className="text-xs italic">{tinyInfo}</small>
      )}
    </div>
  );
};

export const LabelAndTextArea = ({
  label,
  id,
  name,
  value,
  onChange,
}: {
  label: string;
  id: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}) => {
  return (
    <div className="flex flex-col gap-y-1">
      <label htmlFor={id} className="text-base font-bold">
        {label}
      </label>

      <textarea
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        autoComplete="off"
        rows={5}
        className="w-full p-1 font-bold transition-all duration-300 ease-in-out border-2 border-gray-300 rounded-md outline-none focus:bg-gray-50 focus:border-gray-300 focus:shadow-lg focus:shadow-gray-300/25"
      />
    </div>
  );
};

export const LabelAndImage = ({
  label,
  id,
  name,
  onChange,
}: {
  label: string;
  id: string;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <div className="flex flex-col gap-y-1">
      <label htmlFor={id} className="text-base font-bold">
        {label}
      </label>

      <input
        type="file"
        id={id}
        name={name}
        accept="image/*"
        onChange={onChange}
        className="hidden"
      />

      <label
        htmlFor={id}
        className="px-10 py-1 font-black text-center truncate transition-colors duration-300 ease-in-out border-2 rounded-md cursor-pointer bg-slate-200 border-slate-200 max-w-64"
      >
        Cover Image
      </label>
    </div>
  );
};
