import { useEffect, useState } from "react";
import Layout from "./components/Layout";
import { Toaster } from "@/components/ui/toaster";

function App() {
  const [mounted, setMounted] = useState(false);

  // Ensures hydration completes before rendering to avoid mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <>
      <Layout />
      <Toaster />
    </>
  );
}

export default App;
