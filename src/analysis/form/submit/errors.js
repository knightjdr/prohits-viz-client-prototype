import React from 'react';

import './errors.css';

const Errors = (errors) => {
  if (Object.keys(errors).length > 0) {
    const content = Object.entries(errors).map(([key, error]) => (
      <div key={key}>{error}</div>
    ));
    return (
      <div className="form__errors">
        <div>
          Submission errors
        </div>
        <div>
          {content}
        </div>
      </div>
    );
  }
  return null;
};
export default Errors;
