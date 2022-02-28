import React, { useContext } from 'react'
import styled from 'styled-components'

import { useState, useRef } from "react";
import { Link, useNavigate } from 'react-router-dom'
import { useUserAuth } from "../context/UserAuthContext";


//kk





function Header() {
    

    const [input, setInput] = useState("");
    const [barOpened, setBarOpened] = useState(false);
    const formRef = useRef();
    const inputFocus = useRef();
    const [tv, setTv] = useState(false);
    const [movie, setMovie] = useState(false);
    const [sports, setSports] = useState(false);
    const [menuItem, setMenuItem] = useState(false);
    const navigate = useNavigate();
    // const useAuth = useUserAuth();

    // const { user } = useUserAuth();
    
    // if (user) {
    //     console.log("Check user in Private: ", user);
    // }

    const onFormSubmit = e => {
        // When form submited, clear input, close the searchbar and do something with input
        e.preventDefault();
        setInput("");
        setBarOpened(false);
        // After form submit, do what you want with the input value
        console.log(`Form was submited with input: ${input}`);
    };
    return (
        <Nav>
            <LeftMenu>
                <Menu1>
                    <MenuDiv
                        onMouseEnter={() => {
                            setMenuItem(true);
                        }}

                        onMouseLeave={() => {
                            setMenuItem(false);
                        }}
                    >
                        <MenuIcon src='images/menu1.png' alt=''></MenuIcon>
                    </MenuDiv>
                    <a><Logo src="images/disney-hotstar-logo-dark.svg" alt=''
                        onClick={() => {
                            navigate("/");
                        }}

                    /></a>

                </Menu1>

                <Menu2>
                    {/* <p > <a href='#'>TV</a></p> */}
                    <Tv

                        onMouseEnter={() => {
                            setTv(true);
                        }}

                        onMouseLeave={() => {
                            setTv(false);
                        }}
                    >

                        <a href='#'>TV</a>
                    </Tv>

                    <Movie
                        onMouseEnter={() => {
                            setMovie(true);
                        }}

                        onMouseLeave={() => {
                            setMovie(false);
                        }}
                    ><a href='#'>Movie</a></Movie>
                    <Sports
                        onMouseEnter={() => {
                            setSports(true);
                        }}

                        onMouseLeave={() => {
                            setSports(false);
                        }}
                    > <a href='#'>Sports</a>
                    </Sports>

                    <p ><a href='#'>Disney+</a></p>
                    <a href='#'><Kids src='images/kids.png' alt='' /></a>

                    <MenuItemList menuItem={menuItem}
                        onMouseEnter={() => {
                            setMenuItem(true);
                        }}

                        onMouseLeave={() => {
                            setMenuItem(false);
                        }}
                    >
                        <a href='#'><li>
                            <ChannelImg src='images/channel.png' />
                            <p>Channels</p>

                        </li></a>
                        <a href='#'><li>
                            <LanguageImg src='images/language.png' />
                            <p>Languages</p>

                        </li></a>
                        <a href='#'><li>
                            <GenresImg src='images/genres.png' />
                            <p>Genres</p>

                        </li></a>


                    </MenuItemList>

                    <TvList tv={tv}
                        onMouseEnter={() => {
                            setTv(true);
                        }}

                        onMouseLeave={() => {
                            setTv(false);
                        }}
                    >

                        <a href='#'><li>Other Shows</li></a>
                        <a href='#'><li>Hotstar Special</li></a>
                        <a href='#'><li>Quix</li></a>
                        <a href='#'><li>Star Jalsha</li></a>
                        <a href='#'><li>Star Plus</li></a>
                        <a href='#'><li>Star Vijay</li></a>
                        <a href='#'><li>Star Bharat</li></a>
                        <a href='#'><li>Asianet</li></a>
                        <a href='#'><li>more...</li></a>


                    </TvList>
                    <MovieList movie={movie}
                        onMouseEnter={() => {
                            setMovie(true);
                        }}

                        onMouseLeave={() => {
                            setMovie(false);
                        }}
                    >

                        <a href='#'><li>Hindi</li></a>
                        <a href='#'><li>Bengali</li></a>
                        <a href='#'><li>Sports</li></a>
                        <a href='#'><li>Malayalam</li></a>
                        <a href='#'><li>Tamil</li></a>
                        <a href='#'><li>Marathi</li></a>
                        <a href='#'><li>English</li></a>
                        <a href='#'><li>Kannada</li></a>

                    </MovieList>
                    <SportsList sports={sports}
                        onMouseEnter={() => {
                            setSports(true);
                        }}

                        onMouseLeave={() => {
                            setSports(false);
                        }}
                    >

                        <a href='#'><li>Cricket</li></a>
                        <a href='#'><li>Kabaddi</li></a>
                        <a href='#'><li>Football</li></a>
                        <a href='#'><li>Hockey</li></a>
                        <a href='#'><li>Formula 1</li></a>
                        <a href='#'><li>Tennis</li></a>
                        <a href='#'><li>American Football</li></a>
                        <a href='#'><li>eSports</li></a>
                        <a href='#'><li>Formula E</li></a>
                        <a href='#'><li>Martial Arts</li></a>
                        <a href='#'><li>Athletics</li></a>
                        <a href='#'><li>Golf</li></a>
                        <a href='#'><li>Wrestling</li></a>
                        <a href='#'><li>Table Tennis</li></a>
                        <a href='#'><li>Khelo india</li></a>


                    </SportsList>



                </Menu2>

            </LeftMenu>
            <NavMenu>
                <SearchBar>

                    <Form
                        barOpened={barOpened}
                        onClick={() => {
                            // When form clicked, set state of baropened to true and focus the input
                            setBarOpened(true);
                            inputFocus.current.focus();
                        }}
                        // on focus open search bar
                        onFocus={() => {
                            setBarOpened(true);
                            inputFocus.current.focus();
                        }}
                        // on blur close search bar
                        onBlur={() => {
                            setBarOpened(false);
                        }}
                        // On submit, call the onFormSubmit function
                        onSubmit={onFormSubmit}
                        ref={formRef}
                    >

                        <Input
                            onChange={e => setInput(e.target.value)}
                            ref={inputFocus}
                            value={input}
                            barOpened={barOpened}
                            placeholder="Search here..."
                        />

                        <Button type="submit" barOpened={barOpened}>
                            <SearchIcon src='images/search-icon.svg' alt='' />

                        </Button>
                    </Form>

                </SearchBar>
            </NavMenu>
            <RightMenu>
                <ButtonDiv>
                    SUBSCRIBE
                </ButtonDiv>

                {/* !useAuth() &&  */}

                <p

                    onClick={() => {
                        // When form clicked, set state of baropened to true and focus the input
                        navigate("login");
                    }}

                >Login</p>
            </RightMenu>
        </Nav>
    )
}

const Nav = styled.nav`
    width: 100%;
    height: 80px;
    background-color: #121926;
    display: flex;
    justify-content: space-between;
    color: rgba(225, 225, 225 , 0.8);
    font-size: 14px;
    font-family: 'Roboto', sans-serif;
    font-weight: 600;
    overflow-x: hidden;
    z-index: 500;
    overflow-x: hidden;
    position: fixed;
    top: 0;
    left: 0;
    right:0;
    
    
   
   
    
`



const LeftMenu = styled.div`
    display: flex;
    justify-content: space-between;
    width: 600px;
    padding: 0 10px;
    @media  screen and (max-width: 768px) {
        
        width: 170px;

    }
    @media  screen and (max-width: 480px) {
        width: 150px;
    }
    
`
const MenuIcon = styled.img`
    height: 27px;
    width: 27px;
    cursor: pointer;
    @media  screen and (max-width: 768px) {
        
        height: 22px;
        width: 22px;
      }
`
const MenuDiv = styled.div`
      height: 70px;
      display: flex;
      align-items: center;
`
const MenuItemList = styled.div`
    position: fixed;

    left: 3vw;
    top: 70px;
    height: 20vh;
    width: 140px;
    font-size: 14px;
    font-weight: 700;
    background-color: #192133;
    border-radius: 5px;
    z-index: 20;
    list-style: none;
    padding: 5px 10px;
    text-align: start;
    
    li{
        display: flex;
        justify-content: space-between;
        margin: 2px 10px ;
        align-items: center;

        border-radius: 10px;
        p{
            width: 60px;
            height: 8px;
            margin-right: 20px
        }
        &:hover {
            background-color:  hsla(10, 5%, 5%, .08);
            
        }
    }



    overflow: auto;
    display: ${props => props.menuItem ? 'block' : 'none'};

`
const LanguageImg = styled.img`
      width: 20px;
      height: 20px;
      margin-top:5px;s
      margin-left: 20px;
`
const GenresImg = styled(LanguageImg)`
      
`
const ChannelImg = styled(LanguageImg)`
    
`
const Logo = styled.img`
    width: 120px;
    margin-bottom: 10px;
    cursor: pointer;
    @media  screen and (max-width: 768px) {
        
        width: 100px;
        // margin-bottom: 10px;
      }
`

const Menu1 = styled.div`

    margin-left: 30px;
    display: flex;
    justify-content: space-between;
    width: 170px;
    align-items: center;
    padding-top: 4px;
    a{
        color: rgba(225, 225, 225, 0.8);
    }
    
    @media  screen and (max-width: 768px) {
        
        width: 150px;
        padding-left: 0px;
        margin-left: 3px;
        
        
    }
    @media  screen and (max-width: 480px) {
        
        width: 130px;
        padding-left: 0px;
        margin-left: 3px;
        
        
    }

    font-size: 17px;
`
const Menu2 = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 330px;
    a{
        color: rgba(225, 225, 225, 0.8);
        // &:hover{
        //     color: white;
        // }
    }

    font-size: 17px;

    @media  screen and (max-width: 1080px) {
        
        display: none;
      }
   
`
const Tv = styled.div`
    height: 70px;
    display: flex;
    align-items: center;
    a{
        &:hover{
            color: white;
            
            
        }
    }
   
`
const Movie = styled.div`
    height: 70px;
    display: flex;
    align-items: center;
    a{
        &:hover{
            color: white;
            
            
        }
    }
   
`
const Sports = styled.div`
    height: 70px;
    display: flex;
    align-items: center;
    a{
        &:hover{
            color: white;
            
            
        }
    }
   
`

const TvList = styled.div`
   
    
    position: fixed;


    right: 68.5vw;
    height: 57vh;
    position: fixed;

    top: 70px;

    font-size: 14px;
    font-weight: 700;
    background-color: #192133;
    border-radius: 5px;
    width: 125px;

    z-index: 20;
    list-style: none;
    padding: 5px 10px;
    text-align: start;
    display:flex;
    flex-direction: column;
    li{
        padding: 12px 10px ;
    
        border-radius: 10px;
        a{
            font-weight: 600;
        }
        &:hover {
            background-color:  hsla(10, 5%, 5%, .08);
            
        }
    }

   

    overflow: auto;
    display: ${props => props.tv ? 'block' : 'none'};

    
    
`


const MovieList = styled.div`
    height: 51.2vh;
    position: fixed;

    
    right: 65.5vw;

    position: fixed;
    
    top: 70px;
   
    font-size: 14px;
    font-weight: 700;
    background-color: #192133;
    border-radius: 5px;
    width: 100px;
   
    z-index: 22;
    list-style: none;
    padding: 5px 10px;
    text-align: start;
    display:flex;
    flex-direction: column;
    li{
        padding: 12px 10px ;
       
        border-radius: 10px;
        a{
            font-weight: 600;
        }
        &:hover {
            background-color:  hsla(10, 5%, 5%, .08);
            
          }
    }


    overflow: auto;
    display: ${props => props.movie ? 'block' : 'none'};
    
`
const SportsList = styled.div`
  
    height: 90vh;
    position: fixed;


    right: 60.5vw;

    position: fixed;

    top: 70px;

    font-size: 14px;
    font-weight: 700;
    background-color: #192133;
    border-radius: 5px;
    width: 137px;

    z-index: 22;
    list-style: none;
    padding: 5px 10px;
    text-align: start;
    display:flex;
    flex-direction: column;
    li{
        padding: 11px 10px ;
    
        border-radius: 10px;
        a{
            font-weight: 600;
        }
        &:hover {
            background-color:  hsla(10, 5%, 5%, .08);
            
        }
    }


    overflow: auto;
    display: ${props => props.sports ? 'block' : 'none'};;
        

`
const Kids = styled.img`
      margin-top: 7px;
      width: 50px;
      cursor: pointer;
`
const NavMenu = styled.div`
   

`
const RightMenu = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 200px;
    padding: 0 20px;
    cursor: pointer;
    p{
        // style={{ color: 'rgba(225, 225, 225 , 0.8)' }}
        &:hover{
            color: blue;
        }
        .Link{
            text-decoration: none;
            
            color: rgba(225, 225, 225 , 0.8);
            
        }
        padding-right: 30px;
        @media  screen and (max-width: 480px) {
            display: none;
         
        }
        @media  screen and (max-width: 768px) {
            padding-right: 8px;
          
        }
    }
    @media  screen and (max-width: 480px) {
        padding: 0 10px;
        width: 100px;
    }
    
   

`
const SearchBar = styled.div`
    box-sizing: border-box;
    // width: 10px;
    height: 70px;
    display:flex;
    align-items: center;
   

`
const SearchIcon = styled.img`
    
    width: 25px;
    height: 25px;
    padding-left: 17px;
`

const ButtonDiv = styled.button`
    
      background-color: #1F80E0;
      border-radius: 5px;
      border: none;
      color: white;
      padding: 5px 12px;
      text-align: center;
      text-decoration: none;
      display: inline-block;
      font-size: 12.5px;
      margin: 4px 0;
      font-weight: 900;
      cursor: pointer;
      @media  screen and (max-width: 768px) {
        
            padding: 3px 8px;

        }
    @media  screen and (max-width: 480px) {
        
        font-weight: 500;
        font-size: 11px;
    }


`




const Form = styled.form`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  background-color: #37474f;
  /* Change width of the form depending if the bar is opened or not */
  @media  screen and (min-width: 768px) {

        width: ${props => (props.barOpened ? "20rem" : "15rem")};
        /* If bar opened, normal cursor on the whole form. If closed, show pointer on the whole form so user knows he can click to open it */
        cursor: ${props => (props.barOpened ? "auto" : "pointer")};
   
  }
  @media  screen and (min-width: 1080px) {

    width: ${props => (props.barOpened ? "24rem" : "15rem")};
    /* If bar opened, normal cursor on the whole form. If closed, show pointer on the whole form so user knows he can click to open it */
    cursor: ${props => (props.barOpened ? "auto" : "pointer")};

    }
 
  padding: 0.8rem 0;
  height: 2rem;
  border-radius: 1rem;
  
  transition: width 300ms cubic-bezier(0.645, 0.045, 0.355, 1);
  height:  ${props => (props.barOpened ? "10px" : "10px")};
  @media  screen and (max-width: 768px) {
        
    height:  ${props => (props.barOpened ? "5px" : "5px")};
    border-radius: 0.7rem;
    }

    @media  screen and (max-width: 480px) {
        height:  ${props => (props.barOpened ? "1px" : "1px")};
        width: ${props => (props.barOpened ? "6rem" : "2rem")};
        border-radius: 0.7rem;
    }
    margin-top: 10px;
`;

const Input = styled.input`
  font-size: 14px;
  line-height: 1;
  background-color: transparent;
  width: 100%;
  margin-left: ${props => (props.barOpened ? "0rem" : "0rem")};
  margin-right: ${props => (props.barOpened ? "2rem" : "0rem")};
  border: none;
  color: white;
  transition: margin 300ms cubic-bezier(0.645, 0.045, 0.355, 1);

  &:focus,
  &:active {
    outline: none;
  }
  &::placeholder {
    color: white;
  }
  padding-left: 18px;
`;

const Button = styled.button`
    @media  screen and (max-width: 480px) {
        line-height: 1;
        pointer-events: ${props => (props.barOpened ? "auto" : "none")};
        cursor: ${props => (props.barOpened ? "pointer" : "none")};
        background-color: transparent;
        border: none;
        outline: none;
        color: white;
        height: 40px;
        display: flex;
        // justify-content: center;
        align-items: center;
        
    }
    // @media  screen and (min-width: 480px) {
    //     display: none;
    // }

    line-height: 1;
    pointer-events: ${props => (props.barOpened ? "auto" : "none")};
    cursor: ${props => (props.barOpened ? "pointer" : "none")};
    background-color: transparent;
    border: none;
    outline: none;
    color: white;
    height: 40px;
    display: flex;
    // justify-content: center;
    align-items: center;
 
`;

export default Header