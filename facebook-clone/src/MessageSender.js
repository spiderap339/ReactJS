import React, {useState} from 'react';
import './messageSender.css';
import Avatar from 'react-avatar';
import {FaVideo, FaPhotoVideo} from 'react-icons/fa';
import {BiHappyBeaming} from 'react-icons/bi';
import { useStateValue } from './StateProvider';
import firebase, {db} from './firebase';

export default function MessageSender() {
    const [{user}, dispatch] = useStateValue();
    const [input, setInput] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();

        // some database stuff
        db.collection('posts').add({
            message: input,
            timestamp: '',
            profilePic: user.photoURL,
            username: user.displayName,
            image: imageUrl,
        })
        
        setImageUrl('');
        setInput('');
    }
    return (
        <div className="messageSender">
            <div className="messageSender__top">
                <Avatar src={user.photoURL}
                round="100px" size="40"
                 /> 
                <form>
                    <input
                        value={input}
                        onChange={(e) => {
                            setInput(e.target.value);
                        }} 
                        className="messageSender__input"
                        placeholder={`What's on your mind, ${user.displayName}...`}
                    />
                    <input 
                        value={imageUrl}
                        onChange={(e) => {
                            setImageUrl(e.target.value);
                        }}
                        placeholder="image URL (Optional)"
                    />
                    <button onClick={handleSubmit} type="submit">
                        Hidden submit
                    </button>
                </form>
            </div>
            <div className="messageSender__bottom">
                <div className="messageSender__bottomOption">
                    <FaVideo color="red" size="20"/>
                    <h3>Live Video</h3>
                </div>
                <div className="messageSender__bottomOption">
                    <FaPhotoVideo color="green" size="20" />
                    <h3>Photo/Video</h3>
                </div>
                <div className="messageSender__bottomOption">
                    <BiHappyBeaming color="yellow" size="20" />
                    <h3>Feeling/Activity</h3>
                </div>
            </div>
        </div>
    )
}