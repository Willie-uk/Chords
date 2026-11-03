import Footer from "../utils/Footer";
import Navbar from "../utils/Nav";
import Spacer from "../utils/Spacer";
import beats from "../zip/Styles.zip";
import beatData from "./style.json";

import { Download } from "lucide-react";

function Style() {
  return (
    <>
      <Navbar />
      <Spacer />
      <div className="container my-5">
        <div className="row">
          <h3 className="main-title">Piano Lessons</h3>
          <h1 className="module-title">Beats Section</h1>
          <div className="d-flex justify-content-center mt-4">
            <h4 className="fw-bold">Content: </h4>
            <div className="d-flex flex-column ms-3">
              <h4>Time Signature.</h4>
              <a
                href={beats}
                download="SX Willy Styles"
                className="btn btn-danger d-flex align-items-center gap-2 justify-content-center mt-2"
              >
                <Download size={18} />
                Download Styles
              </a>
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <h3>Time Signature (Beats)</h3>
          <p>
            When beats starts you will hear the a kick and a snare, this is
            called a <span className="fw-bold">Loop</span>. The number of loops
            that makes a complete rotation is called a{" "}
            <span className="fw-bold">Bar or Time Signature</span>. In musical
            sheets, a bar is a segment of music bounded by vertical lines. The
            time signatures include 2/4, 3/4, 4/4, and 6/8. Each time signature
            has its own unique feel and is used in different musical contexts.
          </p>
          <div className="my-4 d-flex flex-column align-items-center px-2">
            <p>Example of 2/4 = Showtune, Eutrace.</p>
            <p>Example of 3/4 = English Waltz.</p>
            <p>Example of 4/4 = Piano Ballad.</p>
            <p>Example of 6/8 = 6-8 Soul.</p>
          </div>
        </div>

        {/* BEAT SAMPLES */}
        <div className="container mt-4">
          <div className="d-flex justify-content-between align-items-center mb-3 flex-wrap gap-2">
            <h3 className="mb-0">Beat Samples</h3>

            <span className="badge bg-dark p-2">
              Total Songs: {beatData.beatSamples.length}
            </span>
          </div>

          <div className="table-responsive">
            <table className="table table-striped table-bordered text-center align-middle">
              <thead className="table-dark">
                <tr>
                  <th scope="col">...</th>
                  <th scope="col">Song</th>
                  <th scope="col">Category</th>
                  <th scope="col">Beat</th>
                </tr>
              </thead>

              <tbody>
                {beatData.beatSamples.map((item, index) => (
                  <tr key={`${item.song}-${index}`}>
                    <td>{index + 1}</td>
                    <td>{item.song}</td>
                    <td>{item.category}</td>
                    <td>{item.beat}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <p className="text-center text-secondary text-i my-5 fs-5">
          End of Beats Section.
        </p>
        <hr />
      </div>
      <Footer />
    </>
  );
}

export default Style;
