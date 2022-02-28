import React from 'react'
import styled from 'styled-components'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link, useNavigate } from "react-router-dom";

function Movies({ name, img_1, img_2, img_3, img_4, img_5, img_6, img_7, img_8, img_9, img_10, img_11, img_12, img_13, img_14, img_15, img_16 }) {
    let settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 8,
        slidesToScroll: 8,
        autoplay: false
    }
    const navigate = useNavigate();
    return (
        <Container>
            <p>{name}</p>

            <Content {...settings}>

                <Wrap><img src={img_1} alt=""
                    onClick={() => {
                        navigate("/details", { state: { bI: "Ice-age.jpg", vI: "0U0L4uT0btQ" } });
                    }}

                /></Wrap>
                <Wrap><img src={img_2} alt=""
                    onClick={() => {
                        navigate("/details", { state: { bI: "shangchi.jpg", vI: "8YjFbMbfXaQ" } });
                    }}
                /></Wrap>
                <Wrap><img src={img_3} alt=""
                    onClick={() => {
                        navigate("/details", { state: { bI: "eternals.jpeg", vI: "x_me3xsvDgk" } });
                    }}
                /></Wrap>
                <Wrap><img src={img_4} alt=""
                    onClick={() => {
                        navigate("/details", { state: { bI: "avengers.jpg", vI: "TcMBFSGVi1c" } });
                    }}
                /></Wrap>

                <Wrap><img src={img_5} alt=""
                    onClick={() => {
                        navigate("/details", { state: { bI: "lionking.jpg", vI: "7TavVZMewpY" } });
                    }}
                /></Wrap>

                <Wrap><img src={img_6} alt=""
                    onClick={() => {
                        navigate("/details", { state: { bI: "enchanto.jpeg", vI: "CaimKeDcudo" } });
                    }}
                /></Wrap>

                <Wrap><img src={img_7} alt=""
                    onClick={() => {
                        navigate("/details", { state: { bI: "jungleCruse.jpeg", vI: "hJZ82pwwJqA" } });
                    }}
                /></Wrap>

                <Wrap><img src={img_8} alt=""
                    onClick={() => {
                        navigate("/details", { state: { bI: "blackPanther.jpeg", vI: "xjDjIWPwcPU&t" }});
                    }}
                /></Wrap>

                <Wrap><img src={img_9} alt=""
                    onClick={() => {
                        navigate("/details", { state: { bI: "captionMarvel.jpg", vI: "Z1BCujX3pw8" }});
                    }}
                /></Wrap>

                <Wrap><img src={img_10} alt=""
                    onClick={() => {
                        navigate("/details", { state: { bI: "blackWidow.jpeg", vI: "ybji16u608U" } });
                    }}
                /></Wrap>

                <Wrap><img src={img_11} alt=""
                    onClick={() => {
                        navigate("/details", { state: { bI: "doctorStrange.jpg", vI: "aWzlQ2N6qqg" } });
                    }}
                /></Wrap>

                <Wrap><img src={img_12} alt=""
                    onClick={() => {
                        navigate("/details", { state: { bI: "howkeye.jpg", vI: "5VYb3B1ETlk" } });
                    }}
                /></Wrap>

                <Wrap><img src={img_13} alt=""
                    onClick={() => {
                        navigate("/details", { state: { bI: "avengers2012.jpg", vI: "eOrNdBpGMv8" } });
                    }}
                /></Wrap>

                <Wrap><img src={img_14} alt=""
                    onClick={() => {
                        navigate("/details", { state: { bI: "baghi3.jpeg", vI: "jQzDujMzfoU&t" } });
                    }}
                /></Wrap>

                <Wrap><img src={img_15} alt=""
                    onClick={() => {
                        navigate("/details", { state: { bI: "avengersInfinity.jpg", vI: "6ZfuNTqbHE8" } });
                    }}
                /></Wrap>

                <Wrap><img src={img_16} alt=""
                    onClick={() => {
                        navigate("/details", { state: { bI: "thor ragnrork.jpg", vI: "ue80QwXMRHg" } });
                    }}
                /></Wrap>



            </Content>

        </Container>


    )
}
const Container = styled.div`
    p{
        font-size:18px;
        font-weight: 900;
        letter-spacing: .4px;
    }


`

const Content = styled(Slider)`

    width: 100%;
    height: 30vh;
   

    // margin-top: 2px;
    .slick-list{
        overflow: visible;
    }

    button{
        z-index: 1;
        background-color:transparent;
        &:before{
            display: none;
            
        }
        
    }
    &:hover{
        button{
            z-index: 1;
            &:before{
                display: block;
            }
            
        }
    }

 

`
const Wrap = styled.div`
    border-radius: 5px;
    cursor: pointer;
   
    box-shadow: rgb(0 0 0/69%) 0px 26px 30px -10px, rgb(0 0 0/73%) 0px 16px 10px -10px;
    // background-color: #334366;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    overflow: hidden;

   
    &:hover{
        transform: scale(1.27);
        transition-delay:0.3s;

    }
  
    img{
        width: 93%;
        height: 100%;
        border-radius: 6px;
        box-shadow: rgb(0 0 0/69%) 0px 26px 30px -10px, rgb(0 0 0/73%) 0px 16px 10px -10px;
        object-fit: cover;
        
        
    }



`

export default Movies