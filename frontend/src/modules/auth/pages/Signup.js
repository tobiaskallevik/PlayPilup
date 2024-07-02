import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Button,
  Row,
  Col,
  Form,
  FormControl
} from "react-bootstrap";

class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
        };
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    onSignupClick = () => {
        const userData = {
            username: this.state.username,
            password: this.state.password
        };
        console.log(userData);
    };

    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <h1>Signup</h1>
                        <Form>
                            <Form.Group controlId="usernameId">
                                <Form.Label>Username</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter username"
                                    name="username"
                                    value={this.state.username}
                                    onChange={this.onChange}
                                />
                            </Form.Group>
                            <Form.Group controlId="passwordId">
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    type="password"
                                    placeholder="Password"
                                    name="password"
                                    value={this.state.password}
                                    onChange={this.onChange}
                                />
                            </Form.Group>
                            <Button
                                variant="primary"
                                onClick={this.onSignupClick}
                            >
                                Signup
                            </Button>
                        </Form>
                        <p className="mt-2">
                            Already have account? <Link to="/login">Login</Link>
                        </p>
                    </Col>
                </Row>
            </Container>
        );
    }


}

export default Signup;