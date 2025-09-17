import Footer from "../utils/Footer";
import Navbar from "../utils/Nav";
import Spacer from "../utils/Spacer";
import "../App.css";
import KWM34 from "../assets/AC-1.png";
import KWM35 from "../assets/AC-2.png";
import KWM36 from "../assets/AC-3.png";
import KWM37 from "../assets/AC-4.png";
import KWM38 from "../assets/AC-5.png";
import KWM39 from "../assets/AC-6.png";
import KWM40 from "../assets/AC-7.png";
import KWM41 from "../assets/AC-8.png";
import { useState } from "react";

function Module4() {
  const [show, setShow] = useState(false);
  return (
    <>
      <Navbar />
      <Spacer />
      <div className="container my-5">
        <div className="row">
          <h3 className="main-title">Piano Lessons</h3>
          <h1 className="module-title">Module 4</h1>
          <div className="d-flex justify-content-center mt-4">
            <h4 className="fw-bold">Content: </h4>
            <h4 className="ms-2">Advance Chords: {""}</h4>
            <div className="ms-2">
              <h4>1. F#M7 (Dom 7)</h4>
              <h4>2. F#Dim7</h4>
              <h4>3. F#Sus2 & F#Sus4</h4>
              <h4>4. F#Sus3 & F#3Major</h4>
              <h4>5. F# Relative Minor Scale</h4>
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <h3>Advance Chords</h3>
          <p>
            Congrats for reaching this far, from now onwards we shall alter the
            chords from their root position, and also one extra note will be
            added making our chords to have 4 notes.
          </p>
        </div>
        <div className="row mt-3">
          <h3>F#M7 (Dom 7)</h3>
          <p>
            In the F Sharp Major Seven chord (F#M7), the seventh note in the F#
            scale is lowered by a semitone, now the note{" "}
            <span className="fw-bold">F</span> will now be note{" "}
            <span className="fw-bold">E</span> making the chord a dominant
            chord.
          </p>
          <div className="d-flex justify-content-around">
            <img className="img-sizes my-4" src={KWM34} alt="F#M7" />
          </div>
        </div>
        <div className="row mt-3">
          <h3>F#Dim7</h3>
          <p>
            F Sharp Diminished Seven (F#Dim7): In the F# scale all the note
            notes except the first one are lowered by a semitone, now the note{" "}
            <span className="fw-bold">A#</span> will now be note{" "}
            <span className="fw-bold">A</span> ,the note{" "}
            <span className="fw-bold">C#</span> will now be note{" "}
            <span className="fw-bold">C</span> and the note{" "}
            <span className="fw-bold">E</span> will now be note{" "}
            <span className="fw-bold">D#</span>. This chord is also called a
            diminished chord. It is also important to note that there are only
            three diminished 7 in the entire piano.
          </p>
          <div className="d-flex justify-content-around">
            <img className="img-sizes my-4" src={KWM35} alt="F#Dim7" />
          </div>
        </div>
        <div className="row mt-5">
          <h3 className="fw-bold">F#Sus2 & F#Sus4</h3>
          <p>
            There are only two types of suspended chords, Suspended 2 (Sus2) and
            Suspended 4 (Sus4). They are formed by replacing the third note with
            either the second or the fourth note in the scale.
          </p>
          <div className="d-flex flex-column flex-lg-row justify-content-around">
            <div className="d-flex justify-content-center">
              <p>Sus2</p>
              <img className="img-size my-3" src={KWM36} alt="Sus2" />
            </div>
            <div className="d-flex justify-content-center">
              <p>Sus4</p>
              <img className="img-size my-3" src={KWM37} alt="Sus4" />
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <h3 className="fw-bold">F#Sus3 & F#3Major</h3>
          <p>
            Sus 3 is a special type of chord that is followed closely by the
            3Major chord. This is used as a passing chord to chord 6 in most
            cases. It is one of the most unique chord sounds used in sad songs
            and great master piece for the piano legends. In the 6 minor scale
            the are used together in replace of chord 3.
          </p>
          <div className="d-flex flex-column flex-lg-row justify-content-around">
            <div className="d-flex justify-content-center">
              <p>Sus2</p>
              <img className="img-size my-3" src={KWM38} alt="Sus3" />
            </div>
            <div className="d-flex justify-content-center">
              <p>Sus4</p>
              <img className="img-size my-3" src={KWM39} alt="3M" />
            </div>
          </div>
        </div>
        <div className="row mt-3">
          <h3>F# Relative Minor Scale (F# 6 minor Scale)</h3>
          <p>
            This scale is formed while starting with note 6 in the F# scale.
            This is one of the most unique scale in the piano, it is used in the
            sad songs or music pieces that start with chord 6 as its first note.
            Its chord 3 is replaced by the sus3 + 3Major as you pass back to
            chord 6.
          </p>
          <div className="d-flex justify-content-around">
            <img className="img-sizes my-4" src={KWM40} alt="F#6m" />
          </div>
        </div>
        <div className="row mt-3">
          <h3>F# Aug</h3>
          <p>
            This is one of the rare chords that is used in the piano, it is
            formed by raising the fifth note in the F# scale by a semitone. It
            is used in the sad songs or music pieces that start with chord 6 as
            its first note. It is also used in the passing chord to chord 6. It
            is important to note that there are only 4 augmented chords in the
            whole piano.
          </p>
          <div className="d-flex justify-content-around">
            <img className="img-sizes my-4" src={KWM41} alt="F#Aug" />
          </div>
        </div>
        <div className="row my-5 text-center">
          <h1 className="mt-4">Final recap</h1>
          <h3 className="text-secondary mb-4">
            Memorizing the chords by semitones
          </h3>
          <p>
            <span className="fw-bold">Major Chord</span> = Root + 4 semitone + 3
            semitones
          </p>
          <p>
            <span className="fw-bold">Minor Chord</span> = Root + 3 semitone + 4
            semitones
          </p>
          <p>
            <span className="fw-bold">Dim Chord</span> = Root + 3 semitone + 3
            semitones
          </p>
          <p>
            <span className="fw-bold">Aug Chord</span> = Root + 4 semitone + 4
            semitones
          </p>
          <p>
            <span className="fw-bold">Dim7 Chord</span> = Root + 3 semitone + 3
            semitones + 3 semitones
          </p>
          <p>
            <span className="fw-bold">Tritone</span> = Root + 6 semitone
          </p>
          <h3 className="text-secondary my-4">
            Memorizing the chords by note distance.
          </h3>
          <p>
            <span className="fw-bold">Major Second (Suspended).</span> = Root +
            2nd note.
          </p>
          <p>
            <span className="fw-bold">Major Third (Triad)</span> = Root + 3rd
            note.
          </p>
          <p>
            <span className="fw-bold">Perfect 4th</span> = Root + 4th note.
          </p>
          <p>
            <span className="fw-bold">Perfect 5th</span> = Root + 5th note.
          </p>
          <p>
            <span className="fw-bold mb-4">Perfect 6th</span> = Root + 6th note.
          </p>
        </div>
      </div>
      <div className="row mt-2">
        <div className="d-flex justify-content-center align-items-center">
          {/* Button */}
          <button className="btn btn-dark" onClick={() => setShow(true)}>
            Hard Progression Songs
          </button>

          {/* Modal */}
          {show && (
            <div
              className="modal fade show"
              style={{ display: "block", background: "rgba(0,0,0,0.5)" }}
              onClick={() => setShow(false)}
            >
              <div
                className="modal-dialog modal-dialog-centered"
                onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
              >
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title">Hard Progression Songs</h5>
                    <button
                      type="button"
                      className="btn-close"
                      onClick={() => setShow(false)}
                    ></button>
                  </div>
                  <div className="modal-body">
                    <p>
                      1. Holy Spirit rain down (1, E, E, 6, 2, 3, 4, Sus2,
                      5...Let your power 4, 4 Dim7, 6, 4m, 1, 5, 4...No eyes
                      have seen 4, 3Sus, 3M, 6, 4m)
                    </p>
                    <p>
                      2. I Stand in awe (1, 3, 4, 5, 1...1, 3, 4, 2M, 5, 4 Dim7,
                      6, 5, C Dim, 2, Sus2, 5, 1... chorus; 1, 5, 4...3Sus, 3M,
                      6, 5, C Dim, 2, 5, 1)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <p className="text-center text-secondary text-i my-5 fs-5">
        End of Module 4.
      </p>
      <hr />
      <Footer />
    </>
  );
}

export default Module4;
