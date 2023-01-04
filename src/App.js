import "./App.css";
import React from "react";
import Footer from "./component/footer/Footer";
import Navbar from "./component/navbar/Navbar";
import Page1 from "./component/pages/page1/Page1";
import Page1a from "./component/pages/page1a/Page1a";
import Page2 from "./component/pages/page2/Page2";
import Page3 from "./component/pages/page3/Page3";
import Page4 from "./component/pages/page4/Page4";
import Page5 from "./component/pages/page5/Page5";
import Page6 from "./component/pages/page6/Page6";
import Revenue from "./component/pages/revenue/Revenue";

import Modal from "react-modal";

function App() {
  let subtitle;
  let user = null;
  if (window.localStorage.getItem("userData")) {
    user = JSON.parse(window.localStorage.getItem("userData"));
    if (user.name === "") {
      window.localStorage.clear();
    }
  }
  const [modalIsOpen, setIsOpen] = React.useState(true);

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div className="App">
      <div>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          contentLabel="Example Modal"
          className="mod"
        >
          <div className="modal_pop">



            {user ? (
              <div className="modal_pop_user modal_pop">
                <h2>Hello {user.name}</h2>
                <h3>Your are Already Registerd on Local Storage</h3>
                <div className="details">
                  <h4>Email: {user.email}</h4>
                  <h4>Company: {user.companyName}</h4>
                  <h4>Position: {user.designation}</h4>
                </div>

                <button onClick={closeModal}>Continue Browsing</button>
              </div>
            ) 
            
            
            : 
            
            
            
            (
              <div className="modal_pop">
                <h2>Hello </h2>
                <h3
                  style={{
                    backgroundColor: "red",
                    padding: "10px",
                    borderRadius: "10px",
                    color: "White",
                  }}
                >
                  Your are Not a Registerd User/Logged In!!!!!
                </h3>
                <h4>Click the Button Below to Register/Log In Yourself</h4>
                <div onClick={closeModal} class="button_container_style">
                  <a href="#Waitinglist" class="undefined button_container">
                    <div>
                      <span class="text_button">Register Yourself</span>
                    </div>
                  </a>
                </div>
              </div>
            )}
          </div>
        </Modal>

      </div>

      <Navbar />
      <Page1 />
      <Revenue />
      <Page1a />
      <Page2 />
      <Page3 />
      <Page4 />
      <Page5 />
      <Page6 />
      <Footer />
    </div>
  );
}

export default App;
