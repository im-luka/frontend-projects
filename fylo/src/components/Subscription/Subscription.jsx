import React from "react";
import "./Subscription.css";

const Subscription = () => {
  return (
    <div className="fylo__subscription" id="signup">
      <h2>Get early access today</h2>
      <p>
        It only takes a minute to sign up and our free starter tier is extremely
        generous. If you have any questions, our support team would be happy to
        help you.
      </p>
      <div className="fylo__subscription-form">
        <input type="text" placeholder="email@example.com" />
        <button type="button">Get started for free</button>
      </div>
    </div>
  );
};

export default Subscription;
