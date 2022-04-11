import {
  FaMapMarkerAlt,
  FaMinus,
  FaPlus,
  FaSearch,
  FaTimes,
} from "react-icons/fa";
import logo from "../images/logo.svg";
const Navigation = ({
  onFilter,
  onHide,
  ishidden,
  location,
  helsinki,
  oulu,
  turku,
  vaasa,
  increaseAdultAge,
  increaseChildAge,
  decreaseAdultAge,
  decreaseChildAge,
  adultAge,
  childAge,
  guests,
}) => {
  return (
    <nav className="nav">
      <div className="logo">
        <a href="index.html">
          <img src={logo} alt="logo" />
        </a>
      </div>
      <div className="searchBar" onClick={onHide}>
        <button className="btn-search city">{location}, Finland</button>
        <button className="btn-search  guests">{guests} Guests</button>
        <button className="btn-search ">
          <FaSearch color="#eb5757" />
        </button>
      </div>
      {ishidden === true && (
        <div className="hidden-class">
          <button onClick={onHide} className="btn-close">
            <FaTimes color="#eb5757" />
          </button>
          <div className="hidden-class-container">
            <div className="input-bar">
              <button>
                <span className="bold">Location</span>
                <span className="block">{location}, Finland</span>
              </button>
              <button>
                <span className="bold">Guests</span>
                <span className="block">{guests} guests</span>
              </button>
              <button onClick={onFilter} className="filterBtn">
                <FaSearch /> Search
              </button>
            </div>
            <div className="grid-in-hidden-class">
              <div className="cities">
                <button onClick={helsinki}>
                  <FaMapMarkerAlt /> <span>Helsinki, Finland</span>
                </button>
                <button onClick={turku}>
                  <FaMapMarkerAlt /> <span>Turku, Finland</span>
                </button>
                <button onClick={oulu}>
                  <FaMapMarkerAlt /> <span>Oulu, Finland</span>
                </button>
                <button onClick={vaasa}>
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
