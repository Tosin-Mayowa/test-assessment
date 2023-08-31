import React from "react";
import withWrapper from "../../withWrapper";
import "./Desktop.css";
const Desktop = () => {
  return (
    <>
      <div id="desktop">
        <div className="subscription">
          <div className="texts_desktop">
            <p className="desktop_header_texts">
              Join Our Newsletter: Stay Connected, Savor Exclusives!
            </p>
            <p className="para_text">
              Subscribe to our newsletter and be a part of the vibrant Rare Eat
              Fresh community. Stay connected with the latest updates, exclusive
              offers, and exciting promotions on rare West African food
              ingredients.
            </p>
          </div>
          <div className="input_action">
            <input type="email" placeholder="Email address " id="type_email" />
            <button>Subscribe</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Desktop;
