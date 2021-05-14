import React from "react";
import PersonIcon from "@material-ui/icons/Person";
import ForumIcon from "@material-ui/icons/Forum";
import "./Header.css";
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos"
import {Link,useHistory} from  'react-router-dom'
export default function Header({backButton}) {
  const history  = useHistory();  
  return (
    <div className="Header">
      {backButton ? (
        <IconButton onClick={
          history.goBack
        }>
          <ArrowBackIosIcon fontSize='large' className="header__icon"></ArrowBackIosIcon>
        </IconButton>
      ):(
        <IconButton>
        <PersonIcon className="header-icon" fontSize="large" />
      </IconButton>
      )}
     <Link to= '/'>
     <img
        className="img-logo"
        src="/tinder-logo.png"
        alt=""
        width="50"  
        height="50"
      ></img>
     </Link>
     
        <Link to="/chats">
      <IconButton>
        <ForumIcon className="header-icon" fontSize="large" />
      </IconButton>
      </Link> 
    </div>
  );
}
