import { useState } from "react";
import "../App.css";
import Footer from "../utils/Footer";
import Navbar from "../utils/Nav";
import Spacer from "../utils/Spacer";
import KWM23 from "../assets/chord-l-1.png";
import KWM24 from "../assets/chord-l-2.png";
import KWM25 from "../assets/chord-l-3.png";
import KWM26 from "../assets/chord-l-4.png";
import KWM27 from "../assets/chord-l-5.png";
import KWM28 from "../assets/chord-l-6.png";
import KWM29 from "../assets/chord-l-7.png";
import KWM30 from "../assets/chord-l-8.png";
import KWM31 from "../assets/chord-l-9.png";
import KWM32 from "../assets/chord-l-10.png";
import KWM33 from "../assets/chord-l-11.png";

function Module3iii() {
  const [show, setShow] = useState(false);

  return (
    <>
      <Navbar />
      <Spacer />
      <div className="container my-5">
        <div className="row">
          <h3 className="main-title">Piano Lessons</h3>
          <h1 className="module-title">Module 3</h1>
          <h5 className="module-subtitle">Section (iii)</h5>
          <div className="d-flex justify-content-center mt-4">
            <h4 className="fw-bold">Content: </h4>
            <div className="d-flex flex-column ms-3">
              <h4>1. Left Hand</h4>
              <h4>2. Arpeggios</h4>
              <h4>3. Octive Position</h4>
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <h3>Left Hand</h3>
          <p>
            Left hand adds the weight of chords sound, it is usually played on
            the lower part of the piano / keyboard.
          </p>
          <p>
            Do you remember the chords from one to six on their root position?
            Now in the left hand you omit the middle note and replace the first
            note with the similar note in the upper octive.
          </p>
        </div>
        <div className="row mt-5">
          <h3 className="fw-bold">Chord 1</h3>
          <div className="d-flex justify-content-around">
            <img className="img-sizes my-4" src={KWM23} alt="Semi-tones" />
          </div>
        </div>
        <div className="row mt-5">
          <h3 className="fw-bold">Chord 2</h3>
          <div className="d-flex justify-content-around">
            <img className="img-sizes my-4" src={KWM24} alt="Semi-tones" />
          </div>
        </div>
        <div className="row mt-5">
          <h3 className="fw-bold">Chord 3</h3>
          <div className="d-flex justify-content-around">
            <img className="img-sizes my-4" src={KWM25} alt="Semi-tones" />
          </div>
        </div>
        <div className="row mt-5">
          <h3 className="fw-bold">Chord 4</h3>
          <div className="d-flex justify-content-around">
            <img className="img-sizes my-4" src={KWM26} alt="Semi-tones" />
          </div>
        </div>
        <div className="row mt-5">
          <h3 className="fw-bold">Chord 5</h3>
          <div className="d-flex justify-content-around">
            <img className="img-sizes my-4" src={KWM27} alt="Semi-tones" />
          </div>
        </div>
        <div className="row mt-5">
          <h3 className="fw-bold">Chord 6</h3>
          <div className="d-flex justify-content-around">
            <img className="img-sizes my-4" src={KWM28} alt="Semi-tones" />
          </div>
        </div>
        <div className="row mt-5">
          <h3 className="fw-bold">Chord 7</h3>
          <div className="d-flex justify-content-around">
            <img className="img-sizes my-4" src={KWM29} alt="Semi-tones" />
          </div>
        </div>
        <div className="row mt-5">
          <p className="text-center">
            Now from this point always play the left hand with the same chord
            number as the right hand chord.
          </p>
        </div>
        <div className="row mt-5">
          <h3>Arpeggios</h3>
          <p>
            This is a rhythmic playing of notes up or down the keys as solo
            notes. Left hand usually uses arpeggios while playing instead of
            playing as chords. Play the notes one by one.
          </p>
        </div>
        <div className="row mt-5">
          <h3>Octive Position</h3>
          <p>
            This is where all the chords are compressed to use one octive
            without changing the original sound of the chord.
          </p>
          <p>
            Lets look at this example of chord 1, it has 4 inversions that some
            go beyond the octive with the pink boundary, now try to contain all
            the chords within the pink octive boundary as shown below.
          </p>
        </div>
        <div className="row mt-5">
          <h3 className="fw-bold">Chord 1</h3>
          <div className="d-flex justify-content-around">
            <img className="img-sizes my-4" src={KWM30} alt="Semi-tones" />
          </div>
        </div>
        <div className="row mt-5">
          <p className="text-center">
            Now lets look at how the Chords will look in the same octive
          </p>
        </div>
        <div className="row mt-5">
          <div className="d-flex justify-content-around">
            <img className="img-sizes my-4" src={KWM31} alt="Semi-tones" />
          </div>
          <div className="d-flex justify-content-around">
            <img className="img-sizes my-4" src={KWM32} alt="Semi-tones" />
          </div>
          <div className="d-flex justify-content-around">
            <img className="img-sizes my-4" src={KWM33} alt="Semi-tones" />
          </div>
        </div>
        <div className="row mt-5 text-center">
          <h3 className="fw-bold">Congratulations</h3>
          <p>
            Now with all this, you are ready to play any song, practice left
            hand arpeggios with the chords of the same number on your right
            hand.
          </p>
        </div>
        <div className="row mt-2">
          <div className="d-flex justify-content-center align-items-center">
            {/* Button */}
            <button className="btn btn-dark" onClick={() => setShow(true)}>
              Sample Songs
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
                      <h5 className="modal-title">Sample Songs</h5>
                      <button
                        type="button"
                        className="btn-close"
                        onClick={() => setShow(false)}
                      ></button>
                    </div>
                    <div className="modal-body">
                      <p>
                        1. Through it all, i have learn to trust in Jesus
                        (1,3,4,2,5,5)
                      </p>
                      <p>2. Jesus, is the King of Kings (1,5,4,1,6)</p>
                      <p>3. Thank you / Gracias Senor (1,5,2,6,1,5,4,4)</p>
                      <p>4. Alpha and Omega / nasema asante (1,6,2,5,3,6,5)</p>
                      <p>
                        5. Holy Holy are you Lord
                        (1,3,4,2,5,5,1,...4,5,3,6,2,5,1)
                      </p>
                      <p>
                        6. Oh the blood, of Jesus (1,3,4,1,6...5,1)x2 (2,5,1)
                      </p>
                      <p>7. In the presence of Angels (2,6,1,5)</p>
                      <p>8. Call upon (1,5,6,4)</p>
                      <p>9. Let it rain (1,5,6,4)</p>
                      <p>10. Healing rain is falling down (1,5,6,4)</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        <p className="text-center text-secondary text-i my-5 fs-5">
          End of Module 3(iii).
        </p>
        <hr />
      </div>
      <Footer />
    </>
  );
}

export default Module3iii;
