import React from 'react';
import s from './Navbar.module.css';
import { NavLink } from 'react-router-dom';
import Friends from './Friends/Friends';

// let s = {
//   'nav': 'Navbar_nav__3gjm',
//   'item': 'navbar_mkk0',
//   'active': 'Navbar_active__0gd'
// }
// let c1 = "item";
// let c2 = "active"
// item active
// let classes = c1+ " " + c2;
// let classes = `${s.item} ${c2.active}`

const Navbar = (props) => {

  let friendElements = props.state.friends.map (f => <Friends name= {f.name} />);

  return (
    <nav className={s.nav}>
      <div className={s.item}>
        <NavLink to="/profile" activeClassName={s.active}>Profile</NavLink>
      </div>
      <div className={`${s.item} ${s.active}`}>
        <NavLink to="/dialogs" activeClassName={s.active}> Messages</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/news">News</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/music">Music</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/settings">Settings</NavLink>
      </div>

      <div className={s.Friends}>
        <NavLink className= {s.FriendsItem} to="/friendsItem"> {friendElements} </NavLink>
      </div>
    </nav>
  )
}

export default Navbar;