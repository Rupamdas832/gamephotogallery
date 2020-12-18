import React from 'react'

export default function Modal({selectedPhoto, setSelectedPhoto}) {

    const handleChange = (e) => {
        if(e.target.classList.contains("modal-div")){
            setSelectedPhoto(null)
        }
        
    }

    return (
        <div className="modal-div" onClick={handleChange}>
            <img src={selectedPhoto} alt="modalphoto" className="modal-img"/>
        </div>
    )
}
