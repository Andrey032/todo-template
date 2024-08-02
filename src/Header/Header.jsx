import PropTypes from 'prop-types';

function Header({ children }) {
  return (
    <header className="header">
      <h1>todos</h1>
      {children}
    </header>
  );
}

Header.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Header;
