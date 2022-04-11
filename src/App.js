import "./App.css";
import results from "./stays.json";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Stays from "./components/Stays";
function App() {
  const [stays, setStays] = useState([]);
  const [ishidden, setishidden] = useState(false);
  const [location, setlocation] = useState("Helsinki");

  const helsinki = () => {
    setlocation("Helsinki");
  };
  const turku = () => {
    setlocation("Turku");
  };
  const oulu = () => {
    setlocation("Oulu");
  };
  const vaasa = () => {
    setlocation("Vaasa");
  };
  const [childAge, setchildAge] = useState(0);
  const [adultAge, setadultAge] = useState(0);
  // increaseAge Child;
  const increaseChildAge = () => {
    setchildAge((childAge) => childAge + 1);
  };
  // DecreaseAge Child
  const decreaseChildAge = () => {
    setchildAge((childAge) => childAge - 1);
    if (childAge <= 0) {
      return setchildAge(0);
    }
  }; // increaseAge Adult;
  const increaseAdultAge = () => {
    setadultAge((adultAge) => adultAge + 1);
  };
  // DecreaseAge Child
  const decreaseAdultAge = () => {
    setadultAge((adultAge) => adultAge - 1);
    if (adultAge <= 0) {
      return setadultAge(0);
    }
  };

  // guests
  const guests = childAge + adultAge;

  useEffect(() => {
    const getStays = async () => {
      const staysFromServer = await fetchStays();
      const city = staysFromServer.filter((datum) => datum.city === "Helsinki");
      setStays(city);
    };

    getStays();
  }, []);
  // Fetch Stays
  const fetchStays = async () => {
    return results;
  };
  const showHidden = () => {
    setishidden(!ishidden);
  };

  // filter Stays
  const filterCity = async () => {
    const newStaysFromServer = await fetchStays();
    const newCity = newStaysFromServer.filter(
      (datum) => datum.city === location && datum.maxGuests >= guests
    );
    setStays(newCity);
    setishidden(false);
  };

  // Stays lenght
  const lenght = Object.keys(stays).length;

  return (
    <div className="container">
      <Navigation
        onFilter={filterCity}
        location={location}
        setlocation={location}
        onHide={showHidden}
        ishidden={ishidden}
        setishidden={setishidden}
        helsinki={helsinki}
        oulu={oulu}
        turku={turku}
        vaasa={vaasa}
        increaseAdultAge={increaseAdultAge}
        adultAge={adultAge}
        childAge={childAge}
        increaseChildAge={increaseChildAge}
        decreaseAdultAge={decreaseAdultAge}
        decreaseChildAge={decreaseChildAge}
        guests={guests}
      />
      <Header lenght={lenght} />
      <Stays stays={stays} />
    </div>
  );
}

export default App;
