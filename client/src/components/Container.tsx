export const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col w-full h-full px-1 py-2 lg:p-10">
      {children}
    </div>
  );
};
