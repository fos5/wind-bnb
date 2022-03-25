import { FaSearch } from "react-icons/fa";
import Modal from "react-modal/lib/components/Modal";
import { useState } from "react";

Modal.setAppElement("#root");
const Navigation = () => {
  const [ModalisOpen, setModalIsOpen] = useState(false);

  return (
    <div className="nav">
      <div className="logo">
        <img src="/images/logo.svg" alt="logo" />
      </div>
      <div className="searchBar" onClick={() => setModalIsOpen(true)}>
        <input type="search" />
        <input type="search" placeholder="Add guests" />
        <FaSearch className="searchIcon" />
      </div>
      <Modal isOpen={ModalisOpen} onRequestClose={() => setModalIsOpen(false)}>
        <h2>Modal Title</h2>
        <p>Modal Body</p>
        <div>
          <button onClick={() => setModalIsOpen(false)}>Close</button>
        </div>
      </Modal>
    </div>
  );
};

export default Navigation;
