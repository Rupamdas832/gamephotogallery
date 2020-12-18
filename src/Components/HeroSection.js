import React, { useContext } from 'react'
import { Container, Button, Row } from "reactstrap";
import { Link } from "react-router-dom";
import { GameContext } from '../Context/context';

export default function HeroSection() {
    const {state} = useContext(GameContext)
    const {userUid} = state
    return (
        <Container className="herosection" fluid>
                
                <Container  className="hero1" fluid>
                    <h1 className="m-5">Welcome to Game Dev Pro League</h1>
                    <h3>A futuristic dream</h3>
                    <p>Along with some incredible individuals grouped in teams to create wonders</p>
                    <div>
                    <Button className="btnhero aboutbutton" tag={Link} to="/teams">Teams</Button>
                    {!userUid && <Button className="btnhero projectbutton" tag={Link} to="/signin">SignIn</Button>}
                    </div>
                </Container>
        </Container>
    )
}
