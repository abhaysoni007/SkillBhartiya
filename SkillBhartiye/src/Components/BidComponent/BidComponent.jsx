{/*import React, { useState } from 'react';
import './BidComponent.scss';

const BidComponent = () => {
  const [formData, setFormData] = useState({
    ask: '',
    reason: '',
    termsAccepted: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Placeholder for backend fetch logic
    console.log('Form data submitted:', formData);
  };

  return (
    <div className="bid-container">
      <h1 className="bid-title">BID:</h1>
      <div className='bid'>
        <strong>Bid Now:</strong>
      <form className="bid-form" onSubmit={handleSubmit}>
        <label htmlFor="ask" className="bid-label">Your Ask:</label>
        <input
          type="text"
          id="ask"
          name="ask"
          className="bid-input"
          value={formData.ask}
          onChange={handleChange}
          placeholder="Value"
        />

        <label htmlFor="reason" className="bid-label">Why we choose you?</label>
        <textarea
          id="reason"
          name="reason"
          className="bid-textarea"
          value={formData.reason}
          onChange={handleChange}
          placeholder="start typing (maximum 2000 characters)"
          maxLength="2000"
        ></textarea>

        <div className="bid-terms">
          <input
            type="checkbox"
            id="termsAccepted"
            name="termsAccepted"
            className="bid-checkbox"
            checked={formData.termsAccepted}
            onChange={handleChange}
          />
          <label htmlFor="termsAccepted" className="bid-terms-label">I accept the terms</label>
        </div>

        <button type="submit" className="bid-submit">SUBMIT</button>
      </form>
      </div>
    </div>
  );
};

export default BidComponent; */}

import React, { useState } from 'react';
import './BidComponent.scss';

const BidComponent = () => {
  const [formData, setFormData] = useState({
    ask: '',
    reason: '',
    termsAccepted: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Placeholder for backend fetch logic
    console.log('Form data submitted:', formData);
  };

  return (
    <div className="bid-container">
      <h1 className="bid-title">BID NOW:</h1>
      <div className="bid-form-wrapper">
        <form className="bid-form" onSubmit={handleSubmit}>
          <label htmlFor="ask" className="bid-label">Your Ask:</label>
          <input
            type="text"
            id="ask"
            name="ask"
            className="bid-input"
            value={formData.ask}
            onChange={handleChange}
            placeholder="Value"
          />

          <label htmlFor="reason" className="bid-label">Why we choose you?</label>
          <textarea
            id="reason"
            name="reason"
            className="bid-textarea"
            value={formData.reason}
            onChange={handleChange}
            placeholder="start typing (maximum 2000 characters)"
            maxLength="2000"
            
          ></textarea>

          <div className="bid-terms">
            <input
              type="checkbox"
              id="termsAccepted"
              name="termsAccepted"
              className="bid-checkbox"
              checked={formData.termsAccepted}
              onChange={handleChange}
            />
            <label htmlFor="termsAccepted" className="bid-terms-label">I accept the terms</label>
          </div>

          <button type="submit" className="bid-submit">SUBMIT</button>
        </form>
      </div>
    </div>
  );
};

export default BidComponent;

