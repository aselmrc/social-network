import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reduser";


const MyPosts = (props) => {
 
  let postElements = props.posts.map (p => <Post message= {p.message} likeCount = {p.likeCount} />);

  let newPostElement = React.createRef();

  let addPost = () => {
    props.dispatch(addPostActionCreator());
  }

  let onPostChange = () => {
    let text = newPostElement.current.value;
    // let action = {type: 'UPDATE-NEW-POST-TEXT', newText: text};
    let action = updateNewPostTextActionCreator(text);
    props.dispatch(action);
  }

  return (  
  <div className={s.postsBlock}>
    <h3>My Post</h3>
    <div>
      <div>
        <textarea name="" onChange={onPostChange} ref= {newPostElement} cols="15" rows="5" value={props.newPostText}></textarea>
      </div>
        <button onClick={ addPost } className={s.btn}>Add post</button>
    </div>
    <div className={s.posts}>
      {postElements}
     <Post />
     <Post />
    </div>
  </div>
  
  )

}

export default MyPosts;