/* global window chai */
/* eslint-disable id-match */
import Loading from '..';
import React from 'react';

describe('Loading', () => {
  it('renders a span with a default classname and text', () => {
    const loadingComp = new Loading({}, {});

    loadingComp.props.children.should.equal('...');
    loadingComp.props.className.should.equal('loading');
  });
  it('Can add more classNames and change the text', () => {
    const loadingComp = new Loading({
      className: 'testing',
      loadingText: 'foobar',
    }, {});

    loadingComp.props.children.should.equal('foobar');
    loadingComp.props.className.should.equal('loading testing');
  });
});
