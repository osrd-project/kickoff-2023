import "./App.css";
import { SiMetrodeparis } from "react-icons/si";

function App() {
  return (
    <>
      <section className="section-one">
        <div className="container-one">

        <img src="./assets/logo-kickoff/OSRD-kickoff-programme-logo-kickoff.svg" alt="logo"></img>

          <div>Date</div>
          <div>
            <p>
              Présentation des versions Short Term DCM et Etudes Exploitation du
              programme OSRD
            </p>{" "}
          </div>
          <div>
            <p>(+diffusion en ligne)</p>
          </div>
        </div>
      </section>
      <section className="section-two">
        <div>
          Design <span style={{ color: "#000000" }}>your Journey</span>
        </div>
        <div>34 rue du commandant René Mouchotte</div>
        <div>de 14h à 16h</div>
        <div>
          <SiMetrodeparis />
          Montparnasse Bienvenue
        </div>
        <div>75014 Paris</div>
        <div>Le lieu</div>
        <img src="./assets/plan/OSRD-kickoff-programme-plan-event.svg" alt="plan"></img>
      </section>
      <section className="section-three">SECTION 3</section>
      <section className="section-four">SECTION 4</section>
    </>
  );
}

export default App;
