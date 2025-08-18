import Footer from "../utils/Footer";
import Navbar from "../utils/Nav";
import Spacer from "../utils/Spacer";

function Settings() {
  return (
    <>
      <Navbar />
      <Spacer />
      <div className="container my-5">
        <div className="row">
          <h3 className="main-title">Piano Lessons</h3>
          <h1 className="module-title">Settings</h1>
          <div className="d-flex justify-content-center mt-4">
            <h4 className="fw-bold">Content: </h4>
            <h4 className="ms-2">Settings:</h4>
            <div className="ms-2">
              <h4>1. E series</h4>
              <h4>2. S670</h4>
              <h4>3. SX600</h4>
              <h4>4. S950</h4>
              <h4>5. SX900</h4>
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <h3>Setting E Series</h3>
          <p>
            These settings apply in all the <span className="fw-bold">E</span>{" "}
            series ranging from <span className="fw-bold">E333</span> series to{" "}
            <span className="fw-bold">E650</span> series.
          </p>
          <div className="container mt-4">
            <table className="table table-striped table-bordered text-center">
              <tbody>
                <tr>
                  <td>Style</td>
                  <td>16Beat</td>
                </tr>
                <tr>
                  <td>Tempo</td>
                  <td>42-44</td>
                </tr>
                <tr>
                  <td>Style Volume</td>
                  <td>100</td>
                </tr>
                <tr>
                  <td>Transpose</td>
                  <td>-4</td>
                </tr>
                <tr>
                  <td>Touch</td>
                  <td>Off</td>
                </tr>
                <tr>
                  <td>Split Point</td>
                  <td>64</td>
                </tr>
                <tr>
                  <td>M Voice</td>
                  <td>Slow Strings</td>
                </tr>
                <tr>
                  <td>M Octive</td>
                  <td>0</td>
                </tr>
                <tr>
                  <td>M Volume</td>
                  <td>60</td>
                </tr>
                <tr>
                  <td>D Voice</td>
                  <td>Slow Strings</td>
                </tr>
                <tr>
                  <td>D Octive</td>
                  <td>-1</td>
                </tr>
                <tr>
                  <td>D Volume</td>
                  <td>50</td>
                </tr>
                <tr>
                  <td>S Voice</td>
                  <td>Freteless</td>
                </tr>
                <tr>
                  <td>S Octive</td>
                  <td>-1</td>
                </tr>
                <tr>
                  <td>S Volume</td>
                  <td>40-60</td>
                </tr>
                <tr>
                  <td>Sustain</td>
                  <td>On</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="row mt-5">
          <h3>Setting S Series and SX Series</h3>
          <p>
            These settings apply in all the <span className="fw-bold">S</span>{" "}
            series and <span className="fw-bold">SX</span> series ranging from{" "}
            <span className="fw-bold">S670</span> series to{" "}
            <span className="fw-bold">S3000</span> series, and from{" "}
            <span className="fw-bold">SX600</span> series to{" "}
            <span className="fw-bold">SX920</span> series
          </p>
          <div className="container mt-4">
            <table className="table table-striped table-bordered text-center">
              <tbody>
                <tr>
                  <td>Style</td>
                  <td>16Beat</td>
                </tr>
                <tr>
                  <td>Tempo</td>
                  <td>42-44</td>
                </tr>
                <tr>
                  <td>Transpose</td>
                  <td>-4</td>
                </tr>
                <tr>
                  <td>Right 1 </td>
                  <td>Slow Strings</td>
                </tr>
                <tr>
                  <td>Right 2</td>
                  <td>Slow Strings</td>
                </tr>
                <tr>
                  <td>Left</td>
                  <td>Sub bass</td>
                </tr>
                <tr>
                  <td>Multipad</td>
                  <td>Shakers and ...</td>
                </tr>
                <tr>
                  <td>Right 1 Volume</td>
                  <td>40-60</td>
                </tr>
                <tr>
                  <td>Right 2 Volume</td>
                  <td>40-60</td>
                </tr>
                <tr>
                  <td>Left Volume</td>
                  <td>40-60</td>
                </tr>
                <tr>
                  <td>Style Volume</td>
                  <td>100-120</td>
                </tr>
                <tr>
                  <td>Multipad Volume</td>
                  <td>60-80</td>
                </tr>
                <tr>
                  <td>Right 1 Octive</td>
                  <td>0</td>
                </tr>
                <tr>
                  <td>Right 2 Octive</td>
                  <td>-1</td>
                </tr>
                <tr>
                  <td>Left Octive</td>
                  <td>-1</td>
                </tr>
              </tbody>
            </table>
            <p className="text-center">
              <span className="fw-bold">Touch: </span> Off
            </p>
            <p className="text-center">
              <span className="fw-bold">Sustain: </span> on
            </p>
            <p className="text-center">
              <span className="fw-bold">Split point: </span> Depends
            </p>
            <p className="text-center">
              <span className="fw-bold">Rythm 1 / Rythm 2: </span> 90 /70
              (Mixer)
            </p>
            <p className="text-center">
              <span className="fw-bold">Db Left / Db Right: </span> 10 /10
              (Equilizer)
            </p>
            <p className="text-center">
              <span className="fw-bold">Left Lock: </span> Off
            </p>
            <p className="text-center">
              <span className="fw-bold">Tempo Lock: </span> On
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Settings;
