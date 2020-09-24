import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <main>
      <h1>Error: 401</h1>
      <h2>Page Not Found</h2>
      <Link to="/">
        Go Back Home
      </Link>
    </main>
  );
}

export default NotFound;
