import React from 'react';
import Loading from './index';

export default (
  <div>
    <p>Default with no overlay</p>
    <Loading />
    <br/>
    <div className="overlay">
      Just a test that is overlayed by the loader
      <Loading loadingText="We are loading something..." className="loading--overlay" />
    </div>
  </div>
);
