import React from 'react';
import { Container } from 'react-bootstrap';
import RangeSlider from 'react-bootstrap-range-slider';
import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css';

const PwLengthSlider = ({ value, tooltipLabel, onChange }) => {
  return (
    <Container className="w-100">
      <RangeSlider
        value={value}
        tooltipLabel={tooltipLabel}
        min={8}
        max={36}
        size="lg"
        variant="warning"
        tooltip="on"
        onChange={onChange}
      />
    </Container>
  );
};

export default PwLengthSlider;
