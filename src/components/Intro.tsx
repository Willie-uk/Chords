import "../App.css";
import KWM1 from "../assets/naming-1.png";
import KWM2 from "../assets/naming-2.png";
import KWM3 from "../assets/naming-3.png";
import Footer from "../utils/Footer";
import Navbar from "../utils/Nav";
import Spacer from "../utils/Spacer";

function Intro() {
  return (
    <>
      <Navbar />
      <Spacer />
      <div className="container my-5">
        <div className="row">
          <h3 className="main-title">Piano Lessons</h3>
          <h1 className="module-title">Module 1</h1>
          <div className="d-flex justify-content-center mt-4">
            <h4 className="fw-bold">Content: </h4>
            <div className="ms-2">
              <h4>1. Introduction</h4>
              <h4>2. Naming</h4>
              <h4>3. Semi-tones & Whole-tones</h4>
              <h4>4. Scale / Solfa notations</h4>
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <h3>Introduction</h3>
          <p>
            <span className="fw-bold">Piano</span> is a musical instrument that
            produces music sound in acoustic (natural way) while a{" "}
            <span className="fw-bold">Keyboard</span> is a music instrument that
            produces music sound electronically (uses electricity to produce
            sound).
          </p>
          <p>
            The piano / keyboard consists of pressables called a key or a note.
            They are of two types, White and Black. The white keys are 7 and
            black keys are 5, totaling up to 12 keys/notes.
          </p>
        </div>
        <div className="row mt-2">
          <h3>Naming</h3>
          <p>
            The 12 set of keys/notes are called an{" "}
            <span className="fw-bold">Octive</span>. Digital keyboards vary in
            number of keys, some have 48, 61, 76, 88.
          </p>
          <p>
            The white note names starts with letter C, with G as the maximum
            letter (no H,I,J...). the official namings are;{" "}
            <span className="fw-bold">C,D,E,F,G,A,B</span> .
          </p>
          <p>
            The black notes also have names, but they depend on the direction,
            if ascending by notes, it acquires the word{" "}
            <span className="fw-bold">Sharp(#)</span> + the name of the key
            before it, if descending by notes, it acquires the word{" "}
            <span className="fw-bold">Flat(b)</span>.{" "}
          </p>
          <div className="d-flex flex-column flex-lg-row justify-content-around">
            <div className="d-flex justify-content-center">
              <img className="img-size my-3" src={KWM1} alt="Sharps" />
            </div>
            <div className="d-flex justify-content-center">
              <img className="img-size my-3" src={KWM2} alt="Flats" />
            </div>
          </div>
          <div className="row mt-4">
            <h3>Semi-tones & Whole-tones</h3>
            <p>
              The distance between two keys is called a Semi-tone / Half-tone
              while the distance between three keys is called a Whole tone.
            </p>
            <div className="d-flex justify-content-around">
              <img className="img-size my-4" src={KWM3} alt="Semi-tones" />
            </div>
            <p>
              <span className="fw-bold">Solfa Notation</span> is the musically
              ascending and descending order of notes in a Key (Do, Re, Mi, Fa,
              So, La, Ti, Do). These represents pitches in a musical scale.
            </p>
            <p className="text-center">Key formular = W,W,H,W,W,W,H</p>
            <div className="d-flex flex-column">
              <p className="text-i text-center text-secondary">
                (W = Whole-tone)
              </p>
              <p className="text-i text-center text-secondary">
                (H = Half-tone)
              </p>
            </div>
            <p>
              Each of the 12 keys (7 white + 5 black) has their own solfa
              notations.
            </p>
          </div>
          <div className="row my-5">
            <p className="text-i text-center fs-5 text-secondary">
              End of Module 1.
            </p>
          </div>
        </div>
        <hr />
      </div>
      <Footer />
    </>
  );
}

export default Intro;
