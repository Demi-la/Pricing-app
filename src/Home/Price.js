import React from "react";
import { useState } from "react";
import "./Price.css";

function Price() {
  const [pageviews, setPageviews] = useState(100);
  const [price, setPrice] = useState(8);
  const [discount, setDiscount] = useState(false);

  const handleSliderChange = (event) => {
    const value = event.target.value;

    let pageviews = 0;
    let price = 0;

    switch (value) {
      case "1":
        pageviews = "10K";
        price = 8;
        break;
      case "2":
        pageviews = "50K";
        price = 12;
        break;
      case "3":
        pageviews = "100K";
        price = 16;
        break;
      case "4":
        pageviews = "500K";
        price = 24;
        break;
      case "5":
        pageviews = "1M";
        price = 36;
        break;
      default:
        break;
    }

    setPageviews(pageviews);
    setPrice(price);

    if (discount) {
      price *= 0.75;
    }
  };
  const handleToggleChange = () => {
    setDiscount(!discount);
  };

  return (
    <div className="price-container">
      <div className="price-parent">
        <h1>Simple, trafic-based pricing</h1>
        <p>sign-up for our 30-days trial. No credit card required</p>
      </div>

      <div className="price-box">
        <div className="first-text">
          <h3 className="pageviews page-views">{pageviews} PAGEVIEWS</h3>
          <p className="pageviews page">
            <span className="price price-change">
              {" "}
              {discount
                ? `$${(price * 0.75).toFixed(2)}`
                : `$${price.toFixed(2)}`}
            </span>{" "}
            <span id="month">{discount ? "/year" : "/month"}</span>
          </p>
        </div>
        <div className="range-container">
          <div className="range">
            <input
              type="range"
              min="1"
              max="5"
              defaultValue="1"
              step="1"
              aria-label="Slider input"
              onChange={handleSliderChange}
            />
          </div>
          <p className="pageviews page">
            <span className="price price-change">
              {" "}
              {discount
                ? `$${(price * 0.75).toFixed(2)}`
                : `$${price.toFixed(2)}`}
            </span>{" "}
            <span id="month">{discount ? "/year" : "/month"}</span>
          </p>
        </div>

        <div className="price-plan">
          <p id="price__text">Monthly Billing</p>
          <label htmlFor="billing-toggle" className="switch">
            <input
              type="checkbox"
              id="billing-toggle"
              onChange={handleToggleChange}
            />
            <span className="slider round"></span>
          </label>
          <p>Yearly Billing </p>
          <span className="discount">25% Discount</span>
        </div>
        <div className="footer">
          <div className="footer-check">
            <ul>
              <li>Unlimited websites</li>
              <li>100% data ownership</li>
              <li>Email reports</li>
            </ul>
            <button>start my trial</button>
          </div>
        </div>
      </div>
      <h2 className="attribute">
        Project from <a href="https://www.frontendmentor.io">frontend mentor</a>{" "}
        coded by Adebiyi Oluwaseun
      </h2>
    </div>
  );
}

export default Price;
