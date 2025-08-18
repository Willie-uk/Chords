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
  const handleModule3iii = () => {
    navigate("/module3/iii");
  };
  const handleModule4 = () => {
    navigate("/module4");
  };
  const StringsViolin = () => {
    navigate("/strings-violin");
  };
  const settings = () => {
    navigate("/settings");
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
      <div className="my-5 container">
        <h1>Contents :</h1>
        <h3 className="text-start ms-4 text-secondary">Beginners Section</h3>
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
          <p>
            <span className="fw-bold">Module 3(iii): </span> Left Hand,
            Arpeggios, Octive Position.
          </p>
        </div>
        <h3 className="text-start ms-4 text-secondary">Intermediate Section</h3>
        <div className="d-flex flex-column align-items-start px-4">
          <p>
            <span className="fw-bold">Module 4: </span>Advanced Chords; F#M7
            (Dom 7), F#Dim7, F#Sus2 & F#Sus4, F#Sus3 & F#3Major, F# 6 minor
            Scale and F# Aug.
          </p>
        </div>
        <h3 className="text-start ms-4 text-secondary">Settings Section</h3>
        <div className="d-flex flex-column align-items-start px-4">
          <p>
            <span className="fw-bold">Settings:</span> E series, S670, SX600,
            S950 and SX900.
          </p>
        </div>
        <h3 className="text-start ms-4 text-secondary">
          Voices Section (Practicals)
        </h3>
        <div className="d-flex flex-column align-items-start px-4">
          <p>
            <span className="fw-bold">Voices: </span>Strings, Bass, Solo, Dx,
            Flute and Piano (running).
          </p>
        </div>
        <h3 className="text-start ms-4 text-secondary">
          Strings Intergration to violin
        </h3>
        <div className="d-flex flex-column align-items-start px-4">
          <p>
            <span className="fw-bold">Notes: </span> Notes For Normal worship
          </p>
        </div>
      </div>
      <div className="container">
        <div className="row g-3 justify-content-center">
          <div className="col-sm-3">
            <div
              onClick={handleModule1}
              className="btn btn-outline-secondary btn-lg w-100"
            >
              Module 1
            </div>
          </div>
          <div className="col-sm-3">
            <div onClick={handleModule2} className="btn btn-dark btn-lg w-100">
              Module 2
            </div>
          </div>
          <div className="col-sm-3">
            <div onClick={handleModule3} className="btn btn-dark btn-lg w-100">
              Module 3(i)
            </div>
          </div>
          <div className="col-sm-3">
            <div
              onClick={handleModule3ii}
              className="btn btn-dark btn-lg w-100"
            >
              Module 3(ii)
            </div>
          </div>
          <div className="col-sm-3">
            <div
              onClick={handleModule3iii}
              className="btn btn-dark btn-lg w-100"
            >
              Module 3(iii)
            </div>
          </div>
          <div className="col-sm-3">
            <div onClick={handleModule4} className="btn btn-dark btn-lg w-100">
              Module 4
            </div>
          </div>
          <div className="col-sm-3">
            <div onClick={settings} className="btn btn-dark btn-lg w-100">
              Settings
            </div>
          </div>
          <div className="col-sm-3">
            <div onClick={StringsViolin} className="btn btn-dark btn-lg w-100">
              Strings-Violin
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
