import React from 'react';
/* eslint-disable func-style */
export default class Loading extends React.Component {

  static get propTypes() {
    return {
      className: React.PropTypes.string,
      overlay: React.PropTypes.bool,
      loadingText: React.PropTypes.string,
    };
  }

  render() {
    const extraClassNames = this.props.className ? this.props.className.split(/\s+/g) : [];
    const els = [];
    if (this.props.overlay) {
      els.push(<div className="loading__overlay" key="loading__overlay"></div>);
    }

    els.push(<div className="loading__inner" key="loading__inner"></div>);

    if (this.props.loadingText) {
      els.push(
        <div className="loading__text" key="loading__text">
          <div className="loading__text-inner">
            {this.props.loadingText}
          </div>
        </div>
      );
    }

    return (
      <div className={[ 'loading' ].concat(extraClassNames).join(' ')}>
        {els}
      </div>
    );
  }
}
