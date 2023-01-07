import Login from '../../Components/Login/Login'
import {Row,Col} from 'react-bootstrap'
import './LoginContainer.scss'

const LoginContainer = () =>{
    return (
        <Row className='ContainerLogin'>
            <Login />
        </Row>
    );
  }
export default LoginContainer;