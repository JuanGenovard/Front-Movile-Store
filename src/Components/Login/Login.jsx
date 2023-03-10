import "./Login.scss"
import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useUserToggleContext } from "../../UserProvider";
import { Container, Row, Col } from 'react-bootstrap'

/* A function that is used to login. */
const Login = () => {
    const navigate = useNavigate();
    const [form, setForm] = useState({
        email: '',
        password: ''
    });
    const [errors, setErrors] = useState({});
 /* A function that is used to set the value of the field. */
 /* A function that is used to set the value of the field. */
/**
 * If the field has an error, set the error to null.
 */
    const setField = (field, value) => {
        setForm({
            ...form,
            [field]: value
        })
        if (!!errors[field])
            setErrors({
                ...errors,
                [field]: null
            })
    }

    const validateForm = () => {
        const { email, password } = form;
        setErrors({
            email: '',
            password: '',
            noLogin: ''
        })
        const newErrors = {};
        if (!email || email === 'Enter email') {
            newErrors.email = 'Please enter an email'
        } else if (!/.+\@.+\..+/.test(email)) newErrors.email = 'Please input a valid email'
        if (!password || password === 'Enter your password') newErrors.password = 'Please enter a password'
        return newErrors;
    }
    const changeLogin = useUserToggleContext();

/* Preventing the default action of the form. */
    const handleSubmit = (e) => {
        e.preventDefault()
        const newErrors = {};
        const formErrors = validateForm();
        if (Object.keys(formErrors).length > 0) {
            setErrors(formErrors);
        }
        else {
            try {
                axios.post("https://proyectofinal-production-63cf.up.railway.app/auth/login", form)
                    .then(response => {
                        localStorage.setItem('jwt', response.data.jwt);
                      /* Calling the function that is passed to the context provider. */
                        changeLogin(response.data.username, response.data.isAdmin);
                        localStorage.setItem('isAdmin', response.data.isAdmin);
                        localStorage.setItem('username', response.data.username);
                        navigate("/movil");
                    })
            }
            catch (error) {
                if (error) {
                    newErrors.noLogin = "Unable to login,check your credentials"
                    setErrors(newErrors);
                };
            }
        }
    }

    return (
        <div className="contform">
            <Row>
                <Col xs={24} md={12}>
                <Form className="containerform">
                <Form.Group controlId='email'>
                    <Form.Label className="words">Email</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder='Insertar email'
                        value={form.email}
                        onChange={(e) => setField('email', e.target.value)}
                        isInvalid={!!errors.email}
                        className="input"
                    >
                    </Form.Control>
                    <Form.Control.Feedback type='invalid'>
                        {errors.email}

                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId='password'>
                    <Form.Label className="words">Contrase??a</Form.Label>
                    <Form.Control
                        type='password'
                        placeholder='Insertar constrase??a'
                        value={form.password}
                        onChange={(e) => setField('password', e.target.value)}
                        isInvalid={!!errors.password}
                        className="input"
                    >
                    </Form.Control>
                    <Form.Control.Feedback type='invalid'>
                        {errors.password}
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="boxboton" controlId='submit'>
                    <Button type='submit' className="Boton"
                        onClick={handleSubmit} >
                        Iniciar
                    </Button>

                </Form.Group>
                <Form.Group>
                    <Form.Control.Feedback type='invalid'>
                        {errors.noLogin}
                    </Form.Control.Feedback>
                    <p className="error">{errors.noLogin}</p>

                </Form.Group>
            </Form>
                </Col>
            </Row>

        </div>
    );
}
export default Login;


