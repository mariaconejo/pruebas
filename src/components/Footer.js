import React from 'react';
import styled from 'styled-components';

function Footer (){
    return(
        <Backrogund>
            <Container>
                <Content>
                    <SecondaryLogo src="img/logo-triada.png"/>
                    <FooterOptions>
                        <ul>
                            <li><a href ="#">Inicio</a></li>
                            <li><a href ="#">Ofertas Laborales</a></li>
                            <li><a href ="#">Publicar Oferta Laboral</a></li>
                        </ul>
                    </FooterOptions>
                    <FooterLogo>
                        <a href =""><img src="img/facebook-logo.svg" alt=""></img></a>
                        <p>© CETAV Bolsa de empleos | 2021</p>
                    </FooterLogo>
                </Content>
            </Container>
        </Backrogund>
    )
}

export default Footer

const Backrogund = styled.div`
    width:100%;
    background: black;
    height: auto;
`

const Container = styled.div`
    width: 80%;
    margin: 0 auto;
    @media(min-width:1080px){
        padding:40px 0;
    }
`

const Content = styled.div`
    align-items:center;
    display: flex;
    flex-direction: column;
    text-align-center;
    @media(min-width:1080px){
        flex-direction: row;
        justify-content: space-between;
    }
`

const SecondaryLogo = styled.img`
    max-width: 100%;
    height: auto;
`

const FooterOptions = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 18px;
    width:100%;
    ul{
        list-style:none
    }
    li{
        border-bottom: 1px solid #ECECEC;
        padding: 16px 0px;
    }
    a:last-of-type{
        margin-bottom : 24px;
    }
    img{
        margin: 0 auto;
        width:45px;
        height:45px;
    }
    p{
        margin-top : 24px;
    }
    @media(min-width:1080px){
        width:32%;
        li{
            border-bottom:none;
            text-align:left;
            &:last-of-type{
                margin-bottom : unset;
            }
        }
    }
`
const FooterLogo = styled.div`
    @media(min-width:1080px){
        img{
            margin-bottom: 16px;
        }
    }
`