// Modal.js
import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const Register = ({ onClose, content, onreload }) => {
  const [userInfo, setUserInfo] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleSubmit = () => {};
  return (
    <div>
      <Modal show className="d-block ms-auto me-auto modal-header-no-border" centered backdrop="static" onHide={(onClose, onreload)}>
        <div className="d-flex w-100 justify-content-between align-items-center">
          <Modal.Header closeButton className="modal-header-no-border ms-0"></Modal.Header>
        </div>

        <hr className="mb-3" />

        <p className="text-dark text-center fs-6 fw-bold mb-3">Welcome to Airbnb</p>

        <Modal.Body>
          <div className="d-flex flex-column align-items-center">
            <div className="mb-3 w-100">
              <label htmlFor="username" className="form-label">
                Username
              </label>
              <input type="text" className="form-control" id="username" placeholder="Enter your username" />
            </div>

            <div className="mb-3 w-100">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input type="email" className="form-control" id="email" placeholder="Enter your email" />
            </div>

            <div className="mb-3 w-100">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input type="password" className="form-control" id="password" placeholder="Enter your password" />
            </div>

            <button type="submit" className="btn btn-danger w-100" onClick={(event) => handleSubmit(event, "submit")}>
              Sign Up{" "}
            </button>
          </div>
        </Modal.Body>
        <Modal.Footer className="modal-footer-no-border"></Modal.Footer>
      </Modal>
    </div>
  );
};

export default Register;
