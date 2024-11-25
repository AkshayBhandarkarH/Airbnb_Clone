import { React, useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = ({ onClose, onreload }) => {
  const navigate = useNavigate();

  const [info, setInfo] = useState({
    username: "",
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInfo((prevProps) => ({
      ...prevProps,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(info);
    axios
      .post("http://127.0.0.1:5000/register", info)
      .then((response) => {
        console.log("Data sent successfully:", response.data);
        alert("Registration Successful!");
        navigate("/login");
        onClose();
      })
      .catch((error) => console.error("Error sending data:", error));
  };
  return (
    <div>
      <Modal show className="d-block ms-auto me-auto modal-header-no-border" centered backdrop="static" onHide={(onClose, onreload)}>
        <div className="d-flex w-100 justify-content-between align-items-center">
          <Modal.Header closeButton className="modal-header-no-border ms-0"></Modal.Header>
        </div>

        <hr className="mb-3" />

        <p className="text-dark text-center fs-6 fw-bold mb-3">Welcome to Airbnb</p>

        <Modal.Body>
          <div className="container p-4">
            <form onSubmit={handleSubmit} className="w-70 mx-auto p-4 border rounded shadow-sm bg-light">
              <div className="mb-3">
                <label htmlFor="username" className="form-label">
                  Username
                </label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  className="form-control"
                  value={info.username}
                  placeholder="Enter Username"
                  onChange={handleChange}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="form-control"
                  value={info.email}
                  placeholder="Enter email"
                  onChange={handleChange}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="form-control"
                  value={info.password}
                  placeholder="Enter password"
                  onChange={handleChange}
                />
              </div>

              <button type="submit" className="btn btn-danger w-100">
                Sign Up
              </button>
            </form>
          </div>
        </Modal.Body>
        <Modal.Footer className="modal-footer-no-border"></Modal.Footer>
      </Modal>
    </div>
  );
};

export default Register;
