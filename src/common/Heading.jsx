import { Link } from "react-router-dom";
import PropTypes from "prop-types";
const Heading = ({ title, description, btn }) => {
  return (
    <>
      <h2>{title}</h2>
      <p>{description}</p>
      <div className="link_btn">
        <Link className="read_more">{btn}</Link>
      </div>
    </>
  );
};

Heading.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  btn: PropTypes.string.isRequired,
};
export default Heading;
