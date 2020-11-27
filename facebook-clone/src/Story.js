import React from 'react';
import Avatar from 'react-avatar';
import './story.css';
export default function Story({profileSrc, title, image}) {
    return (
        <div style={{ backgroundImage: `url(${image})`}}
        className="story">
            {/* <img src={image} /> */}
            <div className="story__avatar">
                <Avatar src={profileSrc} round="100px" size="60" />

            </div>
            <h4>{title}</h4>
        </div>
    )
}