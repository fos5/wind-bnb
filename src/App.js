import "./App.css";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Stays from "./components/Stays";
function App({ setishidden, ishidden, guests, location }) {
  const [stays, setStays] = useState([]);

  useEffect(() => {
    const getStays = async () => {
      const staysFromServer = await fetchStays();
      const helsinki = staysFromServer.filter(
        (datum) => datum.city === "Helsinki"
      );
      setStays(helsinki);
    };

    getStays();
  }, []);
  // Fetch Stays
  const fetchStays = async () => {
    const res = await fetch("http://localhost:5000/stays");
    const data = await res.json();
    return data;
    // const helsinki = data.filter((datum) => datum.city === "Helsinki");
    // console.log(helsinki);
  };

  // filter Stays
  const filterCity = () => {
    setishidden(!ishidden);
    setStays(
      stays.filter(
        (stay) => stay.city === { location } && stay.maxGuests >= { guests }
      )
    );
  };

  // Stays lenght
  const lenght = Object.keys(stays).length;

  return (
    <div className="container">
      <Navigation onFilter={filterCity} />
      <Header lenght={lenght} />
      <Stays stays={stays} />
    </div>
  );
}

export default App;
