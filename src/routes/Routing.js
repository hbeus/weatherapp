import React from 'react';
import { render } from 'react-dom';
import { Router, Link } from '@reach/router';
import { HomeView } from '../view/HomeView/HomeView';
import { ApplyView } from '../view/ApplyView/ApplyView';
import { NotFoundView } from '../view/NotFoundView/NotFoundView';

export const Routing = () => {
  return (
    
    <Router>
      <HomeView path="/" />
      <ApplyView path="apply" />
      <NotFoundView default />
    </Router>
  );
};
