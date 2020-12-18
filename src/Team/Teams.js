import React, { useContext } from 'react'
import {Container, Col, Row, Button} from "reactstrap"
import {FaExpand, FaImage} from "react-icons/fa"
import { GameContext } from '../Context/context';
import { SET_SINGLE_TEAM } from '../Context/action.types';
import { useHistory } from 'react-router-dom';
import firebase from "firebase/app"

export default function Teams() {

    const {state, dispatch} = useContext(GameContext);
    const {teams, users} = state
    const history = useHistory();

    const viewAssignments = (uid) => {
        dispatch({
            type: SET_SINGLE_TEAM,
            payload: uid
        })
        history.push('/assignments')
    }

    const viewDetail = (uid) => {
        dispatch({
            type: SET_SINGLE_TEAM,
            payload: uid
        })
        history.push('/teamDetails')
    }
    
if(users) {
    return (
        <Container fluid className="text-center teams">
                <div className="teamsHeadingSection">
                <h1 className="p-5 text-white">Teams</h1>
                </div>
                <div className="teamsMainSection">
                    <Row>
                        {Object.entries(users).map(([key, user]) => {
                            return <Col md={3} key={key}>
                                <div className="teamsdiv">
                                    <h2 className="text-success teamName">{user.teamName}</h2>
                                    <p className="mt-1 text-white">Team {user.teamNo}</p>
                                    <Button style={{background: "none"}}><FaExpand onClick={() => viewDetail(user.uid)}/></Button> 
                                    <Button style={{background: "none"}}><FaImage onClick={() => viewAssignments(user.uid)}/></Button>     
                                </div>
                            </Col>
                        })}
                    </Row>
                </div>
                  
        </Container>
    )
}
else {
    return (<Container fluid className="text-center projects">
                <p>Teams Loading......</p>
    </Container>)
}
}
