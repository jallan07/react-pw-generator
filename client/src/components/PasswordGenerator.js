import React, { useState } from 'react';
import { Form, Row, Button } from 'react-bootstrap';
import PwLengthSlider from './PwLengthSlider';

function PasswordGenerator() {
  // establish the length state object
  const [lengthState, setLengthState] = useState(18);
  const [charSetState, setCharSetState] = useState({
    lowers: true,
    numbers: true
  });
  const [passwordState, setPasswordState] = useState('');

  const generatePw = () => {
    let password = '';

    const symbols = '!@#$%^&*()+_-=.,/|~`';
    const lowers = 'abcdefghijklmnopqrstuvwxyz';
    const uppers = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '01234567890';

    let charSet = charSetState;
    console.log(charSet);

    // set the password length to the length state
    let pwLength = lengthState;
    console.log(pwLength);

    password = 'test';

    return password;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    let generatedPw = await generatePw();
    await setPasswordState(generatedPw);
  };

  return (
    <>
      <Form>
        <Form.Group>
          <Form.Control size="lg" type="text" readOnly />
        </Form.Group>
        <Row>
          <Form.Group className="d-flex justify-content-center mx-auto">
            <Form.Check
              defaultChecked={true}
              className="mx-3 col-md-6"
              type="switch"
              id="uppercase"
              label="UPPERCASE"
            />
            <Form.Check
              defaultChecked={true}
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
              defaultChecked={true}
              className="mx-3 col-md-6"
              type="switch"
              id="lowercase"
              label="LOWERCASE"
            />
            <Form.Check
              defaultChecked={true}
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
            value={lengthState}
            tooltipLabel={(label) => <p>Password Length: {lengthState}</p>}
            min={8}
            max={28}
            size="lg"
            variant="warning"
            tooltip="on"
            onChange={(changeEvent) =>
              setLengthState(changeEvent.currentTarget.value)
            }
          />
        </Row>
        <Row className="my-5 d-flex justify-content-center">
          <Button
            className="mx-3"
            variant="primary"
            type="submit"
            onClick={onSubmit}
          >
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
