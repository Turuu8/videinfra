import React from "react";

export const LeaveEmail = () => {
  return (
    <div className="content">
      <h3>Stay Tuned</h3>
      <div className="leave-email">
        <div className="input">
          <input type="text" required="required" />
          <span>Your e-mail</span>
          <button>Subscribe</button>
        </div>
        <p>By clicking the Subscribe button you</p> agree to our
        <span> Privacy Policy </span> terms
      </div>
    </div>
  );
};
