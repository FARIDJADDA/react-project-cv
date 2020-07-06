import React from "react";
import Navigation from "../components/Navigation";

const Home = () => {
  return (
    <div className="home">
      <Navigation />
      <div className="homeContent">
        <div className="content">
          <h1>Djadda Farid</h1>
          <h2>Développeur Front-ends</h2>
          <div className="pdf">
            <a href="./media/CV-sans-titre.pdf" target="_blank">
              Télécharger CV
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
