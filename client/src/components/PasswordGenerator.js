import React, { useState } from 'react';
import { Form, Row, Button } from 'react-bootstrap';
import PwLengthSlider from './PwLengthSlider';

function PasswordGenerator() {
  // establish the length state object
  const [length, setValue] = useState(18);

  return (
    <>
      <Form>
        <Form.Group>
          <Form.Control size="lg" type="text" readOnly />
        </Form.Group>
        <Row>
          <Form.Group className="d-flex justify-content-center mx-auto">
            <Form.Check
              className="mx-3 col-md-6"
              type="switch"
              id="uppercase"
              label="UPPERCASE"
            />
            <Form.Check
              className="mx-3 col-md-6"
              type="switch"
              id="numbers"
              label="NUMBERS"
            />
          </Form.Group>
        </Row>
        <Row>
          <Form.Group className="d-flex justify-content-center mx-auto">
            <Form.Check
              className="mx-3 col-md-6"
              type="switch"
              id="lowercase"
              label="LOWERCASE"
            />
            <Form.Check
              className="mx-3 col-md-6"
              type="switch"
              id="symbols"
              label="SYMBOLS"
            />
          </Form.Group>
        </Row>
        <Row>
          {/* pull in the PwLengthSlider component and pass in props */}
          <PwLengthSlider
            value={length}
            tooltipLabel={(label) => <p>Password Length: {length}</p>}
            min={8}
            max={28}
            size="lg"
            variant="warning"
            tooltip="on"
            onChange={(changeEvent) => setValue(changeEvent.target.value)}
          />
        </Row>
        <Row className="my-5 d-flex justify-content-center">
          <Button className="mx-3" variant="primary">
            CREATE PASSWORD
          </Button>
          <Button className="mx-3" variant="secondary">
            COPY PASSWORD
          </Button>
        </Row>
      </Form>
    </>
  );
}

export default PasswordGenerator;
