import React from 'react'
import styled from 'styled-components'

function Footer() {
  return (
    <Container>
        <About>
            <About1>
                <span><a href = '#'>About Disney+ Hotstar</a></span>
                <span><a href = '#'>Terms Of Use </a></span>
                <span><a href = '#'>privacy Policy </a></span>
                <span><a href = '#'>FaQ </a></span>
                <span><a href = '#'>Feedback </a></span>
                <span><a href = '#'>Carrers </a></span>
            </About1>
            <h5>
                © 2022 STAR. All Rights Reserved. HBO, Home Box Office and all related channel 
                and programming logos are service marks of, and all related programming visuals 
                and elements are the property of, Home Box Office, Inc. All rights reserved.
            </h5>
            
        </About>
        <Connect>
            <p><a href = '#'>Connect With Us</a></p>
        </Connect>
        <DisneyApp>
            <p><a href = '#'>Disney+ hotstar App</a></p>
        </DisneyApp>

    </Container>
  )
}

const Container = styled.div`
    min-height:15vh;
    padding: 0 calc(3.5vw + 5px) 2vh;
    background-color: #121926;
   

    z-index: -1;
    overflow: hidden;
    color: #dadada;

    // color: rgba(225, 225, 225 , 0.8);
    // font-size: 14px;
    font-family: 'Roboto', sans-serif;
    // font-weight: 400;


    display: flex;
    justify-content: space-between;
    // align-items: center;
 

`

const About = styled.div`
    height: 100%;
    width: 60%;
    padding-top: 14px;
    h5{
        line-height: 20px;
        letter-spacing: 1px;
        font-weight: 100;
    }
    span{
        padding: 5px 8px;
        letter-spacing: 1px;
        a{
            color: #dadada;
            &:hover{
                color:#1f80e0;
            }
        }
    }
`
const About1 = styled.div`
    box-size = border-box;

`
const Connect = styled.div`
    height: 100%;
    // width: 60vw;
    a{
        color: #dadada;
        &:hover{
            color:#1f80e0;
        }
    }
   
`
const DisneyApp = styled.div`
    height: 100%;
    // width: 60vw;
    a{
        color: #dadada;
        &:hover{
            color:#1f80e0;
        }
    }
    
`

export default Footer