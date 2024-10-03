import PropTypes from 'prop-types';
import './Main.css';
import { memo } from 'react';

const Main = memo(({ children }) => {
  return <section className="main">{children}</section>;
});

Main.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Main;
