import React from 'react';
import './login.css';
import { auth, provider } from './firebase';
import {actionTypes} from './reducer';
import {useStateValue} from './StateProvider';

export default function Login() {
    const [state, dispatch] = useStateValue();
    const signIn = () => {
        // sign in...
        auth.signInWithPopup(provider)
        .then(result => {
            // console.log(result.user.displayName);

            dispatch({
                type: actionTypes.SET_USER,
                user: result.user,
            })
        })
        .catch((error) => alert(error.message));
    }
    return (
        <div className="login">
            <div className="login__button">
                <button type="submit" onClick={signIn}><h2>Sign In</h2></button>

            </div>
        </div>

    )
}