import "../App.css";
import KWM4 from "../assets/major-scale.png";
import KWM5 from "../assets/minor-scale.png";
import KWM6 from "../assets/Harmonic-scale.png";
import KWM7 from "../assets/pentatonic-scale.png";
import KWM8 from "../assets/blue-scale.png";
import Navbar from "../utils/Nav";
import Spacer from "../utils/Spacer";
import Footer from "../utils/Footer";
import Accordion from "react-bootstrap/Accordion";

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
            <h4>1. Scales: </h4>
            <div className="ms-2">
              <h4>a. Major Scale</h4>
              <h4>b. Minor Scale</h4>
              <h4>c. Harmonic Minor Scale</h4>
              <h4>d. Pentatonic Scale</h4>
              <h4>e. Blues Scale</h4>
            </div>
          </div>
        </div>

        {/* INTRO */}
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
            accordingly.
          </p>
        </div>

        {/* ORIGINAL SCALE CONTENT (UNCHANGED) */}
        <div className="row mt-5">
          <h3>F# Major Scale</h3>
          <p>
            Using the key formula starting from{" "}
            <span className="fw-bold">F#-W-W-H-W-W-W-H</span>, the F# major
            scale consists of{" "}
            <span className="fw-bold">F#-G#-A#-B-C#-D#-E#-F#.</span>
          </p>
          <div className="d-flex justify-content-around">
            <img className="img-sizes my-4" src={KWM4} alt="Major Scale" />
          </div>
        </div>

        <div className="row mt-5">
          <h3>F# Minor Scale</h3>
          <p>
            In the F# minor scale, the 3rd note, 6th note and 7th note are
            lowered by a Semi-tone.
          </p>
          <div className="d-flex justify-content-around">
            <img className="img-sizes my-4" src={KWM5} alt="Minor Scale" />
          </div>
        </div>

        <div className="row mt-5">
          <h3>F# Harmonic Minor Scale</h3>
          <p>
            In the F# harmonic minor scale, only the 3rd note and 6th note are
            lowered by a Semi-tone.
          </p>
          <div className="d-flex justify-content-around">
            <img className="img-sizes my-4" src={KWM6} alt="Harmonic Minor" />
          </div>
        </div>

        <div className="row mt-5">
          <h3>F# Pentatonic Scale</h3>
          <p>
            The Pentatonic scale consists of the 1st, 2nd, 3rd, 5th and 6th
            notes. The F# pentatonic scale has no white key.
          </p>
          <div className="d-flex justify-content-around">
            <img className="img-sizes my-4" src={KWM7} alt="Pentatonic Scale" />
          </div>
        </div>

        <div className="row mt-5">
          <h3>F# Blues Scale</h3>
          <p>
            This scale is important for improvisation. Practice across all
            octaves before applying it musically.
          </p>
          <div className="d-flex justify-content-around">
            <img className="img-sizes my-4" src={KWM8} alt="Blues Scale" />
          </div>
        </div>

        {/* 🔽 ACCORDIONS (ADDITIONAL INFO ONLY) */}
        <div className="row mt-5">
          <h3>More About These Scales</h3>

          <Accordion className="mt-3">
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                Major Scale – Usage & Formation
              </Accordion.Header>
              <Accordion.Body>
                Major scales sound bright and joyful. They are used in pop,
                gospel, hymns, classical music, and to form major chords.
                Formula: <span className="fw-bold">W-W-H-W-W-W-H</span> or{" "}
                <span className="fw-bold">1,2,3,4,5,6,7,8</span> or{" "}
                <span className="fw-bold">F#,G#,A#,B,C#,D#,F,F#</span>.
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="1">
              <Accordion.Header>
                Minor Scale – Usage & Formation
              </Accordion.Header>
              <Accordion.Body>
                Minor scales sound emotional or sad. They are commonly used in
                worship, ballads, film music, and minor chord progressions.
                Formula: <span className="fw-bold">W-H-W-W-H-W-W</span> or{" "}
                <span className="fw-bold">1,2,3b,4,5,6b,7b,8</span> or{" "}
                <span className="fw-bold">F#,G#C,A,B,C#,D,E,F#.</span>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="2">
              <Accordion.Header>
                Harmonic Minor – Usage & Formation
              </Accordion.Header>
              <Accordion.Body>
                Harmonic minor introduces tension using a raised 7th note. It is
                popular in classical music and dramatic chord movements.
                Formula: <span className="fw-bold">W-H-W-W-H-3H-H</span> or{" "}
                <span className="fw-bold">1,2,3b,4,5,6b,7,8</span> or{" "}
                <span className="fw-bold">F#,G#,A,B,C#,D,F,F#.</span>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="3">
              <Accordion.Header>
                Pentatonic – Usage & Formation
              </Accordion.Header>
              <Accordion.Body>
                Pentatonic scales are safe for improvisation. They work well
                over many chords and are widely used in gospel, pop, and rock.
                Formula: <span className="fw-bold">W-W-3H-W.</span> or{" "}
                <span className="fw-bold">1,2,3,5,6</span> or{" "}
                <span className="fw-bold">F#,G#,A#,C#,D#.</span>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="4">
              <Accordion.Header>
                Blues Scale – Usage & Formation
              </Accordion.Header>
              <Accordion.Body>
                Blues scales add expression using the blue note. They are used
                in jazz, blues, and solo performances. Formula:{" "}
                <span className="fw-bold">3H-W-H-H-3H-W</span> or
                <span className="fw-bold">1,3b,4,5b,5,7b,8</span> or{" "}
                <span className="fw-bold">F#,A,B,C,C#,E,F#.</span>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>

        {/* 🔑 IMPORTANT MISSING TOPIC */}
        <div className="row mt-5">
          <h3>Scale Fingering & Practice Direction</h3>
          <p>
            Correct fingering is essential when practicing scales. Use smooth
            thumb crossings and consistent finger patterns for both hands.
            Always practice scales ascending and descending, hands separately
            before combining both hands.
          </p>
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
