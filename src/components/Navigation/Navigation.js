import React from 'react';

const Navigation = ({ onRouteChange, isSignedIn }) => {
  if (isSignedIn) {
    return (
      <nav style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <p
          onClick={() => onRouteChange('signout')}
          className="f4 link dim black underline pa3 u pointer"
        >
          sign out
        </p>
      </nav>
    );
  } else {
    return (
      <nav style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <p
          onClick={() => onRouteChange('signin')}
          className="f4 link dim black underline pa3 pointer"
        >
          sign in
        </p>
        <p
          onClick={() => onRouteChange('register')}
          className="f4 link dim black underline pa3 pointer"
        >
          register
        </p>
      </nav>
    );
  }
};

export default Navigation;
