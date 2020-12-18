import React, { useEffect, useState, useContext } from 'react'
import firebase from "firebase/app"
import { GameContext } from '../Context/context';

export default function ProgressBar({file, setFile}) {

    const [error, setError] = useState(null)
    const [url, setUrl] = useState(null)
    const [progress, setProgress] = useState(0);

    const {state, dispatch} = useContext(GameContext); 
    const {assignments, userUid} = state;

    useEffect(() => {
        const useStorage = firebase.storage().ref(file.name)
    
          

        useStorage.put(file).on('state_changed', (snap) => {
            let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
            setProgress(percentage)
        }, (error) => {
            setError(error)
        }, async () => {
            const url = await useStorage.getDownloadURL();

            const timeStamp = firebase.firestore.FieldValue.serverTimestamp;
            const createdAt = timeStamp();

                firebase.firestore().collection("assignments").doc(userUid).collection("images").add({url: url, createdAt: createdAt})       
                setUrl(url)
                setFile(null)
                    
                
        })

    },[])

    

    return (
        <div className="progress-bar" style={{width: progress + '%'}}>
        </div>
    )
}
