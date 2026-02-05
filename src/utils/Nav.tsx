import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import xvg from "../assets/logo.svg";

function Navbar() {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  const toggleCard = () => {
    setIsVisible(!isVisible);
  };

  const handleHome = () => {
    navigate("/");
  };
  const handleModule1 = () => {
    navigate("/module1");
  };
  const handleModule2 = () => {
    navigate("/module2");
  };
  const handleModule3 = () => {
    navigate("/module3");
  };
  const handleModule3ii = () => {
    navigate("/module3/ii");
  };
  const handleModule3iii = () => {
    navigate("/module3/iii");
  };
  const handleModule4 = () => {
    navigate("/module4");
  };

  return (
    <div
      className={`d-flex w-100 justify-content-between align-items-center px-4 mt-2 position-fixed`}
      style={{
        height: "70px",
        backgroundColor: "rgba(255, 255, 255, 0.2)",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
      }}
    >
      <div className="d-flex gap-2 align-items-center">
        <img
          style={{ width: "60px", height: "60px", borderRadius: "50%" }}
          src={xvg}
          alt="Logo"
        />
      </div>
      <div className="d-flex gap-2 align-items-center">
        <button
          onClick={toggleCard}
          className="btn btn-dark"
          style={{ borderRadius: "15px" }}
        >
          {isVisible ? "Close" : "Lessons"}
        </button>
      </div>

      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ delay: 0.1 }}
            className="card shadow"
            style={{
              position: "absolute",
              top: "100%",
              borderRadius: "20px",
              right: "0",
              width: "18rem",
              marginTop: "10px",
              padding: "1px",
              border: "1px solid #e1e1e1",
              backgroundColor: "#fff",
              zIndex: 10,
            }}
          >
            <div className="card-body d-flex flex-column">
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="btn btn-dark fw-bold mb-3"
                onClick={handleHome}
                style={{ borderRadius: "15px" }}
              >
                Home
              </motion.button>
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="btn btn-dark fw-bold mb-3"
                onClick={handleModule1}
                style={{ borderRadius: "15px" }}
              >
                Module 1
              </motion.button>
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
                className="btn btn-dark fw-bold mb-3"
                onClick={handleModule2}
                style={{ borderRadius: "15px" }}
              >
                Module 2
              </motion.button>
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1 }}
                className="btn btn-dark fw-bold mb-3"
                onClick={handleModule3}
                style={{ borderRadius: "15px" }}
              >
                Module 3(i)
              </motion.button>
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.3 }}
                className="btn btn-dark fw-bold mb-3"
                onClick={handleModule3ii}
                style={{ borderRadius: "15px" }}
              >
                Module 3(ii)
              </motion.button>
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.3 }}
                className="btn btn-dark fw-bold mb-3"
                onClick={handleModule3iii}
                style={{ borderRadius: "15px" }}
              >
                Module 3(iii)
              </motion.button>
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.3 }}
                className="btn btn-dark fw-bold mb-3"
                onClick={handleModule4}
                style={{ borderRadius: "15px" }}
              >
                Module 4
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Navbar;
