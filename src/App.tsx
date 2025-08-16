import { useEffect, useState } from "react";
import Intro from "./components/Intro";
import Module2 from "./components/Module2";
import { Loader } from "lucide-react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Module3 from "./components/Module3";
import Home from "./utils/Home";
import Module3ii from "./components/Module3ii";
import Module3iii from "./components/Module3iii";

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
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/module1" element={<Intro />} />
        <Route path="/module2" element={<Module2 />} />
        <Route path="/module3" element={<Module3 />} />
        <Route path="/module3/ii" element={<Module3ii />} />
        <Route path="/module3/iii" element={<Module3iii />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
