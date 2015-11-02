import React from 'react';

const Loading = ({ className, loadingText = '...' }) => {
  const extraClassNames = className ? className.split(/\s+/g) : [];
  return (
    <span className={['loading'].concat(extraClassNames).join(' ')}>
      {loadingText}
    </span>
  );
}

export default Loading;

