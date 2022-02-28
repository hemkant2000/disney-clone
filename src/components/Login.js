import styled from 'styled-components';
import React from "react";
// import Header from './Header';

const Login = (props) => {
    return (
        <Container>
            
            
            <Content>
                <CTA>
                    <CTALogoOne src = "/images/cta-logo-one.svg" alt=''/>
                    <SignUp>GET ALL THERE</SignUp>
                    <Description>
                        Get Premier Access to Raya and the Last Dragon
                        with a Disney+ subscription. As of 03/23/2022,
                        and The Disney Bundle will increase by 400 rupees.
                    </Description>
                    <CTALogoTwo src = "images/cta-logo-two.png" alt = ''/>
                </CTA>
                <BgImage/>
            </Content>
            
        </Container>
    );
};

const Container = styled.section`
    overflow:hidden;
    display:flex;
    flex-direction: column;
    text-align: center;
    
    height: 100vh;
    color: white;
    overflow: hidden;
    // margin-top: 80px;

    

`;

const Content = styled.div`
    margin-bottom: 10vw;
    width: 100%;
    position: relative;
    min-height: 100vh;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 80px  40px;
    height: 100%;
    
    overflow: hidden;
    
`;

const BgImage = styled.div`
    height: 100%;
    background-position: top;
    background_size: cover;
    background-repeat: no-repeat;
    background-image: url("/images/login-background.jpg");

    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    overflow: hidden;
    z-index: -1;
    
    
    



`;

const CTA = styled.div`

  
    max-width:550px;
    width: 100%;
    display: flex;
   
    flex-direction: column;

    
    
`;
const CTALogoOne = styled.img`
    margin-bottom: 10px;
    min-width: 450px;
    min-height:1px;
    display: block;
    width: 100%;
`;

const SignUp = styled.a`
    font-weight: bold;
    color: #f9f9f9;
    background-color: #0063e5;
    // height: 60px;
    font-size: 18px;
    padding: 16.5px;
    letter-spacing: 1.5px;
    width: 100%;
    margin-bottom: 8px;
    border-radius: 8px;
    border: 1px solid transparent;
    &:hover{
        background-color: #0483ee;
    }
`;

const Description = styled.p`
    font-size: 13px;
    margin: 0 0 24px;
    line-height: 1.4;
    letter-spacing: 1.3px;

`;

const CTALogoTwo = styled.img`
    margin: 0 0 30px;
    min-height: 1px;
    max-width: 550px;
    display: inline-block;
    vertical-align: bottom;
    width: 100%;
    

`;
export default Login;