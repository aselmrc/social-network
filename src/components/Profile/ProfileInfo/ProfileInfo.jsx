import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../Common/Preloader/Preloader";
import LookJob from "../../../assets/images/lookingJob.png";
import NotLook from "../../../assets/images/sayNo.jpg";
import Post from "../MyPosts/Post/Post";
import ProfileStatus from "./ProfileStatus"


const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }

  return (
    <div>
      {/*<div>*/}
      {/*  <img className={s.profImg} src='https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350' />*/}
      {/*</div>*/}
      <div className={s.descriptionBlock}>
              <img src={props.profile.photos.large} alt=""/>
              <h5>{props.profile.fullName}</h5>
              <p>{props.profile.aboutMe}</p>
              <ProfileStatus status={props.status} updateUserStatus={props.updateUserStatus}/>
      </div>
    </div>
  )
}

export default ProfileInfo;