import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import SettingsUserComponent from '../../Components/SettingsUser/SettingsUser';
import './SettingsContainer.scss'

const SettingsUser = () => {
  return (
    <Container fluid className='m-0 p-0'>
      <Row className='m-0 p-0'>
        <Col className='m-0 p-0'>
          <SettingsUserComponent />
        </Col>
      </Row>
    </Container>
  );
}
export default SettingsUser;