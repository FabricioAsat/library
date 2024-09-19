import { Toaster } from "sonner";
import { Router } from "./router/Router";

function App() {
  return (
    <>
      <Toaster richColors closeButton position="top-right" />
      <Router />
    </>
  );
}

export default App;
