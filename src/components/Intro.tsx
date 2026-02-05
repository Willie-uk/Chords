import "../App.css";
import KWM1 from "../assets/naming-1.png";
import KWM2 from "../assets/naming-2.png";
import KWM3 from "../assets/naming-3.png";
import Footer from "../utils/Footer";
import Navbar from "../utils/Nav";
import Spacer from "../utils/Spacer";
import Accordion from "react-bootstrap/Accordion";

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
            <h4 className="fw-bold">Content:</h4>
            <div className="ms-2">
              <h4>1. Introduction</h4>
              <h4>2. Naming</h4>
              <h4>3. Semi-tones & Whole-tones</h4>
              <h4>4. Scale / Solfa notations</h4>
            </div>
          </div>
        </div>

        {/* INTRODUCTION */}
        <div className="row mt-5">
          <h3 id="intro">Introduction</h3>
          <p>
            <span className="fw-bold">Piano</span> is a musical instrument that
            produces sound acoustically (natural way), while a{" "}
            <span className="fw-bold">Keyboard</span> produces sound
            electronically using electricity.
          </p>
          <p>
            The piano/keyboard consists of pressable parts called keys or notes.
            There are two types: White keys (7) and Black keys (5), making a
            total of 12 notes.
          </p>
        </div>

        {/* NAMING */}
        <div className="row mt-2">
          <h3>Naming</h3>
          <p>
            A set of 12 notes is called an{" "}
            <span className="fw-bold">Octave</span>. Digital keyboards may have
            48, 61, 76, or 88 keys.
          </p>
          <p>
            White keys are named{" "}
            <span className="fw-bold">C, D, E, F, G, A, B</span>.
          </p>
          <p>
            Black keys are named based on direction: ascending notes use{" "}
            <span className="fw-bold">Sharp (#)</span>, descending notes use{" "}
            <span className="fw-bold">Flat (b)</span>.
          </p>

          <div className="d-flex flex-column flex-lg-row justify-content-around">
            <div className="d-flex justify-content-center">
              <img className="img-size my-3" src={KWM1} alt="Sharps" />
            </div>
            <div className="d-flex justify-content-center">
              <img className="img-size my-3" src={KWM2} alt="Flats" />
            </div>
          </div>

          {/* SEMI & WHOLE TONES */}
          <div className="row mt-4">
            <h3>Semi-tones & Whole-tones</h3>
            <p>
              The distance between two adjacent keys is called a{" "}
              <span className="fw-bold">Semi-tone (Half-tone)</span>. The
              distance between three keys is a{" "}
              <span className="fw-bold">Whole-tone</span>.
            </p>

            <div className="d-flex justify-content-center">
              <img className="img-size my-4" src={KWM3} alt="Semi-tones" />
            </div>

            <p>
              <span className="fw-bold">Solfa Notation</span> is the ascending
              and descending order of notes in a key: Do, Re, Mi, Fa, So, La,
              Ti, Do.
            </p>

            <p className="text-center">Key Formula = W, W, H, W, W, W, H</p>

            <div className="text-center text-secondary">
              <p>(W = Whole-tone)</p>
              <p>(H = Half-tone)</p>
            </div>

            <p>
              Each of the 12 notes has its own solfa notation depending on the
              key.
            </p>
          </div>

          {/* ✅ ACCORDIONS (WORKING) */}
          <div className="row mt-5">
            <h3>Important Basics Every Beginner Should Know</h3>

            <Accordion className="mt-3">
              <Accordion.Item eventKey="0">
                <Accordion.Header>Proper Sitting & Posture</Accordion.Header>
                <Accordion.Body>
                  Sit upright and relaxed. Your elbows should be slightly above
                  the keys, shoulders relaxed, and feet flat on the floor.
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="1">
                <Accordion.Header>Finger Numbers</Accordion.Header>
                <Accordion.Body>
                  Fingers are numbered from 1 to 5.
                  <br />
                  Thumb = 1, Index = 2, Middle = 3, Ring = 4, Pinky = 5.
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="2">
                <Accordion.Header>Correct Hand Position</Accordion.Header>
                <Accordion.Body>
                  Keep your fingers curved naturally, as if holding a ball.
                  Wrists should stay relaxed and level.
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="3">
                <Accordion.Header>
                  Middle C & Keyboard Orientation
                </Accordion.Header>
                <Accordion.Body>
                  Middle C is the central reference point on the keyboard. It
                  helps beginners identify notes and navigate the piano easily.
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="4">
                <Accordion.Header>Practice Tips for Beginners</Accordion.Header>
                <Accordion.Body>
                  Practice slowly and consistently. Focus on accuracy before
                  speed, use a metronome, and avoid rushing progress.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>

          {/* END */}
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
