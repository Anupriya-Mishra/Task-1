import React from 'react'
import {auth,provider} from "../firebase"
import {useHistory} from 'react-router'
import { actionTypes } from '../reducer';
import { useStateValue } from '../StateProvider';
import "./Login.css";

function Login() {
    const [{},dispatch] = useStateValue();
    const history=useHistory()

    const signIn = () => {
        auth
            .signInWithPopup(provider)
            .then((result) => {
                dispatch({
                    type: actionTypes.SET_USER,
                    user: result.user,
                })
                
            })
            .catch((error) => alert(error.message));
    }

    return (
<div className="login">
            <div className="login_container">
                
                <div className="login_text">
                    <h1>Sign In</h1>
                </div>
                <button type="submit" onClick={signIn}>
                    Sign In with Google
                </button>
            </div>
            
        </div>
    )
}

export default Login
