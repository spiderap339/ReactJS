import React, { useEffect, useState } from 'react';
import StoryReel from './StoryReel.js';
import './feed.css';
import MessageSender from './MessageSender.js';
import Post from './Post.js';
import {db} from './firebase';
export default function Feed() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        db.collection('posts').onSnapshot(snapshot => (
            setPosts(snapshot.docs.map(doc => ({ id: doc.id, data: doc.data() })))
        ))
    }, [])
    return (

        <div className="feed">
            {/* StoryReel */}
            <StoryReel />
            {/* MessageSender */}
            <MessageSender />

            {posts.map((post) => (
                <Post 
                    key={post.id}
                    profilePic={post.data.profilePic}
                    message={post.data.message}
                    timestamp={post.data.timestamp}
                    username={post.data.username}
                    image={post.data.image}
                />
            ))}
            <Post 
                profilePic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSc3I-WI5QwFKmwS2zx6n0gWB343KAk658_KA&usqp=CAU"
                message="hellooo guys..."
                timestamp="this is timestamp"
                username="spiderap"
                image="https://www.freecodecamp.org/news/content/images/2020/02/Ekran-Resmi-2019-11-18-18.08.13.png"
            />
            <Post 
                profilePic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSc3I-WI5QwFKmwS2zx6n0gWB343KAk658_KA&usqp=CAU"
                message="hellooo guys..."
                timestamp="this is timestamp"
                username="spiderap"
            
            />
            <Post />
            

        </div>
    )
}