import React from 'react';
import { Form } from 'react-bootstrap';

const CharSetToggle = ({
  defaultChecked,
  className,
  type,
  id,
  label,
  onClick
}) => {
  return (
    <Form.Check
      defaultChecked={defaultChecked}
      className={className}
      type={type}
      id={id}
      label={label}
      onClick={onClick}
    />
  );
};

export default CharSetToggle;
