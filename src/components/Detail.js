import React, { useEffect } from 'react'
import styled from 'styled-components'
import Movies from './Movies';
import { useParams, Link, Outlet, Navigate, useNavigate, useLocation } from 'react-router-dom'


function Detail() {
    const { id } = useParams();

    const navigate = useNavigate();
    const location = useLocation();
    const bgImg = location.state.bI;
    const vi = location.state.vI;
    console.log(bgImg);
    console.log(vi);

    return (
        <Container>
            <Wrap loc={bgImg}>


                <Blur>

                    <Wrap1>
                        <Play>
                            <PlayButton>
                                <img src="images/play.png" alt=""
                                    onClick={() => {
                                        navigate("/watch", { state: vi })
                                    }}

                                />

                            </PlayButton>
                            <h2>Watch</h2>
                        </Play>
                        <WatchList>
                            <img src="images/watchlist2.png" alt="" />
                        </WatchList>
                        <Share>
                            <img src="images/share.png" alt="" />
                        </Share>
                    </Wrap1>
                </Blur>

            </Wrap>

            <Movies
                name="Recommanded For you"
                img_1="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/4209/1104209-v-5c51ee3fb954"
                img_2="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/8723/1078723-v-a1a04c7474f9"
                img_3="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/7519/1097519-v-7235f9a4b235"
                img_4="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/5162/875162-v"
                img_5="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/5242/875242-v"
                img_6="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/1347/1091347-v-1ddd8b64ce22"
                img_7="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/8690/1078690-v-0cb0fd8d0f22"
                img_8="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/5184/875184-v"
                img_9="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/5195/875195-v"
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
    height: 66vh;
    background-size: 70%;



    border-radius: 6px;
    box-shadow: rgb(0 0 0/69%) 0px 26px 30px -10px, rgb(0 0 0/73%) 0px 16px 10px -10px;
    object-fit: cover;
    background-image: ${props => `url("images/${props.loc}")`};
   

    // overflow: hidden;
    box-sizing: border-box;
    // position: relative;
    // z-index: 1;
    background-repeat: no-repeat;
    background-position:right;
    box-sizing: border-box;
    
                
    

    
`
const Blur = styled.div`

    overflow: hidden;
    z-index: 5;
    width: 100%;
    height: 100%;
    background: linear-gradient(to right, transparent, #030b17 0%, #030b17 30%, transparent 70%),
                linear-gradient(45deg, #030b17, rgba(255,0,0,0) 40.71%),
                linear-gradient(135deg, #030b17, rgba(255,0,0,0) 40.71%);

   
`
const Wrap1 = styled.div`
    
    margin: 320px 20px 20px 50px;
    width: 40%;
    height: 10vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    overflow: hidden;
    


`
const Play = styled.div`
    width: 40%;
    height: 30px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin: 0 30px;
    

`
const PlayButton = styled.button`
    width: 69px;
    height: 60px;
    img{
        width: 100%;
        height: 100%;
        overflow: hidden;
    }
    background-color: transparent;
    border: 1px solid transparent;
    cursor: pointer;
    &:hover{
        transform: scale(1.1);
    }
  
`

const WatchList = styled.button`
    width: 47px;
    height: 40px;
    img{
        width: 100%;
        height: 100%;
        overflow: hidden;
    }
    background-color: transparent;
    border: 1px solid transparent;
    cursor: pointer;
    &:hover{
        transform: scale(1.2);
    }

`
const Share = styled.button`

    width: 47px;
    height: 40px;
    img{
        width: 100%;
        height: 100%;
        overflow: hidden;
    }
    background-color: transparent;
    border: 1px solid transparent;
    cursor: pointer;
    &:hover{
        transform: scale(1.2);
    }
`

export default Detail