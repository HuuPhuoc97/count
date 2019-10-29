/* eslint-disable import/no-useless-path-segments */
/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import Count from './../../components/Count';
export default function HomePage() {
  return (
    <h1>
      <FormattedMessage {...messages.header} />
      <Count />
   
 </h1>
  );
}
