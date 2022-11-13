import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import "./Shipment.css";

const Shipment = () => {
  const [user] = useAuthState(auth);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const handleInputName = (event) => {
    setName(event.target.value);
  };
  const handleInputPhone = (event) => {
    setPhone(event.target.value);
  };
  const handleInputAddress = (event) => {
    setAddress(event.target.value);
  };

  const createShipping = (event) => {
    event.preventDefault();
    const shipping = { name, email: user?.email, phone, address };
    console.log(shipping);
  };

  return (
    <div className="login-form">
      <form onSubmit={createShipping}>
        <fieldset>
          <legend>
            <h2 className="form-title">Shipping form</h2>
          </legend>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              onBlur={handleInputName}
              type="text"
              name="name"
              id=""
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              value={user?.email}
              disabled
              type="email"
              name="email"
              id=""
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Phone</label>
            <input
              onBlur={handleInputPhone}
              type="number"
              name="password"
              id=""
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Address</label>
            <input
              onBlur={handleInputAddress}
              type="text"
              name="password"
              id=""
              required
            />
          </div>
          <p style={{ color: "red", marginBottom: "1rem" }}>{name}</p>
          <input
            type="submit"
            value="Add to shipping"
            className="register-btn"
          />
        </fieldset>
      </form>
    </div>
  );
};

export default Shipment;
