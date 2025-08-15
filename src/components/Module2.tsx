import "../App.css";
import KWM4 from "../assets/major-scale.png";
import KWM5 from "../assets/minor-scale.png";
import KWM6 from "../assets/Harmonic-scale.png";
import KWM7 from "../assets/pentatonic-scale.png";
import KWM8 from "../assets/blue-scale.png";
import Navbar from "../utils/Nav";
import Spacer from "../utils/Spacer";
import Footer from "../utils/Footer";

function Module2() {
  return (
    <>
      <Navbar />
      <Spacer />
      <div className="container my-5">
        <div className="row">
          <h3 className="main-title">Piano Lessons</h3>
          <h1 className="module-title">Module 2</h1>
          <div className="d-flex justify-content-center mt-4">
            <h4 className="fw-bold">Content: </h4>
            <h4>1. Scales: {""}</h4>
            <div className="ms-2">
              <h4>a. Major Scale</h4>
              <h4>b. Minor Scale</h4>
              <h4>c. Harmonic Minor Scale</h4>
              <h4>d. Pentatonic Scale</h4>
              <h4>e. Blues Scale</h4>
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <h3>Scales</h3>
          <p>
            This is a rhythmic progression of notes either by ascending or
            descending forming a unique sequence.
          </p>
          <p>
            Among the 12 keys, we shall take one that is commonly used;{" "}
            <span className="fw-bold">Key F#.</span>
          </p>
          <p>
            For practice of these scales use metronome and adjust the tempo
            accordingly.{" "}
          </p>
        </div>
        <div className="row mt-5">
          <h3>F# Major Scale</h3>
          <p>
            As stated earlier every key has its own solfa notations, using the
            Key formula starting from{" "}
            <span className="fw-bold">F#-W-W-H-W-W-W-H</span> you will get that
            the F# key is comprised of;{" "}
            <span className="fw-bold">F#-G#-A#-B-C#-D#-F-F#.</span>
          </p>
          <div className="d-flex justify-content-around">
            <img className="img-sizes my-4" src={KWM4} alt="Semi-tones" />
          </div>
        </div>
        <div className="row mt-5">
          <h3>F# Minor Scale</h3>
          <p>
            In the F# minor scale, the 3rd note, 6th note and 7th note are
            lowered down by a Semi-tone.
          </p>
          <div className="d-flex justify-content-around">
            <img className="img-sizes my-4" src={KWM5} alt="Semi-tones" />
          </div>
        </div>
        <div className="row mt-5">
          <h3>F# Harmonic Minor Scale</h3>
          <p>
            In the F# harmonic minor scale, only the 3rd note, 6th note and 7th
            note are lowered down by a Semi-tone.
          </p>
          <div className="d-flex justify-content-around">
            <img className="img-sizes my-4" src={KWM6} alt="Semi-tones" />
          </div>
        </div>
        <div className="row mt-5">
          <h3>F# Pentatonic Scale</h3>
          <p>
            The Pentatonic scale consists of the 1st, 2nd, 3rd, 5th and 6th
            notes. Infact the F# pentatonic scale has no white key.
          </p>
          <div className="d-flex justify-content-around">
            <img className="img-sizes my-4" src={KWM7} alt="Semi-tones" />
          </div>
        </div>
        <div className="row mt-5">
          <h3>F# Blues Scale</h3>
          <p>
            This is one of the most important musical scales, in the coming
            module you will learn how to use them, where to use them and how to
            convert them to chords, for now just practice as scale, use all
            octives to practice.
          </p>
          <div className="d-flex justify-content-around">
            <img className="img-sizes my-4" src={KWM8} alt="Semi-tones" />
          </div>
        </div>
        <p className="text-center text-secondary text-i my-5 fs-5">
          End of Module 2.
        </p>
        <hr />
      </div>
      <Footer />
    </>
  );
}

export default Module2;
