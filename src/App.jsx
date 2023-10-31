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
            <p> Présentation des versions <b>Short Term DCM</b> et <b>Etudes Exploitation</b> du <b>programme</b> <span style={{ color: "#786ABF" }}>OSRD</span>
            </p>
          </div>
          <div>
            <p>(+diffusion en ligne)</p>
          </div>
        </div>
      </section>
      <section className="section-two">
        <div className="part-one">
        <br/>
          <h2>
            Design <span style={{ color: "#000000" }}>your Journey</span>
         </h2>
          <p>
            34 rue du commandant René Mouchotte <br/> de 14h à 16h <br/> <SiMetrodeparis /><span> Montparnasse Bienvenue</span>
          </p>
          <p>75014 Paris</p>
          <br/>
        </div>
         <div className="part-two">
         <br/>
          <h2>Le lieu</h2>
          <br/>
          <img src="./assets/plan/OSRD-kickoff-programme-plan-event.svg" alt="plan" className="logo-place"></img>
        </div>
      </section>
      <section className="section-three">
        <br/>
        <h2>Les conférences</h2>
          <p style={{ color: "black" }}>Au programme, de 14h à 16h, une série de conférences de 5 minutes chronos pour vous montrer les différents aspects d'OSRD.</p>
          <time>14:00 - 16:00</time>
          <div className="centered-div">
            <p><span style={{ color: "#000000" }}>14:00</span> - Cérémonie d'ouverture et introduction au prgramme OSRD <br/> <b>Loïc Hamelin</b> - Directeur du programme OSRD</p>
            <p><span style={{ color: "#000000" }}>14:05</span> - Conférence principale Short Term DCM <br/> <b>Loïc Hamelin</b> - Directeur du programme OSRD <br/> <b>Loïc Hamelin</b> - Directeur du programme OSRD <br/> <b>Loïc Hamelin</b> - Directeur du programme OSRD <br/> <b>Loïc Hamelin</b> - Directeur du programme OSRD <br/> <b>Loïc Hamelin</b> - Directeur du programme OSRD <br/> <b>Loïc Hamelin</b> - Directeur du programme OSRD</p>
            <p><span style={{ color: "#000000" }}>15:45</span> - Conclusion et avenir du projet au sein de SNCF Réseau <br/> <b>Loïc Hamelin</b> - Directeur du programme OSRD</p>
          </div>
      </section>
      <section className="section-four">
        <div className="container-four">
          <div>
            <h2>La suite</h2>
          </div>
          <div>
            <p>
              Pour plus d'informations, <br></br>
              cliquez sur :
            </p>
            <a href="https://osrd.fr/fr/">
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
