import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "../components/Header";
import { Library } from "../pages/Library";

export const Router = () => {
  return (
    <>
      <BrowserRouter>
        <div className="flex flex-col lg:flex-row">
          <Header />
          <Routes>
            <Route path="/" element={<Library />} />
            <Route path="/additem" element={<h1>Items</h1>} />
            <Route path="/addcollection" element={<h1>Collections</h1>} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
};
