import React from "react";
import { styled } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const Navbar = () => {
  const {cart}=useSelector((state)=>state.allcart);

  return (
    <Nav>
      <NavLink to={"/"} className="h1">
        Project
      </NavLink>

      <NavLink className="cart-box" to={"/cart"}>
        <FontAwesomeIcon icon={faCartShopping} className="icon" />
      <p className="count">{cart.length}</p>
      </NavLink>
    </Nav>
  );
};

const Nav = styled.section`
  display: flex;
  justify-content: space-between;
  height: 10vh;
  align-items: center;
  background-color: black;
  color: white;
  padding: 0 5.5rem;
  .h1 {
    font-family: "Pacifico", cursive;
    font-size: 2.5rem;
    letter-spacing: 2.5px;
    font-weight: 100;
    color: #fff;
    text-decoration: none;
  }

  .cart-box {
    position: relative;
    padding: 1rem;
  
    &:hover{
        background-color: #ffffff6b;
        border-radius: 50%;
        transition: all 0.3s linear;
    }
    
    .icon {
      font-size: 2.5rem;
      color: #fff;
    }
    .count {
      position: absolute;
      top: 2px;
      right: 2px;
      background-color: red;
      color: #fff;
      width: 1.7rem;
      height: 1.7rem;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
    }
  }
`;

export default Navbar;
