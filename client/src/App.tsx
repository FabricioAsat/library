import { Toaster } from "sonner";
import { Router } from "./router/Router";

function App() {
  return (
    <>
      <Toaster richColors closeButton position="bottom-right" />
      <Router />
    </>
  );
}

export default App;
