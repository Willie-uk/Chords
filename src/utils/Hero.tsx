import { useNavigate } from "react-router-dom";

function Hero() {
  const navigate = useNavigate();

  const handleModule1 = () => {
    navigate("/module1");
  };
  const handleModule2 = () => {
    navigate("/module2");
  };
  const handleModule3 = () => {
    navigate("/module3");
  };
  const handleModule3ii = () => {
    navigate("/module3/ii");
  };

  return (
    <div className="px-4 py-1 my-5 text-center">
      <h1 className="display-5 fw-bold">Worship Chords</h1>
      <div className="col-lg-6 mx-auto">
        <p className="lead mb-4">
          This is a platform for learning and mastering worship chords, scales,
          and progressions. Whether you're a beginner or an advanced player, we
          have resources to help you improve your skills. Join us in exploring
          the world of worship music and enhancing your piano journey.
        </p>
      </div>
      <div className="my-5">
        <h1>Content</h1>
        <div className="d-flex flex-column align-items-start px-4">
          <p>
            <span className="fw-bold">Module 1: </span> Intro, Naming, Semitones
            & Whole tones. Scales and Solfa Notations.
          </p>
          <p>
            <span className="fw-bold">Module 2: </span> Scales: Major Scale,
            Minor Scale, Harmonic Minor Scale, Pentatonic Scale and Blues Scale.
          </p>
          <p>
            <span className="fw-bold">Module 3(i): </span> Chords: Major Chords
            & Minor Chords.
          </p>
          <p>
            <span className="fw-bold">Module 3(ii): </span> Chord Inversion:
            Root Position, First Inversion, Second Inversion & Third Inversion.
          </p>
        </div>
      </div>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <div
          onClick={handleModule1}
          className="btn btn-outline-secondary btn-lg px-4 gap-3"
        >
          Module 1
        </div>
        <div onClick={handleModule2} className="btn btn-dark btn-lg px-4">
          Module 2
        </div>
        <div onClick={handleModule3} className="btn btn-dark btn-lg px-4">
          Module 3(i)
        </div>
        <div onClick={handleModule3ii} className="btn btn-dark btn-lg px-4">
          Module 3(ii)
        </div>
      </div>
    </div>
  );
}

export default Hero;
