import "./styles.css";
import P from "prop-types";

export const TextInput = ({ searchValue, handleChange }) => {
  return (
    <input
      className="text-input"
      placeholder="Type your search"
      onChange={handleChange}
      value={searchValue}
      type="search"
    />
  );
};

TextInput.propTypes = {
  searchValue: P.string.isRequired,
  handleChange: P.func.isRequired,
};
