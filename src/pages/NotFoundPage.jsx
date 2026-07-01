import React from 'react';
import { Link } from 'react-router';

const PageNotFound = () => {
  return (
    <div style={{ textAlign: 'center', padding: '40px' }}>
      <h2>404 Page Not Found</h2>
      <p>The page you are looking for does not exist.</p>
      <div>
        <Link to="/">Go back to Home</Link>
      </div>
    </div>
  );
};

export default PageNotFound;