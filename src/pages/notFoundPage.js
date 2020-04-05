import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => (
  <div className="not-found-page">
      404 - Будь ласка не треба самодіяльності <Link to="/" className="not-found-link"> повернутись до гри</Link>
  </div>
);

export default NotFoundPage;
