import React, {useState, useContext} from "react"
import {Navbar, Nav, NavbarBrand, NavItem, NavLink, Collapse, NavbarToggler} from "reactstrap"
import {Link, Redirect, useHistory} from "react-router-dom"
import { GameContext } from "../Context/context"
import { LOGOUT_USER, YOUR_CREATIONS } from "../Context/action.types"
import firebase from "firebase/app"



const NavBar = () => {

    
    const {state, dispatch} = useContext(GameContext)
    const {userUid, user} = state;

    const history = useHistory();

    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    
    const signoutuser = () => {
            firebase.auth()
            .signOut()
            .then(() => {
                dispatch({
                    type: LOGOUT_USER,
                    payload: null
                })
            })
    }
    const yourCreations = () => {
        dispatch({
            type: YOUR_CREATIONS
        })
        return <Redirect to="/assignments"/>
    }
    
        return (
            <Navbar style={{backgroundColor: "#2E7101"}} light expand="md" className="NavBar">
                <NavbarBrand>
                <Link to="/" className="text-white">DAS</Link>
                </NavbarBrand>
                <NavbarToggler onClick={toggle}/>
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="ml-auto" navbar >
                               {userUid ? (
                                   <>
                                   <NavItem className="navborder">
                                   <NavLink className="text-white" tag={Link} to="/">Home</NavLink>
                                   </NavItem>
                                   <NavItem className="navborder">
                                   <NavLink className="text-white" tag={Link} to="/assignments" onClick={yourCreations}>Creations</NavLink>
                                   </NavItem>
                                   <NavItem className="navborder">
                                   <NavLink className="text-white" tag={Link} to="/teamregister">Team Register</NavLink>
                                   </NavItem>
                                   <NavItem className="navborder">
                                   <NavLink className="text-white" tag={Link} to="/upload">Upload</NavLink>
                                   </NavItem>
                                   <NavItem className="navborder">
                                   <NavLink className="text-white" tag={Link} to="/" onClick={signoutuser}>Logout</NavLink>
                                   </NavItem>
                                    </>): (
                                        <>
                                        <NavItem className="navborder">
                                   <NavLink className="text-white" tag={Link} to="/">Home</NavLink>
                                   </NavItem>
                                   <NavItem className="navborder">
                                <NavLink className="text-white" tag={Link} to="/signin">Signin</NavLink>
                                </NavItem>
                                <NavItem className="navborder">
                                <NavLink className="text-white" tag={Link} to="/signup">Signup</NavLink>
                                </NavItem>
                                        </>
                                    )}
                    </Nav>
                </Collapse>
            </Navbar>
    )
}

export default NavBar;