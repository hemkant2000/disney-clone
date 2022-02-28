import React, { useEffect } from 'react'
import styled from 'styled-components'
import Movies from './Movies';
import { useParams, useLocation } from 'react-router-dom'

function Watch() {
    const { id } = useParams();
   
    
    const location = useLocation();
    const bgVideo = location.state;
    console.log(bgVideo);

    return (
        <Container>
            <Wrap>
                <iframe  width= "100%" height="100%"
                    // src="https://www.youtube.com/embed/M7lc1UVf-VE?autoplay=1&origin=http://example.com"
                    src =  {`https://www.youtube.com/embed/${bgVideo}?autoplay=1`} 
                    // allowfullscreen sandbox
                    >

                </iframe>
            </Wrap>
            <Movies
                name="More Like This"
                img_1="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/4209/1104209-v-5c51ee3fb954"
                img_2="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/8723/1078723-v-a1a04c7474f9"
                img_3="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/7519/1097519-v-7235f9a4b235"
                img_4="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/5162/875162-v"
                img_5="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/5242/875242-v"
                img_6="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/1347/1091347-v-1ddd8b64ce22"
                img_7="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/8690/1078690-v-0cb0fd8d0f22"
                img_8="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/5765/1115765-v-f1f2278a685f"
                img_9="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/6104/686104-v"
                img_10="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/2944/1052944-v-0ed37e31f3a3"
                img_11="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/4971/674971-v"
                img_12="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/3022/1083022-v-90c34f714f7a"
                img_13="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/5219/875219-v"
                img_14="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/6536/846536-v"
                img_15="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/5171/875171-v"
                img_16="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/4719/674719-v"

            />
        </Container>
    )
}

const Container = styled.div`
    
    min-height:calc(100vh - 70px);
    padding: 0 calc(3.5vw + 5px) 8vh;
    background-color: #121926;
    z-index: -1;
    overflow: hidden;
    color: white;
    margin-top: 80px;

    

`

const Wrap = styled.div`
    cursor: pointer;
    width: 100%;
    height: 86vh;

    border-radius: 6px;
    box-shadow: rgb(0 0 0/69%) 0px 26px 30px -10px, rgb(0 0 0/73%) 0px 16px 10px -10px;
    object-fit: cover;
    background-image: ${`url("images/baghi3.jpeg")`};
    overflow: hidden;
    box-sizing: border-box;
    position: relative;
    z-index: 1;
    
                
    

    
`

export default Watch