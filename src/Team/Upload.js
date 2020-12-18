import React, { useContext, useState, useEffect } from 'react'
import {Link, Redirect} from "react-router-dom"
import ProgressBar from "./ProgressBar"
import { GameContext } from '../Context/context';
import firebase from "firebase/app"
import { Button } from 'reactstrap';

export default function Upload() {

    const [file, setFile] = useState(null);
    const [images, setImages] = useState([])
    const [errorType, setErrorType] = useState(null);

    const {dispatch, state} = useContext(GameContext);
    const {userUid } = state;

    const types = ['image/png', 'image/jpeg', 'image/jpg']

    useEffect( () => {
        firebase.firestore().collection("assignments").doc(userUid).collection("images").orderBy("createdAt", "desc").onSnapshot(snap => {
            let documentImages = [];
            snap.forEach(doci => {
                documentImages.push({...doci.data(), id: doci.id})
            })
            setImages(documentImages)
        }) 
    }, [])

    const changeHandler = (e) => {
        let selected = e.target.files[0];
        if(selected && types.includes(selected.type)){
            setFile(selected);
            setErrorType(null)
        }
        else {
            setFile(null);
            setErrorType("Please select an image file(png, jpeg or jpg)")
        }
    }

    const editPhoto = (id) => {
        console.log(id);
    }
    const deletePhoto = async (url) => {
        console.log(url)
        const storageref = await firebase.storage().getRefrenceFromUrl(url)
        .then(() => {
            console.log("succefully deleted")
        })
        .catch(err => console.log(err))
    }

    if(userUid === null){
        return <Redirect to="/"/>
    } else
    return (
        <div className="uploadContainer">
        
            <input type="file" onChange={changeHandler}/>
            {errorType && <div className="error">{errorType}</div>}
            {file && <div className="file"><h3>Uploading...</h3></div>}
            <div className="uploadDiv">
                {file && <ProgressBar file={file} setFile={setFile}/>}
            </div>
            <div><Link to="/assignments"><Button className="backbutton">Have a look</Button></Link></div>
            <div className="uploadShowSection">
                {images && images.map((doc) => (
                    <div className="uploadGridImg" key={doc.id}>
                        <div className="uploadImg">
                            <img src={doc.url} alt="image"/>
                        </div>
                        <div className="uploadBtns">
                            <Button onClick={() => editPhoto(doc.id)} className="uploadBtn edit">Edit</Button>
                            <Button onClick={() => deletePhoto(doc.url)} className="uploadBtn delete">Delete</Button>
                        </div>
                    </div>
                ))}
            </div>   
        </div>
        
    )
}
