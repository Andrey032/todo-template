import PropTypes from 'prop-types';
import './Main.css';

function Main({ children }) {
  return <section className="main">{children}</section>;
}

Main.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Main;
