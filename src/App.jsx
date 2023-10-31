import "./App.css";
import { SiMetrodeparis } from "react-icons/si";

function App() {
  return (
    <>
      <section className="section-one">
        <div className="container-one">
          <img
            src="/assets/logo-kickoff/OSRD-kickoff-programme-logo-kickoff.svg"
            alt="logo"
            className="logo-osrd-big"
          ></img>
          <img
            src="/assets/logo-kickoff/OSRD-kickoff-programme-titre-kickoff.svg"
            alt="date"
            className="logo-titre"
          ></img>
          <img
            src="/assets/logo-kickoff/OSRD-kickoff-programme-date-kickoff.svg"
            alt="date"
            className="logo-date"
          ></img>

          <div>
            <p>
              Présentation des versions <b>Short Term DCM</b> et{" "}
              <b>Etudes Exploitation</b> du
              <b>programme</b> OSRD
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
        <img
          src="./assets/plan/OSRD-kickoff-programme-plan-event.svg"
          alt="plan"
        ></img>
      </section>
      <section className="section-three">SECTION 3</section>
      <section className="section-four">
        <div className="container-four">
          {" "}
          <div>
            <h2>La suite</h2>
          </div>
          <div>
            <p>
              Pour plus d'informations, <br></br>
              cliquez sur :
            </p>
            <a href="https://osrd.fr/fr/">
              {" "}
              <img
                src="/assets/logos/OSRD-kickoff-programme-logo-OSRD.svg"
                alt="osrd-logo"
              ></img>
            </a>
          </div>
        </div>
      </section>
      <div>
        <div className="footer">
          <div>
            <img
              src="/assets/logos/OSRD-kickoff-programme-logo-GOUV.svg"
              alt="logo-gouv"
            ></img>
            <img
              src="/assets/logos/OSRD-kickoff-programme-logo-UE.svg"
              alt="logo-ue"
            ></img>
          </div>

          <div>
            <img
              src="/assets/logos/OSRD-kickoff-programme-logo-SNCF.svg"
              alt="logo-sncf"
            ></img>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
