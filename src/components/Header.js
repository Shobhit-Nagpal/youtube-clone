import React, { useState } from "react";
import '../styles/Header.css'
import MenuIcon from '@mui/icons-material/Menu.js';
import SearchIcon from '@mui/icons-material/Search.js';
import VideoCallIcon from '@mui/icons-material/VideoCall.js';
import AppsIcon from '@mui/icons-material/Apps.js';
import NotificationsIcon from '@mui/icons-material/Notifications.js';
import { Avatar } from "@mui/material";
import { Link } from "react-router-dom";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import {auth, provider} from "../firebase/firebase";

const Header = () => {

    const [inputSearch, setInputSearch] = useState('');
    const [userAvatar, setUserAvatar] = useState('');

    const signIn = () => {
        signInWithPopup(auth, provider)
          .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            setUserAvatar(user.reloadUserInfo.photoUrl)
            // IdP data available using getAdditionalUserInfo(result)
            // ...
          }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.customData.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
      });
    }



    return (
        <div className="header">

            <div className="header__left">
                <MenuIcon />

                <Link to='/'>
                <img className="header__logo" 
                src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg" 
                alt="Youtube logo"
                />
                </Link>
            </div>

            <div className="header__input">
                <input value={inputSearch} onChange={(e) => {setInputSearch(e.target.value);}} type="text" placeholder="Search"/>
                <Link to={`/search/${inputSearch}`}>
                <SearchIcon className="header__inputButton"/>
                </Link>
            </div>

            <div className="header__icons">
                <VideoCallIcon className="header__icon"/>
                <AppsIcon className="header__icon"/>
                <NotificationsIcon className="header__icon"/>
                <Avatar 
                alt=""
                src={userAvatar}
                onClick = {() => {signIn()}}
                className="header__icons__avatar"
                />
            </div>
        </div>
    )
}

export default Header;