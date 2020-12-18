import React, { useState, useContext } from 'react'
import {Container, Col, Row, Input, FormGroup, Form, Label, CardFooter, Button, Jumbotron} from "reactstrap"
import firebase from "firebase/app"
import { Redirect, useHistory } from 'react-router-dom'
import { GameContext } from '../Context/context'

export default function TeamRegister() {

    const [member1Name, setMember1Name] = useState("")
    const [member1Insta, setMember1Insta] = useState("")
    const [member2Name, setMember2Name] = useState("")
    const [member2Insta, setMember2Insta] = useState("")
    const [member3Name, setMember3Name] = useState("")
    const [member3Insta, setMember3Insta] = useState("")
    const [member4Name, setMember4Name] = useState("")
    const [member4Insta, setMember4Insta] = useState("")
    const [member5Name, setMember5Name] = useState("")
    const [member5Insta, setMember5Insta] = useState("")
    const [member6Name, setMember6Name] = useState("")
    const [member6Insta, setMember6Insta] = useState("")
    const [member7Name, setMember7Name] = useState("")
    const [member7Insta, setMember7Insta] = useState("")

    const history = useHistory();
    const {state} = useContext(GameContext)
    const {userUid} = state;
    const addTeams = async () => {
        try{
            firebase.firestore().collection("teams")
            .add({
                    member1Name: member1Name, member1Insta: member1Insta, member2Name: member2Name, member2Insta: member2Insta, userUid: userUid
                })
        } catch (error) {
            console.log(error)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addTeams();
        history.push("/")
    }
    if(!userUid){
        return <Redirect to="/"/>
    } else
    return (
        <Container fluid className="text-center">
                <Row>
                <Col lg={12} className='projectform'>
                    <Jumbotron>
                        <Form onSubmit={handleSubmit}>
                            <h1 className="display">Team Register</h1>
                            <div className="mt-5">
                            <h4 >Member 1</h4>
                                <FormGroup row className="mt-1">
                                        <Label for='member1Name' sm={2}>
                                            Name
                                        </Label>
                                        <Col sm={10}>
                                            <Input
                                                type='text'
                                                name='member1Name'
                                                id='member1Name'
                                                placeholder='Enter member 1 Name'
                                                value={member1Name}
                                                onChange={e => setMember1Name(e.target.value)}
                                            />
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row className="mt-1">
                                        <Label for='member1Insta' sm={2}>
                                            Instagram
                                        </Label>
                                        <Col sm={10}>
                                            <Input
                                                type='link'
                                                name='member1Insta'
                                                id='member1Insta'
                                                placeholder='Enter member 1 Instagram Link'
                                                value={member1Insta}
                                                onChange={e => setMember1Insta(e.target.value)}
                                            />
                                        </Col>
                                    </FormGroup>
                            </div>
                            <div className="mt-5">
                            <h4 >Member 2</h4>
                                <FormGroup row className="mt-1">
                                        <Label for='member2Name' sm={2}>
                                            Name
                                        </Label>
                                        <Col sm={10}>
                                            <Input
                                                type='text'
                                                name='member2Name'
                                                id='member2Name'
                                                placeholder='Enter member 2 Name'
                                                value={member2Name}
                                                onChange={e => setMember2Name(e.target.value)}
                                            />
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row className="mt-1">
                                        <Label for='member2Insta' sm={2}>
                                            Instagram
                                        </Label>
                                        <Col sm={10}>
                                            <Input
                                                type='link'
                                                name='member2Insta'
                                                id='member2Insta'
                                                placeholder='Enter member 2 Instagram Link'
                                                value={member2Insta}
                                                onChange={e => setMember2Insta(e.target.value)}
                                            />
                                        </Col>
                                    </FormGroup>
                            </div>
                            <div className="mt-5">
                            <h4 >Member 3</h4>
                                <FormGroup row className="mt-1">
                                        <Label for='member3Name' sm={2}>
                                            Name
                                        </Label>
                                        <Col sm={10}>
                                            <Input
                                                type='text'
                                                name='member3Name'
                                                id='member3Name'
                                                placeholder='Enter member 3 Name'
                                                value={member3Name}
                                                onChange={e => setMember3Name(e.target.value)}
                                            />
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row className="mt-1">
                                        <Label for='member3Insta' sm={2}>
                                            Instagram
                                        </Label>
                                        <Col sm={10}>
                                            <Input
                                                type='link'
                                                name='member3Insta'
                                                id='member3Insta'
                                                placeholder='Enter member 3 Instagram Link'
                                                value={member3Insta}
                                                onChange={e => setMember3Insta(e.target.value)}
                                            />
                                        </Col>
                                    </FormGroup>
                            </div>
                            <div className="mt-5">
                            <h4 >Member 4</h4>
                                <FormGroup row className="mt-1">
                                        <Label for='member4Name' sm={2}>
                                            Name
                                        </Label>
                                        <Col sm={10}>
                                            <Input
                                                type='text'
                                                name='member4Name'
                                                id='member4Name'
                                                placeholder='Enter member 4 Name'
                                                value={member4Name}
                                                onChange={e => setMember4Name(e.target.value)}
                                            />
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row className="mt-1">
                                        <Label for='member4Insta' sm={2}>
                                            Instagram
                                        </Label>
                                        <Col sm={10}>
                                            <Input
                                                type='link'
                                                name='member4Insta'
                                                id='member4Insta'
                                                placeholder='Enter member 4 Instagram Link'
                                                value={member4Insta}
                                                onChange={e => setMember4Insta(e.target.value)}
                                            />
                                        </Col>
                                    </FormGroup>
                            </div>
                            <div className="mt-5">
                            <h4 >Member 5</h4>
                                <FormGroup row className="mt-1">
                                        <Label for='member5Name' sm={2}>
                                            Name
                                        </Label>
                                        <Col sm={10}>
                                            <Input
                                                type='text'
                                                name='member5Name'
                                                id='member5Name'
                                                placeholder='Enter member 5 Name'
                                                value={member5Name}
                                                onChange={e => setMember5Name(e.target.value)}
                                            />
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row className="mt-1">
                                        <Label for='member5Insta' sm={2}>
                                            Instagram
                                        </Label>
                                        <Col sm={10}>
                                            <Input
                                                type='link'
                                                name='member5Insta'
                                                id='member5Insta'
                                                placeholder='Enter member 5 Instagram Link'
                                                value={member5Insta}
                                                onChange={e => setMember5Insta(e.target.value)}
                                            />
                                        </Col>
                                    </FormGroup>
                            </div>
                            <div className="mt-5">
                            <h4 >Member 6</h4>
                                <FormGroup row className="mt-6">
                                        <Label for='member6Name' sm={2}>
                                            Name
                                        </Label>
                                        <Col sm={10}>
                                            <Input
                                                type='text'
                                                name='member6Name'
                                                id='member6Name'
                                                placeholder='Enter member 6 Name'
                                                value={member6Name}
                                                onChange={e => setMember6Name(e.target.value)}
                                            />
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row className="mt-1">
                                        <Label for='member6Insta' sm={2}>
                                            Instagram
                                        </Label>
                                        <Col sm={10}>
                                            <Input
                                                type='link'
                                                name='member6Insta'
                                                id='member6Insta'
                                                placeholder='Enter member 6 Instagram Link'
                                                value={member6Insta}
                                                onChange={e => setMember6Insta(e.target.value)}
                                            />
                                        </Col>
                                    </FormGroup>
                            </div>
                            <div className="mt-5">
                            <h4 >Member 7</h4>
                                <FormGroup row className="mt-7">
                                        <Label for='member7Name' sm={2}>
                                            Name
                                        </Label>
                                        <Col sm={10}>
                                            <Input
                                                type='text'
                                                name='member7Name'
                                                id='member7Name'
                                                placeholder='Enter member 7 Name'
                                                value={member7Name}
                                                onChange={e => setMember7Name(e.target.value)}
                                            />
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row className="mt-1">
                                        <Label for='member7Insta' sm={2}>
                                            Instagram
                                        </Label>
                                        <Col sm={10}>
                                            <Input
                                                type='link'
                                                name='member7Insta'
                                                id='member7Insta'
                                                placeholder='Enter member 7 Instagram Link'
                                                value={member7Insta}
                                                onChange={e => setMember7Insta(e.target.value)}
                                            />
                                        </Col>
                                    </FormGroup>
                            </div>    
                            <CardFooter>
                                <Button type='submit' block color='info'>
                                    Upload
                                </Button>
                            </CardFooter>
                        </Form>
                        </Jumbotron>
                </Col>
            </Row>
        </Container>
    )
}
