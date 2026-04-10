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
import SampleSongs from "./components/SampleSongs";
import Module4 from "./components/Module4";
import StringsViolin from "./components/StringsViolin";
import Settings from "./components/Settings";
import Style from "./components/Style";
import Module5 from "./components/Module5";
import DModule2 from "./keyD/DModule2";
import DModule3 from "./keyD/DModule3";
import DModule3ii from "./keyD/DModule3ii";
import DModule3iii from "./keyD/DModule3iii";
import DModule4 from "./keyD/DModule4";

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
        <Route path="/Fsharp/module2" element={<Module2 />} />
        <Route path="/Fsharp/module3" element={<Module3 />} />
        <Route path="/Fsharp/module3/ii" element={<Module3ii />} />
        <Route path="/Fsharp/module3/iii" element={<Module3iii />} />
        <Route path="/Fsharp/module4" element={<Module4 />} />
        <Route path="/sampleSongs" element={<SampleSongs />} />
        <Route path="/D/module2" element={<DModule2 />} />
        <Route path="/D/module3" element={<DModule3 />} />
        <Route path="/D/module3/ii" element={<DModule3ii />} />
        <Route path="/D/module3/iii" element={<DModule3iii />} />
        <Route path="/D/module4" element={<DModule4 />} />
        <Route path="/module5" element={<Module5 />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/beats" element={<Style />} />
        <Route path="/strings-violin" element={<StringsViolin />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
