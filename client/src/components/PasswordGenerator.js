import React, { useState } from 'react';
import { Form, Row, Button, Container } from 'react-bootstrap';
import PwLengthSlider from './PwLengthSlider';
import CharSetToggle from './CharSetToggle';
import RandomCharSelect from './RandomCharSelect';
import hsimp from 'hsimp';

function PasswordGenerator() {
  // establish the length state object
  const [lengthState, setLengthState] = useState(18);
  const [charSetState, setCharSetState] = useState({
    uppercase: true,
    lowercase: true,
    numbers: true,
    symbols: true
  });
  const [passwordState, setPasswordState] = useState('');
  const [securityState, setSecurityState] = useState();

  const generatePw = async () => {
    let charSet = '';
    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercase = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '01234567890';
    const symbols = '!@#$%^&*()+_-=.,/|~`';

    let password;

    if (charSetState.uppercase) {
      charSet += uppercase;
    }
    if (charSetState.lowercase) {
      charSet += lowercase;
    }
    if (charSetState.numbers) {
      charSet += numbers;
    }
    if (charSetState.symbols) {
      charSet += symbols;
    }
    if (
      !charSetState.uppercase &&
      !charSetState.lowercase &&
      !charSetState.numbers &&
      !charSetState.symbols
    ) {
      alert('Please select at least one character set.');
      return;
    }

    password = await RandomCharSelect(lengthState, charSet);
    let securityCheck = await hsimp(password);

    setSecurityState(securityCheck);
    setPasswordState(password);

    return password;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    generatePw();
  };

  return (
    <>
      <h4
        className="my-3 px-2 py-4 text-center align-middle"
        style={{ background: '#0D2B37' }}
      >
        {passwordState ? passwordState : '*************'}
      </h4>

      <Form>
        <Row className="mt-4">
          <Form.Group className="d-flex justify-content-center text-center mx-auto">
            <CharSetToggle
              defaultChecked={charSetState.uppercase}
              className="col-md-6"
              type="switch"
              id="uppercase"
              label="UPPERCASE"
              onClick={() => {
                let upperToggle = !charSetState.uppercase;
                console.log(upperToggle);
                setCharSetState({ ...charSetState, uppercase: upperToggle });
              }}
            />
            <CharSetToggle
              defaultChecked={charSetState.numbers}
              className="col-md-6"
              type="switch"
              id="numbers"
              label="NUMBERS"
              onClick={() => {
                let numberToggle = !charSetState.numbers;
                console.log(numberToggle);
                setCharSetState({ ...charSetState, numbers: numberToggle });
              }}
            />
          </Form.Group>
        </Row>
        <Row>
          <Form.Group className="d-flex justify-content-center text-center mx-auto">
            <CharSetToggle
              defaultChecked={charSetState.lowercase}
              className="col-md-6"
              type="switch"
              id="lowercase"
              label="LOWERCASE"
              onClick={() => {
                let lowerToggle = !charSetState.lowercase;
                console.log(lowerToggle);
                setCharSetState({ ...charSetState, lowercase: lowerToggle });
              }}
            />
            <CharSetToggle
              defaultChecked={charSetState.symbols}
              className="col-md-6"
              type="switch"
              id="symbols"
              label="SYMBOLS"
              onClick={() => {
                let symbolToggle = !charSetState.symbols;
                console.log(symbolToggle);
                setCharSetState({ ...charSetState, symbols: symbolToggle });
              }}
            />
          </Form.Group>
        </Row>
        <Row>
          {/* pull in the PwLengthSlider component and pass in props */}
          <Container className="mx-3 pt-3 d-flex">
            <PwLengthSlider
              value={lengthState}
              tooltipLabel={(label) => <p>Password Length: {lengthState}</p>}
              onChange={(changeEvent) =>
                setLengthState(changeEvent.currentTarget.value)
              }
            />
          </Container>
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
        </Row>
      </Form>

      {securityState ? (
        <Container>
          <Row className="justify-content-center">
            <h5 className="col-md-9 text-center">
              It would take a computer{' '}
              <strong>{securityState.time.toUpperCase()}</strong> to crack your
              password.
            </h5>
          </Row>
        </Container>
      ) : null}
    </>
  );
}

export default PasswordGenerator;
