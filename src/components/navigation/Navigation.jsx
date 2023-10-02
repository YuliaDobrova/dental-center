import React from 'react';

import useWindowDimensions from '../hooks/widthHook';
import NavigationList from '../navigation/navigationList/NavigationList';
import './Navigation.css';

const Navigation = () => {
  const { width } = useWindowDimensions();
  return (
    <nav>
      <div className="NavWrapper">{width > 1250 && <NavigationList />}</div>
    </nav>
  );
};

export default Navigation;
