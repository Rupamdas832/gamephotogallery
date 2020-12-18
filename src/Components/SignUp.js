import React, {useState} from 'react'
import {Container, Col, Row, Input, FormGroup, Form, Card, CardBody, CardHeader, Label, CardFooter, Button} from "reactstrap"
import firebase from "firebase/app"
import { useHistory } from 'react-router-dom'


const SignIn = () => {

    
    const [email, setEmail] = useState('')
    const [userId, setUserId] = useState('')
    const [teamNo, setTeamNo] = useState('')
    const [teamName, setTeamName] = useState('')
    const [password, setPassword] = useState('')

    const history = useHistory();

const handleSignIn = () => {
    try{
        firebase.auth().createUserWithEmailAndPassword(
            email, password
        )
        .then((resp) => {
            return (firebase.firestore().collection("users").doc(resp.user.uid).set({
                userId: userId,
                teamNo: teamNo,
                teamName: teamName,
                uid: resp.user.uid
            }),
            firebase.firestore().collection("assignments").doc(resp.user.uid).set({
                teamNo: teamNo
            })
            )
        })
    } catch(error){
            console.log(error)
        }
}

const handleSubmit = e => {
    e.preventDefault();
    handleSignIn()
    setEmail("")
    setUserId("")
    setPassword("")
    setTeamName("")
    setTeamNo("")
    history.push('/signin')
}


return (
        <Container fluid className="text-center">
            <Row>
                <Col lg={6} className='offset-lg-3 mt-5'>
                    <Card>
                        <Form onSubmit={handleSubmit}>
                            <CardHeader className=''><h2>Team Sign-Up</h2></CardHeader>
                            <CardBody>
                            <FormGroup row>
                                    <Label for='teamNo' sm={3}>
                                        Team Number
                                    </Label>
                                    <Col sm={9}>
                                        <Input
                                            type='number'
                                            name='teamNo'
                                            id='teamNo'
                                            placeholder='Enter Team Number'
                                            value={teamNo}
                                            onChange={e => setTeamNo(e.target.value)}
                                        />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label for='teamName' sm={3}>
                                        Team Name
                                    </Label>
                                    <Col sm={9}>
                                        <Input
                                            type='text'
                                            name='teamName'
                                            id='teamName'
                                            placeholder='Enter Team Name (you can change it later)'
                                            value={teamName}
                                            onChange={e => setTeamName(e.target.value)}
                                        />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label for='email' sm={3}>
                                        Email
                                    </Label>
                                    <Col sm={9}>
                                        <Input
                                            type='email'
                                            name='email'
                                            id='email'
                                            placeholder='Enter EmailId'
                                            value={email}
                                            onChange={e => setEmail(e.target.value)}
                                        />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label for='userId' sm={3}>
                                        UserId
                                    </Label>
                                    <Col sm={9}>
                                        <Input
                                            type='text'
                                            name='userId'
                                            id='userId'
                                            placeholder='Enter UserId'
                                            value={userId}
                                            onChange={e => setUserId(e.target.value)}
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
