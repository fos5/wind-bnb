// import { keyboard } from "@testing-library/user-event/dist/keyboard";
import { useState } from "react";
import {
  FaMapMarkerAlt,
  FaMinus,
  FaPlus,
  FaSearch,
  FaTimes,
} from "react-icons/fa";
import logo from "../images/logo.svg";
const Navigation = ({ onFilter }) => {
  const [ishidden, setishidden] = useState(false);
  const [childAge, setchildAge] = useState(0);
  const [adultAge, setadultAge] = useState(0);
  const [location, setlocation] = useState("Helsinki, Finland");

  // Do something

  const showHidden = () => {
    setishidden(!ishidden);
  };
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

  return (
    <nav className="nav">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="searchBar" onClick={showHidden}>
        <button className="btn-search city">{location}</button>
        <button className="btn-search  guests">{guests} Guests</button>
        <button className="btn-search ">
          <FaSearch color="#eb5757" />
        </button>
      </div>
      {ishidden === true && (
        <div className="hidden-class">
          <button onClick={showHidden} className="btn-close">
            <FaTimes color="#eb5757" />
          </button>
          <div className="hidden-class-container">
            <div className="input-bar">
              <button>
                <span className="bold">Location</span>
                <span className="block">{location}</span>
              </button>
              <button>
                <span className="bold">Guests</span>
                <span className="block">{guests} guests</span>
              </button>
              <button className="filterBtn" onClick={() => onFilter}>
                <FaSearch /> Search
              </button>
            </div>
            <div className="grid-in-hidden-class">
              <div className="cities">
                <button onClick={() => setlocation("Helsinki, Finland")}>
                  <FaMapMarkerAlt /> <span>Helsinki, Finland</span>
                </button>
                <button onClick={() => setlocation("Turku, Finland")}>
                  <FaMapMarkerAlt /> <span>Turku, Finland</span>
                </button>
                <button onClick={() => setlocation("Oulu, Finland")}>
                  <FaMapMarkerAlt /> <span>Oulu, Finland</span>
                </button>
                <button onClick={() => setlocation("Vaasa, Finland")}>
                  <FaMapMarkerAlt /> <span>Vaasa, Finland</span>
                </button>
              </div>
              <div className="ages">
                <div>
                  <h3>Adults</h3>
                  <p className="faint">Ages 13 or above</p>
                  <button onClick={decreaseAdultAge}>
                    <FaMinus />
                  </button>
                  <span style={{ margin: "0 10px " }}>{adultAge}</span>

                  <button onClick={increaseAdultAge}>
                    <FaPlus />
                  </button>
                </div>
                <div>
                  <h3>Children</h3>
                  <p className="faint">Ages 2 to 12</p>
                  <button onClick={decreaseChildAge}>
                    <FaMinus />
                  </button>
                  <span style={{ margin: "0 10px" }}> {childAge}</span>

                  <button onClick={increaseChildAge}>
                    <FaPlus />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
