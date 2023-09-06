import React, { useEffect, useState } from "react";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { styled } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrash,
  faTrashCan,
  faPlus,
  faMinus,
} from "@fortawesome/free-solid-svg-icons";

import { useDispatch, useSelector } from "react-redux";
import { addToCart, clearCart, reduceQty, removeSingle } from "./redux/Feature/Slice";

const Cart = () => {
  const { cart } = useSelector((state) => state.allcart);

const[totalPrice,newtotalPrice]=useState(0);

const[totalquantity,newtotalquantity]=useState(0);


  const dispatch=useDispatch();
const handleIncre=(e)=>{
dispatch(addToCart(e))
}

const removeItem=(e)=>{
  dispatch(removeSingle(e))
}


const handleDecre=(e)=>{
  dispatch(reduceQty(e));
}

const Clear=()=>{
dispatch(clearCart());
}

const total=()=>{
  let totalprice = 0
        cart.map((ele,ind)=>{
            totalprice = ele.price * ele.qnty + totalprice
        });
        newtotalPrice(totalprice);
}

const quantity=()=>{
  let totalqunatitys=0;
  cart.map((val,index)=>{
    totalqunatitys=val.qnty + totalqunatitys;
  });
  newtotalquantity(totalqunatitys);
}


useEffect(()=>{
  total();
},[total])

useEffect(()=>{
quantity();
},[quantity])

  return (
    <CartStyle>
      <div>
        <div className="upper">
          <h1>Cart Calculation({cart.length})</h1>
          <button onClick={()=>Clear()} >
            <FontAwesomeIcon icon={faTrash} className="del" /> Empty Cart
          </button>
        </div>

        <div className="lower">
          {cart.length == 0 ? (
            <div className="empty-cart">
              <FontAwesomeIcon icon={faCartShopping} className="icon" />
              <p>Empty Cart</p>
            </div>
          ) : (
            <table rules="rows">
              <thead>
                <tr>
                  <th className="text-font">Action</th>
                  <th className="text-font">Product</th>
                  <th className="text-font">Name</th>
                  <th className="text-font">Price</th>
                  <th className="text-font" colSpan="2">
                    Qty
                  </th>
                  <th className="text-right text-font">Total Amount</th>
                </tr>
              </thead>
              {cart &&
                cart.map((val, index) => {
                  return (
                    <tbody key={index}>
                      <tr>
                        <td>
                          <button type="button" onClick={()=>removeItem(val.id)} className="delbtn">
                            <FontAwesomeIcon
                              icon={faTrashCan}
                              className="icon"
                            />
                          </button>
                        </td>
                        <td>
                          <figure>
                            <img src={val.imgdata} alt="" />
                          </figure>
                        </td>
                        <td className="text-font">
                          <p>{val.dish}</p>
                        </td>
                        <td className="text-font">
                          <p>{val.price}</p>
                        </td>

                        <td colSpan="2">
                          <button
                            className="delbtn qty"
                          onClick={()=>handleDecre(val)}
                          >
                          
                            <FontAwesomeIcon icon={faMinus} />{" "}
                          </button>

                          <input type="text" name="total" disabled value={val.qnty} />

                          <button
                            className="delbtn qty"
                            onClick={()=>handleIncre(val)}
                          >
                            <FontAwesomeIcon icon={faPlus} />
                          </button>
                        </td>

                        <td
                          colSpan="2"
                          className="text-font"
                          style={{ textAlign: "end", paddingRight: "10px" }}
                        >
                          {val.qnty * val.price}
                        </td>
                      </tr>
                    </tbody>
                  );
                })}
              <tfoot>
                <tr>
                  <th colSpan={4}></th>
                  <th
                    colSpan={2}
                    style={{ textAlign: "center", fontSize: "1.5rem" }}
                  >
                    Items In Cart <span className="ml-2 mr-2">:</span>
                    <span style={{ color: "red" }}> {totalquantity} </span>
                  </th>
                  <th
                    className="text-right"
                    style={{ textAlign: "end", fontSize: "1.5rem" }}
                  >
                    Total Price<span className="ml-2 mr-2">:</span>
                    <span style={{ color: "red", paddingRight: "10px" }}>
                       ₹{totalPrice}
                    </span>
                  </th>
                </tr>
              </tfoot>
            </table>
          )}
        </div>
      </div>
    </CartStyle>
  );
};

const CartStyle = styled.section`
  display: grid;
  justify-content: center;
  margin-top: 10rem;

  .upper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem;
    width: 80vw;
    height: 5rem;
    background-color: #413a3a;
    color: #fff;
    border-radius: 0.8rem 0.8rem 0 0;
    h1 {
      letter-spacing: 1.5px;
      font-weight: 600;
    }
    button {
      background-color: #de6363;
      color: #fff;
      border: none;
      height: 3rem;
      width: 10rem;
      border-radius: 0.3rem;
      display: flex;
      justify-content: center;
      align-items: center;
      column-gap: 1rem;
    }
  }

  .lower {
    border: 1px solid grey;
    width: 80vw;
    .empty-cart {
      height: 30vh;
      background-color: #b0acac;
      color: #fff;
      display: flex;
      flex-direction: column;
      row-gap: 1.5rem;
      align-items: center;
      justify-content: center;
      font-size: 2rem;
      .icon {
        font-size: 7rem;
      }
    }
    table {
      width: 100%;
      border-spacing: 0 15px;
      border-bottom: 1px solid #dee2e6;

      thead {
        border-bottom: 2px solid #dee2e6;
        tr {
          height: 4rem;
          text-align: center;

          th {
            /*  text-align: start; */
            font-size: 1.2rem;
          }
          .text-right {
            text-align: end;
          }
          .text-font {
            font-size: 1.5rem;
          }
        }
      }

      tbody {
        tr {
          height: 6rem;
          text-align: center;

          td {
            .delbtn {
              font-size: 2rem;
              width: 4rem;
              height: 4rem;
              border-radius: 0.5rem;
              border: none;
              background-color: #fde6e7;
              color: #ff5b5c;
              transition: all 0.3s ease;
              &:hover {
                background-color: #ff5b5c;
                color: #fff;
              }
            }

            .inputQty {
              display: flex;
            }

            figure {
              width: 5rem;
              height: 4rem;
              margin: 0 auto;
              img {
                border-radius: 0.5rem;
                width: 100%;
                height: 100%;
                object-fit: cover;
                transition: all 0.3s ease-in-out;

                &:hover {
                  transform: scale(6.2);
                  border: 0.5px solid black;
                }
              }
            }

            input {
              margin: 0 0.4rem;
              width: 5rem;
              height: 4rem;
              border-radius: 0.5rem;
              border: 1px solid grey;
              font-size: 1.6rem;
              text-align: center;
              outline: none;
            }

            .qty {
              background-color: #e1eafc;
              color: #5a8dee;
              font-size: 1.7rem;
              &:hover {
                background-color: #5a8dee;
                color: #fff;
              }
            }
          }
          .text-font {
            font-size: 1.5rem;
          }
        }
      }
      tfoot {
        tr {
          height: 5rem;
        }
      }
    }
  }

  @media screen and (max-width: 600px) {
    .upper {
      overflow: scroll;
    }
    .lower {
      overflow: scroll;
    }
  }
`;

export default Cart;
