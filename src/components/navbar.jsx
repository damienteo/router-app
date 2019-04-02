import React from "react";
import { Link } from "react-router-dom";
//Link prevents default behaviour for a href and updates the URL. In turn, the updated URL causes a different component to be rendered
const NavBar = () => {
  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/products">Products</Link>
      </li>
      <li>
        <Link to="/posts/2018/06">Posts</Link>
      </li>
      <li>
        <Link to="/admin">Admin</Link>
      </li>
    </ul>
  );
};

export default NavBar;

//https://reacttraining.com/react-router/web/guides/quick-start
