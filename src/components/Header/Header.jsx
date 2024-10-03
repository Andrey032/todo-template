import PropTypes from 'prop-types';
import { memo } from 'react';

const Header = memo(({ children }) => {
  return (
    <header className="header">
      <h1>todos</h1>
      {children}
    </header>
  );
});

Header.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Header;
