import React from 'react';
import {db} from './firebase';
import './profileImage.css';
const ProfileImage = ({postId, username, imageUrl}) => {
    
    const handleDelete = () => {
        
        db.collection("posts").doc(postId).delete().then(function() {
            console.log("Document successfully deleted!");
        }).catch(function(error) {
            console.error("Error removing document: ", error);
        });
        // console.log(postId)
    }

    return (
        <div className="profileImage">
            {/* <h1>{username}</h1> */}
            <img 
                src={imageUrl} 
                width="300px"
            />
            <br/>
            <button onClick={handleDelete}>
                Delete
            </button>
            {/* <h2>{postId}</h2> */}
        </div>
    )
}

export default ProfileImage;