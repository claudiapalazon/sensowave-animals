import React, { useState, useEffect } from "react";
import data from "../data/evaluation_data.json";
import Header from "./Header";
import Main from "./Main";
import Detail from "./Detail";
import Footer from "./Footer";
import "../stylesheets/App.scss";

const App = () => {
  const [animals, setAnimals] = useState([]);
  const [modal, setModal] = useState(false);
  const [animal, setDetail] = useState([]);
  const [animalFiltered, setFilter] = useState([]);

  useEffect(() => {
    setAnimals(data);
    setFilter(data);
  }, []);

  const toggle = (event) => {
    const animalDetail = animals.find(
      (animal) => animal._id_legal === event.currentTarget.id
    );
    setDetail(animalDetail);
    if (!modal) {
      setModal(true);
    } else {
      setModal(false);
    }
  };
  const CloseDetail = () => {
    setModal(false);
  };

  const filterSex = (event) => {
    let filteredAnimals;
    if (event.currentTarget.value === "all") {
      filteredAnimals = animals;
    } else if (event.currentTarget.value === "female") {
      filteredAnimals = animals.filter((animal) => {
        return animal.sex.toLowerCase().includes("female");
      });
    } else if (event.currentTarget.value === "male") {
      filteredAnimals = animals
        .filter((animal) => {
          return animal.sex.length === 4;
        })
        .filter((animal) => {
          return animal.sex.toLowerCase().includes("male");
        });
    }
    setFilter(filteredAnimals);
  };

  return (
    <>
      <header className="Header">
        <Header />
      </header>
      <main className="Main">
        <Main
          toggle={toggle}
          animals={animalFiltered}
          modal={modal}
          filterSex={filterSex}
        />
        <Detail modal={modal} animal={animal} closeDetail={CloseDetail} />
      </main>
      <footer className="Footer">
        <Footer />
      </footer>
    </>
  );
};

export default App;
