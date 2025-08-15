import "../App.css";
import Footer from "../utils/Footer";
import Navbar from "../utils/Nav";
import Spacer from "../utils/Spacer";
import KWM9 from "../assets/chord-1.png";
import KWM10 from "../assets/chord-2.png";
import KWM11 from "../assets/chord-3.png";
import KWM12 from "../assets/chord-4.png";
import KWM13 from "../assets/chord-5.png";
import KWM14 from "../assets/chord-6.png";
import KWM15 from "../assets/chord-7.png";
function Module3() {
  return (
    <>
      <Navbar />
      <Spacer />
      <div className="container my-5">
        <div className="row">
          <h3 className="main-title">Piano Lessons</h3>
          <h1 className="module-title">Module 3</h1>
          <h5 className="module-subtitle">Section (i)</h5>
          <div className="d-flex justify-content-center mt-4">
            <h4 className="fw-bold">Content: </h4>
            <h4>1. Chords: {""}</h4>
            <div className="ms-2">
              <h4>a. Major Chords</h4>
              <h4>b. Minor Chords</h4>
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <h3>Chords</h3>
          <p>
            <span className="fw-bold">Chords</span> are two or more notes played
            together at the same time. The one we shall use frequently is three
            notes played at the same time.
          </p>
          <p>
            If you look closely at the F# scale, you see seven notes,
            <span className="fw-bold">F#-G#-A#-B-C#-D#-F</span>. each of these
            notes can be converted to chords and now we simply assign them
            numbers for easier naming and chord identification from now onwards.
          </p>
          <p>
            For practice of these scales use metronome and adjust the tempo
            accordingly.{" "}
          </p>
        </div>
        <div className="row mt-5">
          <h3 className="fw-bold">Chord 1</h3>
          <div className="d-flex justify-content-around">
            <img className="img-sizes my-4" src={KWM9} alt="Semi-tones" />
          </div>
        </div>
        <div className="row mt-5">
          <h3 className="fw-bold">Chord 2</h3>
          <div className="d-flex justify-content-around">
            <img className="img-sizes my-4" src={KWM10} alt="Semi-tones" />
          </div>
        </div>
        <div className="row mt-5">
          <h3 className="fw-bold">Chord 3</h3>
          <div className="d-flex justify-content-around">
            <img className="img-sizes my-4" src={KWM11} alt="Semi-tones" />
          </div>
        </div>
        <div className="row mt-5">
          <h3 className="fw-bold">Chord 4</h3>
          <div className="d-flex justify-content-around">
            <img className="img-sizes my-4" src={KWM12} alt="Semi-tones" />
          </div>
        </div>
        <div className="row mt-5">
          <h3 className="fw-bold">Chord 5</h3>
          <div className="d-flex justify-content-around">
            <img className="img-sizes my-4" src={KWM13} alt="Semi-tones" />
          </div>
        </div>
        <div className="row mt-5">
          <h3 className="fw-bold">Chord 6</h3>
          <div className="d-flex justify-content-around">
            <img className="img-sizes my-4" src={KWM14} alt="Semi-tones" />
          </div>
        </div>
        <div className="row mt-5">
          <h3 className="fw-bold">Chord 7</h3>
          <div className="d-flex justify-content-around">
            <img className="img-sizes my-4" src={KWM15} alt="Semi-tones" />
          </div>
        </div>
        <div className="row mt-5">
          <h3>Important note!</h3>
          <p>
            1. There are 6 chords commonly used; Chord 1, Chord 2, Chord 3,
            Chord 4, Chord 5 and Chord 6.
          </p>
          <p>2. Chord 7 is a Diminished Chord.</p>
          <p>3. Half of the 6 chords are Major while half are Minor.</p>
        </div>
        <div className="row mt-5">
          <h3>Major Chords</h3>
          <p>
            There are only 3 major chords, chord 1, chord 4 and chord 5. These
            are the most used especialy in playing worship songs.
          </p>
        </div>
        <div className="row mt-5">
          <h3>Minor Chords</h3>
          <p>
            There are only 3 minor chords, chord 2, chord 3 and chord 6. These
            are chords that are very essecntial, they have 2 purpose,
            <div>
              <p>1. To beautify a song.</p>
              <p>2. Act as a replace of major chord.</p>
            </div>
          </p>
        </div>
        <p className="text-center text-secondary text-i my-5 fs-5">
          End of Module 3(i).
        </p>
        <hr />
      </div>
      <Footer />
    </>
  );
}

export default Module3;
