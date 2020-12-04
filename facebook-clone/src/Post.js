import React from 'react';
import './post.css';
import Avatar from 'react-avatar';
import {FaThumbsUp} from 'react-icons/fa';
import {BiCommentDetail} from 'react-icons/bi';
import {MdNearMe} from 'react-icons/md';
import firebase from "firebase";

export default function Post({profilePic, username, timestamp, 
message, image }) {
    return (
        <div className="post">
            <div className="post__top">
                <Avatar
                    src={profilePic}
                    className="post__avatar"
                    round="100px"
                    size="50"
                />
                <div className="post__topInfo">
                    <h3>{username}</h3>
                    
                    {/* <p>{new Date(timestamp?.toDate()).toUTCString()}</p> */}
                </div>
            </div>

            <div className="post__bottom">
                <p>{message}</p>
            </div>

            <div className="post__image">
                <img src={image} alt="" />
            </div>

            <div className="post__options">
                <div className="post__option">
                    <FaThumbsUp size="25" color="white"/>
                    <p>Like</p>
                </div>

                <div className="post__option">
                    <BiCommentDetail size="25" color="white"/>
                    <p>Comment</p>
                </div>

                <div className="post__option">
                    <MdNearMe size="25" color="white"/>
                    <p>Share</p>
                </div>
            </div>
        </div>
    )
}