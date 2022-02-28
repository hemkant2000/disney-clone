import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from 'styled-components';

function ImageSlider() {
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
    }
  return (
    <Carousel {...settings}>
        <Wrap>
            <img src = "images/slider-badging.jpg" alt= ""/>
        </Wrap>
        <Wrap>
            <img src = "images/slider-badag.jpg" alt= ""/>
        </Wrap>
        <Wrap>
            <img src = "images/slider-scale.jpg" alt= ""/>
            
        </Wrap>
        <Wrap>
            <img src = "images/slider-scales.jpg" alt= ""/>
            
        </Wrap>
        <Wrap>
            <img src = "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/5318/1095318-h-a89162a0c1a9" alt= ""/>

        </Wrap>
        <Wrap>
            <img src = "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/1341/1091341-h-0c4699c4630e" alt= ""/>

        </Wrap>
        <Wrap>
            <img src = "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/8720/1078720-h-125f68c67f48" alt = ""/>
        </Wrap>

    </Carousel>
  )
}


export default ImageSlider

const Carousel = styled(Slider)`
    margin-top: 2px;
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
    cursor: pointer;
    img{
        width: 98%;
        height: 66vh;
        border-radius: 6px;
        box-shadow: rgb(0 0 0/69%) 0px 26px 30px -10px, rgb(0 0 0/73%) 0px 16px 10px -10px;

        
        
    }
    
`