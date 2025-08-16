import "../App.css";
import Footer from "../utils/Footer";
import Navbar from "../utils/Nav";
import Spacer from "../utils/Spacer";
import KWM16 from "../assets/chord-i-1.png";
import KWM17 from "../assets/chord-i-2.png";
import KWM18 from "../assets/chord-i-3.png";
import KWM19 from "../assets/chord-i-4.png";
import KWM20 from "../assets/chord-i-5.png";
import KWM21 from "../assets/chord-i-6.png";
import KWM22 from "../assets/chord-i-7.png";

function Module3ii() {
  return (
    <>
      <Navbar />
      <Spacer />
      <div className="container my-5">
        <div className="row">
          <h3 className="main-title">Piano Lessons</h3>
          <h1 className="module-title">Module 3</h1>
          <h5 className="module-subtitle">Section (ii)</h5>
          <div className="d-flex justify-content-center mt-4">
            <h4 className="fw-bold">Content: </h4>
            <h4>1. Chord Inversion: {""}</h4>
            <div className="ms-2">
              <h4>a. Root Position</h4>
              <h4>b. First Inversion</h4>
              <h4>c. Second Inversion</h4>
              <h4>d. Third Inversion</h4>
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <h3>Chord Inversion</h3>
          <p>
            <span className="fw-bold">Chord Inversion:</span> is the changing of
            chord position without changing the chord sound. Inversions can be
            done as you raise or lower the chord across octives.
          </p>
          <p>
            Root position is same as the Third inversion, the difference is that
            one is in a different octive.
          </p>
        </div>
        <div className="row mt-5">
          <h3 className="fw-bold">Chord 1</h3>
          <div className="d-flex justify-content-around">
            <img className="img-sizes my-4" src={KWM16} alt="Semi-tones" />
          </div>
        </div>
        <div className="row mt-5">
          <h3 className="fw-bold">Chord 2</h3>
          <div className="d-flex justify-content-around">
            <img className="img-sizes my-4" src={KWM17} alt="Semi-tones" />
          </div>
        </div>
        <div className="row mt-5">
          <h3 className="fw-bold">Chord 3</h3>
          <div className="d-flex justify-content-around">
            <img className="img-sizes my-4" src={KWM18} alt="Semi-tones" />
          </div>
        </div>
        <div className="row mt-5">
          <h3 className="fw-bold">Chord 4</h3>
          <div className="d-flex justify-content-around">
            <img className="img-sizes my-4" src={KWM19} alt="Semi-tones" />
          </div>
        </div>
        <div className="row mt-5">
          <h3 className="fw-bold">Chord 5</h3>
          <div className="d-flex justify-content-around">
            <img className="img-sizes my-4" src={KWM20} alt="Semi-tones" />
          </div>
        </div>
        <div className="row mt-5">
          <h3 className="fw-bold">Chord 6</h3>
          <div className="d-flex justify-content-around">
            <img className="img-sizes my-4" src={KWM21} alt="Semi-tones" />
          </div>
        </div>
        <div className="row mt-5">
          <h3 className="fw-bold">Chord 7</h3>
          <div className="d-flex justify-content-around">
            <img className="img-sizes my-4" src={KWM22} alt="Semi-tones" />
          </div>
        </div>
        <div className="row my-5 ">
          <div className="d-flex align-items-center justify-content-center">
            <div className="circleCI1 me-1"></div>
            <p style={{ margin: 0 }}> = Root Position</p>
          </div>
        </div>
        <div className="row my-5 ">
          <div className="d-flex align-items-center justify-content-center">
            <div className="circleCI2 me-1"></div>
            <p style={{ margin: 0 }}> = Root Position</p>
          </div>
        </div>
        <div className="row my-5 ">
          <div className="d-flex align-items-center justify-content-center">
            <div className="circleCI3 me-1"></div>
            <p style={{ margin: 0 }}> = Root Position</p>
          </div>
        </div>
        <div className="row my-5 ">
          <div className="d-flex align-items-center justify-content-center">
            <div className="circleCI4 me-1"></div>
            <p style={{ margin: 0 }}> = Root Position</p>
          </div>
        </div>
        <div className="row mt-5">
          <p className="text-center">
            Practice all chord inversions till you are comfortably playing in
            all the octives.
          </p>
        </div>
        <p className="text-center text-secondary text-i my-5 fs-5">
          End of Module 3(ii).
        </p>
        <hr />
      </div>
      <Footer />
    </>
  );
}

export default Module3ii;
