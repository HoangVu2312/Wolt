import React, { FC, useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"; 
import FeeCalculator from './components/FeeCalculator';

const App: FC = () => {
  const [cartValue, setCartValue] = useState<number | null>(null);
  const [deliveryDistance, setDeliveryDistance] = useState<number | null>(null);
  const [numberOfItems, setNumberOfItems] = useState<number | null>(null);
  const [selectedDateTime, setSelectedDateTime] = useState<Date | null>(new Date());

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedDate = e.target.valueAsDate;
    setSelectedDateTime((prevDateTime) => {
      const newDateTime = new Date(prevDateTime || new Date());
      if (selectedDate) {
        newDateTime.setFullYear(selectedDate.getFullYear());
        newDateTime.setMonth(selectedDate.getMonth());
        newDateTime.setDate(selectedDate.getDate());
      }
      return newDateTime;
    });
  };

  const handleTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedTime = e.target.value;
    setSelectedDateTime((prevDateTime) => {
      const newDateTime = new Date(prevDateTime || new Date());
      const [hours, minutes] = selectedTime.split(':');
      newDateTime.setHours(parseInt(hours, 10));
      newDateTime.setMinutes(parseInt(minutes, 10));
      return newDateTime;
    });
  };

  return (
    <div className="App">
      <Container>
        <Row className="m-5 form-container">
          <Col lg={12} className="mb-4">
            <h2>Wolt Calculator</h2>
          </Col>
          <Col lg={6}>
            <Form>
              <Form.Group controlId="cartValue" data-test-id="cartValue">
                <Form.Label><h6>Cart Value (€)</h6> </Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Enter cart value"
                  className='input-field'
                  onChange={(e) => setCartValue(parseFloat(e.target.value))}
                />
              </Form.Group>

              <Form.Group controlId="deliveryDistance" data-test-id="deliveryDistance">
                <Form.Label><h6>Delivery Distance (meters)</h6></Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Enter delivery distance"
                  className='input-field'
                  onChange={(e) => setDeliveryDistance(parseFloat(e.target.value))}
                />
              </Form.Group>

              <Form.Group controlId="numberOfItems" data-test-id="numberOfItems">
                <Form.Label><h6>Number of Items</h6></Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Enter number of items"
                  className='input-field'
                  onChange={(e) => setNumberOfItems(parseFloat(e.target.value))}
                />
              </Form.Group>
            </Form>
          </Col>
          <Col lg={6}>
            <Form>
              <Form.Group controlId="orderDate" data-test-id="orderDate">
                <Form.Label><h6>Order Date</h6></Form.Label>
                <Form.Control
                  type="date"
                  className='input-field'
                  value={selectedDateTime ? selectedDateTime.toISOString().split('T')[0] : ''}
                  onChange={handleDateChange}
                />
              </Form.Group>

              <Form.Group controlId="orderTime" data-test-id="orderTime">
                <Form.Label><h6>Order Time</h6></Form.Label>
                <Form.Control
                  type="time"
                  className='input-field'
                  value={selectedDateTime ? selectedDateTime.toTimeString().slice(0, 5) : ''}
                  onChange={handleTimeChange}
                />
              </Form.Group>
            </Form>
          </Col>
          <Col lg={12}>
            <FeeCalculator
              cartValue={cartValue}
              deliveryDistance={deliveryDistance}
              numberOfItems={numberOfItems}
              orderTime={selectedDateTime}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default App;



