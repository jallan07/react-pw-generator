import React from 'react';
import { Container } from 'react-bootstrap';
import RangeSlider from 'react-bootstrap-range-slider';
import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css';

const PwLengthSlider = ({
  value,
  tooltipLabel,
  min,
  max,
  size,
  variant,
  tooltip,
  onChange
}) => {
  return (
    <Container className="px-1">
      <RangeSlider
        value={value}
        tooltipLabel={tooltipLabel}
        min={min}
        max={max}
        size={size}
        variant={variant}
        tooltip={tooltip}
        onChange={onChange}
      />
    </Container>
  );
};

export default PwLengthSlider;
