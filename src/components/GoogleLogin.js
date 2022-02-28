import styled from "styled-components";
import Button from "./Button";
import Icon from "./Icon";
import Input from "./Input";
import { FaFacebookF,  FaTwitter } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

import React, { useState , useRef, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { Form, Alert } from "react-bootstrap";
//j

import { useUserAuth } from "../context/UserAuthContext";



function GoogleLogin(props) {


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { logIn, googleSignIn , facebookSignIn} = useUserAuth();
  const navigate = useNavigate();

  const box = useRef(null);
  useOutsideAlerter(box);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await logIn(email, password);
      navigate("/", { replace: true });
    } catch (err) {
      setError(err.message);
    }
  };

  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    try {
      await googleSignIn();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };

  const handlefacebookSignIn = async (e) => {
    e.preventDefault();
    try {
      await facebookSignIn();
      navigate("/", { replace: true });
    } catch (error) {
      console.log(error.message);
    }
  };



  const FacebookBackground =
    "linear-gradient(to right, #0546A0 0%, #0546A0 40%, #663FB6 100%)";
  const InstagramBackground =
    " linear-gradient(315deg, #ffffff 0%, #d7e1ec 74%)";
  const TwitterBackground =
    "linear-gradient(to right, #56C1E1 0%, #35A9CE 50%)";
  return (
    <MainContainer
    ref={box}
    >
      {props.children}
      <WelcomeText>Login</WelcomeText>
      {error && <Alert variant="danger">{error}</Alert>}
      <InputContainer onSubmit={handleSubmit}>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              type="email"
              placeholder="Email address"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <div className="d-grid gap-2">
            <Button variant="primary" type="Submit" content={"  Log In"}>

            </Button>
          </div>
        </Form>
      </InputContainer>


      <LoginWith>OR LOGIN WITH</LoginWith>
      {/* <HorizontalRule /> */}
      <IconsContainer>
        <Icon color={FacebookBackground}>
          <FaFacebookF onClick={ handlefacebookSignIn} />
        </Icon>
        <Icon color={InstagramBackground}>
          <FcGoogle onClick={handleGoogleSignIn} />
        </Icon>
        <Icon color={TwitterBackground}>
          <FaTwitter />
        </Icon>
      </IconsContainer>
      <ForgotPassword>Forgot Password ?</ForgotPassword>
      <Direction>
        Don't have an account? <p onClick={() => navigate("/singup")}> Sign Up</p>
      </Direction>
    </MainContainer>
  );
}

const MainContainer = styled.div`
  box-sizing: border-box;
  overflow: hidden;
  z-index: 1000;
  position: fixed;
  left: 33vw;
  top: 70px;
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 83vh;
  width: 40vw;
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(8.5px);
  -webkit-backdrop-filter: blur(8.5px);
  border-radius: 10px;
  color: #ffffff;
  text-transform: uppercase;
  letter-spacing: 0.4rem;
  @media only screen and (max-width: 320px) {
    width: 80vw;
    height: 90vh;
    hr {
      margin-bottom: 0.3rem;
    }
    h4 {
      font-size: small;
    }
  }
  @media only screen and (min-width: 360px) {
    width: 80vw;
    height: 90vh;
    h4 {
      font-size: small;
    }
  }
  @media only screen and (min-width: 411px) {
    width: 80vw;
    height: 90vh;
  }
  @media only screen and (min-width: 768px) {
    width: 80vw;
    height: 80vh;
  }
  @media only screen and (min-width: 1024px) {
    width: 70vw;
    height: 50vh;
  }
  @media only screen and (min-width: 1280px) {
    width: 40vw;
    height: 83vh;
  }
`;

const WelcomeText = styled.h2`
  margin: 1rem 0 2rem 0;
`;


const InputContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 35%;
  width: 100%;
  Input{
    margin: 7px 0;
  }

  .form-control{
    background: rgba(255, 255, 255, 0.15);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    border-radius: 2rem;
    width: 30vw;
    height: 15px;
    padding: 1rem;
    border: none;
    outline: none;
    color: #3c354e;
    font-size: 1rem;
    font-weight: bold;
    &:focus {
      display: inline-block;
      box-shadow: 0 0 0 0.2rem #b9abe0;
      backdrop-filter: blur(12rem);
      border-radius: 2rem;
    }
    &::placeholder {
      color: #b9abe099;
      font-weight: 100;
      font-size: 1rem;
    }
  }
  Button{
    margin: 30px 0 1rem 0;
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: center;

    background: linear-gradient(to right, #14163c 0%, #03217b 79%);
    text-transform: uppercase;
    letter-spacing: 0.2rem;
    width: 100%;
    height: 3rem;
    border: none;
    color: white;
    border-radius: 2rem;
    cursor: pointer;
  }

 
`;

const InputForm = styled.div`

    margin: 7px 0;

`

const ButtonContainer = styled.div`
  margin: 30px 0 1rem 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LoginWith = styled.h5`
  cursor: pointer;
`;

const HorizontalRule = styled.hr`
  width: 90%;
  height: 0.3rem;
  border-radius: 0.8rem;
  border: none;
  background: linear-gradient(to right, #14163c 0%, #03217b 79%);
  background-color: #ebd0d0;
  margin: 1.5rem 0 1rem 0;
  backdrop-filter: blur(25px);
`;

const IconsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 20px 0 55px 0;
  width: 80%;
  height: 15px;
  Icon{
    margin: 8px 0;
  }
  
`;
// const GoogleIcon = styled.div`
//     width: 
// `

const ForgotPassword = styled.h4`
  cursor: pointer;
`;

// background-color: #ffffff;
// background-image: linear-gradient(315deg, #ffffff 0%, #d7e1ec 74%);

const Direction = styled.div`
  // background: rgba(255, 255, 255, 0.15);
  // // box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  // // backdrop-filter: blur(8.5px);
  // -webkit-backdrop-filter: blur(8.5px);
  width: 90%;
  font-size: 16spx;
  font-weight: 600;
  letter-spacing: 2px;
  display:flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 15px;
  p{
    cursor: pointer;
    &:hover{
      color: blue;
    }
  }
`

export default GoogleLogin;


function useOutsideAlerter(ref) {
  const navigate = useNavigate();
  useEffect(() => {
 
    // Function for click event
    function handleOutsideClick(event) {
      if (ref.current && !ref.current.contains(event.target)) {
       
        navigate("/");
      }
    }
 
    // Adding click event listener
    document.addEventListener("click", handleOutsideClick);
    return () => document.removeEventListener("click", handleOutsideClick);
  }, [ref]);
}