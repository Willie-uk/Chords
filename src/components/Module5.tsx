import Footer from "../utils/Footer";
import Navbar from "../utils/Nav";
import Spacer from "../utils/Spacer";
import KWM42 from "../assets/Circle.png";
import { Download } from "lucide-react";
import myPdf from "../pdf/Piano-Lesson-Module5.pdf";

function Module5() {
  return (
    <>
      <Navbar />
      <Spacer />
      <div className="container my-5">
        <div className="row">
          <h3 className="main-title">Piano Lessons</h3>
          <h1 className="module-title">Module 5</h1>
          <div className="d-flex justify-content-center mt-4">
            <h4 className="fw-bold">Content: </h4>
            <h4 className="ms-2">Chord Cycle: {""}</h4>
            <div className="ms-2">
              <h4>1. Circle of Two</h4>
              <h4>2. Circle of Fourth </h4>
              <h4>3. Circle of Fifth</h4>
              <h4>4. Perfect Fifth</h4>
              <h4>5. Perfect Sixth</h4>
              <a
                href={myPdf}
                download="Piano-Lesson-Module5.pdf"
                className="btn btn-danger d-flex align-items-center gap-2 justify-content-center mt-2"
              >
                <Download size={18} />
                Download PDF
              </a>
            </div>
          </div>
        </div>
        <div className="row mt-3">
          <h3>Circle of Two</h3>
          <p>
            This is where you play using the intervals of two or the second note
            in the key or two semitones.
          </p>
        </div>
        <div className="row mt-3">
          <h3>Circle of Fourth</h3>
          <p>
            This is where you play using the intervals of four or the fourth
            note in the key or five semitones.{" "}
          </p>
        </div>
        <div className="row mt-5">
          <h3>Circle of Fifth</h3>
          <p>
            This is where you play using the intervals of five or the fifth note
            in the key or seven semitones.
          </p>
        </div>
        <p
          className="text-center text-i mt-5 fs-5"
          style={{ color: "#F67AF4" }}
        >
          There is a big relationship between the circle of fourth and the
          circle of fifth, here is a chart to help you understand.{" "}
        </p>
        <p className="text-center text-secondary text-i my-5 fs-5">
          Clock wise shows the Circle of Fifth, each being the fifth note of the
          previous note, you can play it as a single note or a chord.
          <div className="d-flex justify-content-around mt-5">
            <img className="img-sizes my-4" src={KWM42} alt="F#Aug" />
          </div>
        </p>
        <p className="text-center text-secondary text-i my-5 fs-5">
          Anti-clock wise shows the Circle of Fourth, each being the fourth note
          of the previous note, you can play it as a single note or a
          chord.{" "}
        </p>
        <div className="row mt-3">
          <h3>Perfect Fifth</h3>
          <p>
            This is where you play two notes using the intervals of five in the
            same key or the first and the fifth note in the same key or seven
            semitones.
          </p>
        </div>
        <div className="row mt-3">
          <h3>Perfect Sixth</h3>
          <p>
            This is where you play two notes using the intervals of six in the
            same key or the first and the sixth note in the same key or nine
            semitones.{" "}
          </p>
        </div>
        <p className="text-center text-secondary text-i my-5 fs-5">
          End of Module 5.
        </p>
        <hr />
      </div>
      <Footer />
    </>
  );
}

export default Module5;
