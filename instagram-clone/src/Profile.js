import React from 'react';
import ProfileImage from './ProfileImage';
import './profile.css';
const Profile = ({posts, user}) => {

    return (
        <div className="profile">
            <h1>{user.displayName}</h1>
            <div className="profile__posts">
                {

                    
                    posts.map(({id, post}) => (
                        // console.log(post)
                        (user.displayName === post.username) ? (
                        <div>
                            <ProfileImage  postId={id} username={post.username} imageUrl={post.imageUrl} />
                        </div>
                        ) : (
                            console.log("post not found")
                        )
                    ))

                    // posts.map(({id, post}) => (
                    //     <h2>{id}</h2>
                    // ))
                }
            </div>
            

            <h2></h2>
        </div>
    )
}

export default Profile;