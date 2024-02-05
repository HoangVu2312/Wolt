import React, { useState } from 'react';
import { Container, Row, Col,OverlayTrigger, Tooltip } from 'react-bootstrap';
import '../App.css';

interface DeliveryFeeCalculatorProps {
  cartValue: number | null;
  deliveryDistance: number | null;
  numberOfItems: number | null;
  orderTime: Date | null;
}

const FeeCalculator: React.FC<DeliveryFeeCalculatorProps> = ({
  cartValue,
  deliveryDistance,
  numberOfItems,
  orderTime,
}) => {

  const [fee, setFee] = useState<number | null>(null);

  const isFridayRushHour = () => {
    const isFriday = orderTime?.getDay() === 5;

    const isRushHour =
      orderTime && orderTime.getHours() >= 15 && orderTime.getHours() < 19;

    return isFriday && isRushHour;
  };

  const calculateFee = () => {
   
  const smallOrderSurcharge = cartValue! < 10 ? 10 - cartValue! : 0;

  let deliveryFee = 1;

  // Additional distance fee
  const additionalDistance = Math.max(0, deliveryDistance! - 500);
  const distanceFee = Math.ceil(additionalDistance / 500);


  const minDistanceFee = additionalDistance > 0 ? Math.max(distanceFee, 1) : 0;
  
 
    const bulkSurcharge =
      numberOfItems! >= 5 ? 0.5 * (numberOfItems! - 4) : 0;
    
    const extraBulkSurcharge =
    numberOfItems! > 12 ? 1.2 : 0;
  

  let totalFee =
    deliveryFee + minDistanceFee + smallOrderSurcharge + bulkSurcharge + extraBulkSurcharge;
  totalFee = Math.min(totalFee, 15); // Fee cannot exceed 15€


  if (isFridayRushHour()) {
    totalFee *= 1.2;
    totalFee = Math.min(totalFee, 15); // Fee still cannot exceed 15€
  }

  // Free delivery for cart value equal or more than 200€
  if (cartValue! >= 200) {
    totalFee = 0;
  }

  setFee(totalFee);
  };
  
  

  return (
    <Container>
      <Row className="m-5">
        <Col>
          <OverlayTrigger
            placement="top"
            overlay={<Tooltip id="tooltip">Click me to get fee</Tooltip>}
          >
            <button onClick={calculateFee} className="get-fee-btn"></button>
          </OverlayTrigger>

          {fee !== null && (
            <div data-test-id="fee" className="mt-3">
              <h4>Delivery Fee: {fee.toFixed(2)}€</h4>
            </div>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default FeeCalculator;


