import React, { useState, useEffect } from 'react';
import './App.css';
import Post from './Post';
import { db, auth } from './firebase';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { Button, Input } from '@material-ui/core';
import ImageUpload from './ImageUpload';

function getModalStyle () {
  const top = 50; 
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function App() {
  // States for material ui
  const classes = useStyles(); 
  const [modalStyle] = useState(getModalStyle);

  // Initializing states using Hooks here.
  const [posts, setPosts] = useState([]);
  const [open, setOpen] = useState(false); // state for SignUp Modal
  const [openSignIn, setOpenSignIn] = useState(false); // state for SignIn Modal
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [user, setUser] = useState(null); 



  // useEffect runs a piece of code based on a specific condition
  // useEffect(funtion(),   condition)
  useEffect(() => {
    // This is where the code runs
    // onSnapshot() is a real time listener 
    // Listening to the changes in firebase db
    db.collection('posts').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
      // Every time a a new post is added, this code fires...
      // 'doc' is Document in firebase represents a post
      setPosts(snapshot.docs.map(doc => ({
        id: doc.id,
        post: doc.data()
      })));
    })
  }, [])

  // This runs if user or username changes
  useEffect(() => {

    // Listener
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // user has logged in...
        console.log( authUser);
        // setUsername(authUser);
        setUser(authUser);

      } else {
        // user has logged out...
        setUser(null);
      }
    })

    return () => {
      // Perform some cleanup actions
      unsubscribe();
    }
  }, [user, username])

  const signUp = (event) => {
    event.preventDefault();
    console.log('username = ' + username);
    auth
    .createUserWithEmailAndPassword(email, password)
    .then((authUser) => {
      return authUser.user.updateProfile({
        displayName: username
      })
    })
    .catch((error) => alert(error.message))

    setOpen(false);
  }

  const SignIn = (event) => {
    event.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .catch((error) => alert(error.message))
    
    setOpenSignIn(false);
    setEmail('')
    setPassword('')
  }

  return (
    <div className="App">

    {/* <ImageUpload username={user.displayName}/> */}
      {/* Using Modal for SignUp */}
      <Modal 
      open={open} 
      onClose={() => setOpen(false)} 
      >
      <div>
        <div style={modalStyle} className={classes.paper}>
          <center>
            <img
              className="app__headerImage"
              src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
              alt=""
            />
          </center>
          <form className="app__signup" >
            <Input
              placeholder="Username"
              type="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />

            <Input
              placeholder="email"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <Input
              placeholder="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <Button type="submit" onClick={signUp}>Sign Up</Button>
          </form>
        </div>

        
      </div>
      </Modal>


      <Modal 
      open={openSignIn} 
      onClose={() => setOpenSignIn(false)} 
      >
      <div>
        <div style={modalStyle} className={classes.paper}>
          <center>
            <img
              className="app__headerImage"
              src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
              alt=""
            />
          </center>
          <form className="app__signup" >
            
            <Input
              placeholder="email"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <Input
              placeholder="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <Button type="submit" onClick={SignIn}>Sign In</Button>
          </form>
        </div>

      </div>
      </Modal>
      
      <div className="app__header">
        <img className="app__headerImage"
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          alt=""
        />
        <input className="app__headerInput" placeholder="Search"/>
        {user ? (
          
          <Button onClick={() =>{
            
            auth.signOut()
            setEmail('')
            setPassword('')
          }
          }>Logout</Button>
        ) : (
          <div className="app__loginContainer">
            <Button onClick={() => setOpenSignIn(true)}>Sign In</Button>
            <Button onClick={() => setOpen(true)}>Sign Up</Button>
          </div>
        )}
      </div>
      
      <div className="app__posts">
        <div className="app__postsLeft">
          {
            posts.map(({ id, post })=> (
              <Post key={id} postId={id} user={user} username={post.username} caption={post.caption} imageUrl={post.imageUrl} />
            ))
          }
        </div>
      </div>
      
      {/* <InstagramEmbed
        url='https://www.instagram.com/p/ByN_tLSnxjGkBOL7j1mzNFErvOY8xsh1CqUZ1U0/'
      /> */}

      {user?.displayName ? (
        
        <ImageUpload username={user.displayName}/>
      ) : (
        <div>
        <h2>{user?.displayName}</h2>
        <h3>Sorry you need to login to upload</h3>
        </div>
      )} 
    </div>
  );
}

export default App;