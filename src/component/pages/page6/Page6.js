import "./page6.css";
import React, { useState } from "react";
import { AiFillCheckCircle } from "react-icons/ai";

const Page6 = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    companyName: "",
    designation: "",
    password: "",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);


  let user = null;
  if (window.localStorage.getItem("userData")) {
      user = JSON.parse(window.localStorage.getItem("userData"));
      if (user.name === "") {
        window.localStorage.clear();
      }
  }


  const joinButton = () => {
    localStorage.setItem("userData", JSON.stringify(formData));
      if (
        formData.name.trim().length > 0 &&
        formData.email.trim().length > 0 &&
        formData.companyName.trim().length > 0 &&
        formData.designation.trim().length > 0
      ) {
        setFormSubmitted(true);
      }
  };



  function handleSignOut() {
    window.localStorage.clear();
    window.location.reload(true);
  }

  return (
    <div className="page8_container" id="Waitinglist">
      <div className="page8_container_text">
        <div className="title">Book A Demo Now</div>
      </div>

      <div className="page8_text_container">
        <div className="card_container">
          <div className="email_container">
            {formSubmitted || user ? (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "column",
                }}
              >
                <AiFillCheckCircle color="#00CF33" size={100} />
                <div
                  style={{
                    fontSize: 30,
                    color: "#ffffff",
                    textAlign: "center",
                    fontWeight: "bolder",
                    margin: "40px 0px 30px 0px",
                  }}
                >
                  Thank you {user.name}! You Are Registered User!!!!
                </div>
                <div
                  style={{
                    fontSize: 20,
                    color: "#ffffff",
                    textAlign: "center",
                  }}
                >
                  Our Team will get back to you soon.
                </div>
                <div
                  style={{
                    textAlign: "center",
                    fontWeight: "bolder",
                    margin: "40px 0px 30px 0px",
                  }}
                >
                  <button
                    style={{
                      backgroundColor: "red",
                      fontSize: 20,
                      color: "white",
                      textAlign: "center",
                      padding: "20px",
                      cursor: "pointer",
                      border: "none",
                      borderRadius: "15px",
                      fontWeight: "900px",
                      outline: "none",
                    }}
                    onClick={handleSignOut}
                  >
                    Sign Out
                  </button>
                </div>
              </div>
            ) : (
              <div className="textform">
                <div className="full_width" style={{ marginBottom: 2 }}>
                  <div className="input_container">
                    <div className="input_label">
                      Name <span className="compulsory_icon">*</span>{" "}
                    </div>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="input_style"
                      name="name"
                      placeholder={"Ex. Anubhav Singh"}
                    />
                  </div>
                </div>

                <div className="full_width" style={{ marginBottom: 2 }}>
                  <div className="input_container">
                    <div className="input_label">
                      Email <span className="compulsory_icon">*</span>{" "}
                    </div>
                    <input
                      type="email" 
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="input_style"
                      name="email"
                      placeholder={"Ex. mail@website.com"}
                    />
                  </div>
                </div>

                <div className="full_width" style={{ marginBottom: 2 }}>
                  <div className="input_container">
                    <div className="input_label">
                      Company Name <span className="compulsory_icon">*</span>{" "}
                    </div>
                    <input
                      type="text"
                      value={formData.companyName}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          companyName: e.target.value,
                        })
                      }
                      className="input_style"
                      name="company name"
                      placeholder={"Ex. XYZ PVT LTD"}
                    />
                  </div>
                </div>

                <div className="full_width" style={{ marginBottom: 2 }}>
                  <div className="input_container">
                    <div className="input_label">
                      Your title <span className="compulsory_icon">*</span>{" "}
                    </div>
                    <input
                      type="text"
                      value={formData.designation}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          designation: e.target.value,
                        })
                      }
                      className="input_style"
                      name="designation"
                      placeholder={"Ex. Operational Head"}
                    />
                  </div>
                </div>
                <div className="full_width" style={{ marginBottom: 7 }}>
                  <div className="input_container">
                    <div className="input_label">
                      Password<span className="compulsory_icon">*</span>{" "}
                    </div>
                    <input
                      type="password"
                      value={formData.password}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          password: e.target.value,
                        })
                      }
                      className="input_style"
                      name="designation"
                      placeholder={"Password"}
                    />
                  </div>
                </div>

                <a
                  href={"#Waitinglist"}
                  className="button_container_style1"
                  onClick={() => joinButton()}
                >
                  <div>
                    <span className="text_button">Book Demo</span>
                  </div>
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
      <img
        src="https://voosh.in/static/media/book_now_bg.e9f9294653918137cd78.webp"
        className="waiting_list"
        alt=""
      />
    </div>
  );
};

export default Page6;
