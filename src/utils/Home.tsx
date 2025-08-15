import "../App.css";
import Footer from "./Footer";
import Hero from "./Hero";
import Navbar from "./Nav";
import Spacer from "./Spacer";

function Home() {
  return (
    <div>
      <Navbar />
      <Spacer />
      <Hero />
      <Footer />
    </div>
  );
}

export default Home;
