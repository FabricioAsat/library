export const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="max-h-[calc(100vh-64px)] lg:max-h-screen overflow-y-auto w-full">
      <div className="flex flex-col w-full h-full max-w-6xl px-1 py-2 mx-auto lg:p-10">
        {children}
      </div>
    </div>
  );
};
