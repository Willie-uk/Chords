import KWM42 from "../assets/Strings-Violin.png";
import Footer from "../utils/Footer";
import Navbar from "../utils/Nav";
import Spacer from "../utils/Spacer";

function StringsViolin() {
  return (
    <>
      <Navbar />
      <Spacer />
      <div className="container my-5">
        <div className="row">
          <h3 className="main-title">Strings Intergration to Violin</h3>
          <h1 className="module-title">Strings-Violin</h1>
          <div className="d-flex justify-content-center mt-4">
            <h4 className="fw-bold">Content: </h4>
            <h4 className="ms-2">Notes for Normal Worship.</h4>
          </div>
        </div>
        <div className="row mt-5">
          <h3>Notes</h3>
          <p>
            For intergration to normal worship, the violinists must be divided
            into 4 main parts; <span className="fw-bold">The Melody</span>,{" "}
            <span className="fw-bold">Violin 1</span>,{" "}
            <span className="fw-bold">Violin 2</span> and{" "}
            <span className="fw-bold">Violin 3</span>. The melody is the main
            part of the song, it is played by the{" "}
            <span className="fw-bold">Lead Violinist</span> (The main solo),
            while the rythm is being supported by the V1, V2 and V3. Make sure
            that the V3 is being played my advanced violinists.
          </p>
          <p>
            Since the notes played in the strings are 3 thats why we shall have
            three different notes and also since the strings are being played by
            chord number, you shall be assigned numbers for the violin chords.
          </p>
          <p>
            When V1, V2, V3 and the melody play together it forms a more advance
            sound and tonation that cannot be produced by one piano
          </p>
          <h2 className="text-center mt-4 text-warning">How to play</h2>
          <hr className="w-75 mx-auto" />
          <p className="text-center">
            The V1, V2 and V3 should play only after the snare hits not the main
            kick. For some cases the V3 would play earlier or in delay of the
            snare, thats why the V3 should be atleast and advance player. All
            this has no effect on the Main solo.
          </p>
          <div className="d-flex justify-content-around">
            <img className="img-sizes my-4" src={KWM42} alt="Stings-Violin" />
          </div>
        </div>
        <p className="text-center text-secondary">
          Chord 5 for the V3 you will play pre-snare.
        </p>
        <p className="text-center text-secondary">
          Chord 6 for the V3 you will play post-snare.
        </p>
        <p>Now with this chords practice a lot of songs with the pianist.</p>
        <p className="text-center text-secondary text-i my-5 fs-5">
          End of Strings Intergration to Violin.
        </p>
        <hr />
      </div>
      <Footer />
    </>
  );
}

export default StringsViolin;
