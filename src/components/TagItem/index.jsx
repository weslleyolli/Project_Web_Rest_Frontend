// import React from "react";
import PropTypes from "prop-types";
import { FiPlus, FiX } from "react-icons/fi";
import { Container } from "./styles";

function TagItem({ isNew, value, onClick, ...rest }) {
  return (
    <Container>
      <input
        type="text"
        value={value}
        readOnly={!isNew}
        {...rest}
      />

      <button
        type="button"
        onClick={onClick}
        className={`button-${isNew ? "add" : "delete"}`}
      >
        {isNew ? <FiPlus /> : <FiX />}
      </button>
    </Container>
  );
}

TagItem.propTypes = {
  isNew: PropTypes.bool,
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export { TagItem };
