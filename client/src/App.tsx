import { Toaster } from "sonner";
import { Router } from "./router/Router";

function App() {
  return (
    <>
      <Toaster richColors position="bottom-right" duration={2500} closeButton />
      <Router />
    </>
  );
}

export default App;
