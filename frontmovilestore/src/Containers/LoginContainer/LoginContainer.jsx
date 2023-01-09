import Login from '../../Components/Login/Login'
import {Row,Col} from 'react-bootstrap'
import './LoginContainer.scss'

const LoginContainer = () =>{
    return (
        <Row className='m-0 p-0'>
            <Col className='m-0 p-0'>
            <Login />
            </Col>
        </Row>
    );
  }
export default LoginContainer;