import React from 'react';
import FilterLink from './FilterLink';

const Footer = () => (
  <div>
    <FilterLink>All</FilterLink>
    {' '}
    <FilterLink>Read</FilterLink>
    {' '}
    <FilterLink>Unread</FilterLink>
  </div>
)

export default Footer;
