import "./App.css";
import { useState } from "react";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Stays from "./components/Stays";
function App() {
  const [stays, setStays] = useState([]);

  useEffect(() => {
    const getStays = async () => {
      const staysFromServer = await fetchStays();
      console.log(staysFromServer);
      setStays(staysFromServer);
    };

    getStays();
  }, []);
  // Fetch Stays
  const fetchStays = async () => {
    const res = await fetch("http://localhost:5000/stays");
    const data = await res.json();
    return data;
  };

  // filter Stays
  const filterStays = () => {
    console.log(fetchStays.lenght);
  };
  return (
    <div className="container">
      <Navigation />
      <Header />
      <Stays stays={stays} />
    </div>
  );
}

export default App;
