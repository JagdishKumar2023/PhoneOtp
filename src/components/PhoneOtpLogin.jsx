import React, { useState } from "react";
import { OtpInput } from "./OtpInput";

export const PhoneOtpLogin = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [showOtpInput, setShowOtpInput] = useState(false);

  const handlePhoneNumber = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handlePhoneSubmit = (e) => {
    e.preventDefault();
    setPhoneNumber("");
    // phone validation
    const regex = /[^0-9]/g;
    if (phoneNumber.length < 10 || regex.test(phoneNumber)) {
      alert("Invalid Phone number");
      return;
    }

    // Call BE API
    // show OTP Field
    setShowOtpInput(true);
  };

  const onotpSubmit = (otp) => {
    console.log("Login Successfull", otp);
  };

  return (
    <div>
      {!showOtpInput ? (
        <form onSubmit={handlePhoneSubmit}>
          <input
            type="tel"
            value={phoneNumber}
            onChange={handlePhoneNumber}
            placeholder="Enter phone number"
          />
          <button type="submit">Submit</button>
        </form>
      ) : (
        <div>
          <p>Enter OTP sent to {phoneNumber}</p>
          <OtpInput length={4} onotpSubmit={onotpSubmit} />
        </div>
      )}
    </div>
  );
};
