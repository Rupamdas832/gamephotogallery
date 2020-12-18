import React, { useContext, useState, useEffect } from 'react'
import {Container, Col, Row, Button} from "reactstrap"
import firebase from "firebase/app"
import { GameContext } from '../Context/context'
import { Link, Redirect } from 'react-router-dom'
import Modal from "./Modal"



export default function Assignments() {

const {state,dispatch} = useContext(GameContext)
const {teamId, userUid} = state;

const [images, setImages] = useState([])
const [teamNumber, setTeamNumber] = useState(null)
const [selectedPhoto, setSelectedPhoto] = useState(null)


useEffect(() => {
    
    if(teamId === null){
        
        firebase.firestore().collection("assignments").doc(userUid).collection("images").orderBy("createdAt", "desc").onSnapshot(snap => {
            let documentImages = [];
            snap.forEach(doci => {
                documentImages.push({...doci.data(), id: doci.id})
            })
            setImages(documentImages)
        }) 
    } else{
        firebase.firestore().collection("assignments").onSnapshot(snap => {
            let documents = [];
            snap.forEach(doc => {
                if(doc.id === teamId) {
                    documents.push({...doc.data})}
            })
            console.log(documents[0].teamNo)
            setTeamNumber(documents[0].teamNo)
        })
        
     firebase.firestore().collection("assignments").doc(teamId).collection("images").orderBy("createdAt", "desc").onSnapshot(snap => {
                let documentImages = [];
                snap.forEach(doci => {
                    documentImages.push({...doci.data(), id: doci.id})
                })
                setImages(documentImages)
            })
        }
}, [])

    return (
        <Container fluid className="assignmentContainer">
            <div className="assignHeading"><h2>CREATIONS</h2><h3>{teamNumber}</h3><Link to="/teams"><Button className="backbutton">Back</Button></Link></div>
            <div className="border"></div>
            <div className="photo-grid">
                {images && images.map((doc) => (
                    <div className="img-wrap" key={doc.id} onClick={() => setSelectedPhoto(doc.url)}>
                        <img src={doc.url} alt="image"/>
                    </div>
                ))}
            </div>
            
            {selectedPhoto && <Modal selectedPhoto={selectedPhoto} setSelectedPhoto={setSelectedPhoto}/>}
        </Container>  
    )
}
