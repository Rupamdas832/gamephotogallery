import React, {useContext, useState} from 'react'
import {Container, Col, Row, Input, FormGroup, Form, Card, CardBody, CardHeader, Label, CardFooter, Button} from "reactstrap"
import firebase from "firebase/app"
import { GameContext } from '../Context/context'
import { SET_USER } from '../Context/action.types'
import { Redirect} from 'react-router-dom'



const SignIn = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {state, dispatch} = useContext(GameContext)
    const {userUid} = state;

const handleSignIn = () => {
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(res => {
        dispatch({
            type: SET_USER,
            payload: res.user,
            uid: res.user?.uid
        })
    }).catch(error => {
        console.log(error)
    })
}

const handleSubmit = e => {
    e.preventDefault();
    handleSignIn()
}

if(userUid){
    return <Redirect to="/"/>
} else
return (
        <Container fluid className="text-center">
            <Row>
                <Col lg={6} className='offset-lg-3 mt-5'>
                    <Card>
                        <Form onSubmit={handleSubmit}>
                            <CardHeader className=''><h2>Team Sign-In</h2></CardHeader>
                            <CardBody>
                                <FormGroup row>
                                    <Label for='email' sm={3}>
                                        Email
                                    </Label>
                                    <Col sm={9}>
                                        <Input
                                            type='email'
                                            name='email'
                                            id='email'
                                            placeholder='Enter email'
                                            value={email}
                                            onChange={e => setEmail(e.target.value)}
                                        />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label for='password' sm={3}>
                                        Password
                                    </Label>
                                    <Col sm={9}>
                                        <Input
                                            type='password'
                                            name='password'
                                            id='password'
                                            placeholder='Enter password(at least 6 character)'
                                            value={password}
                                            onChange={e => setPassword(e.target.value)}
                                        />
                                    </Col>
                                </FormGroup>
                            </CardBody>
                            <CardFooter>
                                <Button type='submit' block color='info'>
                                    Sign In
                                </Button>
                            </CardFooter>
                        </Form>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default SignIn;
