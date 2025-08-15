import { useEffect, useState } from "react";
import Intro from "./components/Intro";
import Module2 from "./components/Module2";
import { Loader } from "lucide-react";
import "./App.css";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <Loader className="animate-spin-loader" size={25} />
      </div>
    );
  }

  return (
    <>
      <Intro />
      <Module2 />
    </>
  );
}

export default App;
