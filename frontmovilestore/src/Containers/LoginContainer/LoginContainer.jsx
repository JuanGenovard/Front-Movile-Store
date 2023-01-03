import Login from '../../Components/Login/Login'
import {Row,Col} from 'react-bootstrap'
import './LoginContainer.scss'

const LoginContainer = () =>{
    return (
        <Row className='ContainerLogin'>

          <Col xs={10} sm={8} md={6} lg={5}>
            <Login />
          </Col>
          
        </Row>
    );
  }
export default LoginContainer;