import Footer from "../utils/Footer";
import Navbar from "../utils/Nav";
import Spacer from "../utils/Spacer";

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
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <h3>Time Signature (Beats)</h3>
          <p>
            When beats starts you will hear the a kick and a snare, this is
            called a <span className="fw-bold">Bar</span>. The number of bars
            that makes a complete loop is called a{" "}
            <span className="fw-bold">Time Signature</span>. In musical sheets,
            a bar is a segment of music bounded by vertical lines. The time
            signatures include 2/4, 3/4, 4/4, and 6/8. Each time signature has
            its own unique feel and is used in different musical contexts.
          </p>
          <div className="my-4 d-flex flex-column align-items-center px-2">
            <p>Example of 2/4 = Showtune, Eutrace.</p>
            <p>Example of 3/4 = English Waltz.</p>
            <p>Example of 4/4 = Piano Ballad.</p>
            <p>Example of 6/8 = 6-8 Soul.</p>
          </div>
          <div className="container mt-4">
            <h3 className="mb-3">Beat Samples</h3>
            <table className="table table-striped table-bordered text-center">
              <thead className="table-dark">
                <tr>
                  <th scope="col">Song</th>
                  <th scope="col">Category</th>
                  <th scope="col">Beat</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Old Ragged Cross</td>
                  <td>Swing&Jazz</td>
                  <td>Jazz Waltz Fast</td>
                </tr>
                <tr>
                  <td>Mercy Rewrote</td>
                  <td>Swing&Jazz</td>
                  <td>Jazz Waltz Fast</td>
                </tr>
                <tr>
                  <td>He Touched Me</td>
                  <td>Swing&Jazz</td>
                  <td>Jazz Waltz Fast</td>
                </tr>
                <tr>
                  <td>Burdens</td>
                  <td>Ballroom</td>
                  <td>English Waltz</td>
                </tr>
                <tr>
                  <td>My Redeemer</td>
                  <td>Ballad</td>
                  <td>Piano Ballad</td>
                </tr>
                <tr>
                  <td>We Were Made</td>
                  <td>Ballad</td>
                  <td>Piano Ballad</td>
                </tr>
                <tr>
                  <td>He knows my name</td>
                  <td>Ballad</td>
                  <td>PopGtrBallad</td>
                </tr>
                <tr>
                  <td>Shallom Jerusalem</td>
                  <td>Ballad</td>
                  <td>Analog Ballad</td>
                </tr>
                <tr>
                  <td>Sweet Anointing</td>
                  <td>Ballad</td>
                  <td>PopGtrBallad</td>
                </tr>
                <tr>
                  <td>Lamb of God</td>
                  <td>Ballad</td>
                  <td>PopGtrBallad</td>
                </tr>
                <tr>
                  <td>Carry me Jesus</td>
                  <td>Ballad</td>
                  <td>PopGtrBallad</td>
                </tr>
                <tr>
                  <td>Amazing Love</td>
                  <td>Ballad</td>
                  <td>PopGtrBallad</td>
                </tr>
                <tr>
                  <td>Majesty</td>
                  <td>Ballad</td>
                  <td>Love Song</td>
                </tr>
                <tr>
                  <td>Call upon</td>
                  <td>Country</td>
                  <td>Country Ballad</td>
                </tr>
                <tr>
                  <td>This Too Shall Pass</td>
                  <td>Country</td>
                  <td>Country Ballad</td>
                </tr>
                <tr>
                  <td>Increase</td>
                  <td>Country</td>
                  <td>Country Ballad</td>
                </tr>
                <tr>
                  <td>This Blood</td>
                  <td>Pop&Rock</td>
                  <td>3ive8Beat</td>
                </tr>
                <tr>
                  <td>Eagles Wings</td>
                  <td>Pop&Rock</td>
                  <td>3ive8Beat</td>
                </tr>
                <tr>
                  <td>Four Days Late</td>
                  <td>R&B</td>
                  <td>6-8 Soul</td>
                </tr>
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
