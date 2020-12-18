import React, {useEffect, useReducer} from "react"
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"

import HeroSection from './Components/HeroSection';
import SignIn from './Components/SignIn';
import SignUp from './Components/SignUp';
import {BrowserRouter as Router , Route, Switch} from "react-router-dom"
import Upload from './Team/Upload';
import TeamRegister from './Team/TeamRegister';
import NavBar from './Components/NavBar';
import Teams from "./Team/Teams";
import Assignments from "./Team/Assignments"


import "firebase/auth"
import "firebase/firestore"
import "firebase/storage"
import {firebaseConfig} from "./Firebase/Config"

import firebase from "firebase"
import { GameContext } from "./Context/context";
import reducer from "./Context/reducer";
import TeamDetails from "./Team/TeamDetails";
import { ADD_TEAM, ADD_USER, SET_LOADING, ADD_ASSIGNMENT } from "./Context/action.types";

firebase.initializeApp(firebaseConfig)

const initialState = {
  teams: [],
  teamId: null,
  isLoading: false,
  users: [],
  user: {},
  assignments: [],
  photos: [],
  userUid: null,
  teamToUpdate: null,
  teamToUpdateKey: null
}



const App = () => {

  const [state, dispatch] = useReducer(reducer, initialState)
  const getDatas = async () => {
    dispatch({
      type: SET_LOADING,
      payload: true
    })
    const temRef = await firebase.firestore().collection('teams')
    temRef.onSnapshot(snap => {
      let documents = [];
      snap.forEach(doc => {
        documents.push({...doc.data()})
        dispatch({
          type: ADD_TEAM,
          payload: documents
        });
        dispatch({
          type: SET_LOADING,
          payload: false
        })
      })
      
    })
    const userRef = await firebase.firestore().collection("users").orderBy("teamNo", "asc")
    userRef.onSnapshot(snap => {
      let documents = [];
      snap.forEach(doc => {
        documents.push({...doc.data()})
        dispatch({
          type: ADD_USER,
          payload: documents
        });
      })
    })

    const assignmentsRef = await firebase.firestore().collection("assignments")
    assignmentsRef.onSnapshot(snap => {
      let documents = [];
      snap.forEach(doc => {
        documents.push({...doc.data()})
        dispatch({
          type: ADD_ASSIGNMENT,
          payload: documents
        });
      })
    })
  }
  
  
  useEffect(() => {
    getDatas();
  },[])

  return (
    <GameContext.Provider value={{state, dispatch}}>
    <Router>
    <NavBar/>
      <Switch>
        <Route exact path="/" component={HeroSection}/>
        <Route path="/signin" component={SignIn}/>
        <Route path="/signup" component={SignUp}/>
        <Route path="/upload" component={Upload}/>
        <Route path="/assignments" component={Assignments}/>
        <Route path="/teamregister" component={TeamRegister}/>
        <Route path="/teams" component={Teams}/>
        <Route path="/teamDetails" component={TeamDetails}/>
      </Switch>
    </Router>
    </GameContext.Provider>
    
  )
}

export default App;
