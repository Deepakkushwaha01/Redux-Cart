import React, { useState } from "react";
import Cardsdata from "./CardsData";
import { styled } from "styled-components";
import { useDispatch } from "react-redux";
import { addToCart } from "./redux/Feature/Slice";


const Home = () => {
  const [data, newdata] = useState(Cardsdata);

 const dispatch=useDispatch(); 
 

const send=(e)=>{
dispatch(addToCart(e));
}


  return (
    <HomeStyle>

{
    data.map((val,index)=>{
        return <div className="card" key={index}>
        <figure>
          <img src={val.imgdata} alt="" />
        </figure>
        <div className="dish-rating">
          <p>{val.dish}</p>
          <span>{val.rating}</span>
        </div>
        <div className="address-price">
          <p>{val.address}</p>
          <p className="sec" >{val.price}</p>
        </div>
        <hr />
        <div className="img-button">
        <img src={val.arrimg} className="img" alt="" />
        <button type="button" style={{cursor: "pointer"}} onClick={()=>send(val)} >Add To Cart</button>
        <img src={val.delimg} alt="" />
        </div>
   
      </div>
    })
}


      
    </HomeStyle>
  );
};

const HomeStyle = styled.section`
padding: 5rem;
  display: grid;
  grid-template-columns: repeat(auto-fit,minmax(250px,1fr));
/*   justify-content: center;
  align-items: center; */
  gap: 5rem;
  .card {
    width: 30rem;
    height: 35rem;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    padding: 1rem;
transition: all 0.3s ease-in-out;
    &:hover{
        box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
    }

    figure {
        width: 100%;
        height: 65%;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    .dish-rating {
      display: flex;
      justify-content: space-between;
      margin-top: 0.5rem;
      p {
        font-size: 1.5rem;
      }
      span {
        background-color: #286c3c;
        padding: 0.5rem 1rem;
        border-radius: 0.5rem;
        color: #fff;
      }
    }

    .address-price {
      display: flex;
      justify-content: space-between;
      margin-top: 1.5rem;
      p {
        font-size: 1.2rem;
      }
.sec{
    font-size:1.5rem;
}
    }

.img-button{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 0;
    img{
        width: 20%;
        height: 20%;
    }
    .img{
width: 10%;
    }

    button{
        background-color: #cf2454;
        border: none;
        color: #fff;
        width: 40%;
        letter-spacing: 1px;
        border-radius: 1rem;
        height: 3.5rem;
    }
}

  }
`;

export default Home;
