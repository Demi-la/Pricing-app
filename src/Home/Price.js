import React from 'react'
import './Price.css'


function price() {
  return (
    <div className='price-container'>
      
      <div className='price-parent'>
        <h1>Simple, trafic-based pricing</h1>
        <p>sign-up for our 30-days trial. No credit card required</p>
      </div>
      <div className='price-box'>
          <div className='first-text'>
            <h3 className='pageviews page-views'>100K PAGEVIEWS</h3>
            <p className='pageviewst'><span className='price price-change'>$16.00</span>/month</p>
          </div>
          <div className='range-container'>

          <div className='range'>
             <input type="range" min="0" max="100" value="50" step="25" aria-label="Slider input"/>
          </div>
          </div>
       
      <div className='price-plan'>
        <p>Monthly Billing</p>
        <label className='switch'>
           <input type="checkbox"/>
           <span className='slider round'></span>
        </label>
        <p>Yearly Billing </p>
        <span className='discount'>25% Discount</span>
      
      </div>
      <div className='footer'>
       <div className='footer-check'>
        <ul>
          <li>Unlimited websites</li>
          <li>100% data ownership</li>
          <li>Email reports</li>
        </ul>
        <button>start my trial</button>
       </div>
      </div>
      </div>
    </div>
  )
}

export default price
