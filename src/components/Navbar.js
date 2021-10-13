import React, { useState } from "react";
import { Container, LogoContainer, Wrapper, Menu, MenuItem, MenuItemLink, MobileIcon } from "./Narbar.elements";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons";
import cetav from '../img/cetav.png';
import home from '../img/home.png';
import post from '../img/post.png';
import card from '../img/card.png';

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <Container>
      <Wrapper>
        <IconContext.Provider value={{ style: { fontSize: "2em" } }}>
          <LogoContainer>
            <a href="http://parquelalibertad.org/cetav/home"><img src={cetav} alt="Logo cetav"/></a>
            <p>Bolsa de empleo</p>  
          </LogoContainer>

          <MobileIcon onClick={() => setShowMobileMenu(!showMobileMenu)}>
            {showMobileMenu ? <FaTimes /> : <FaBars />}
          </MobileIcon>

          <Menu open={showMobileMenu}>
            <MenuItem>
              <MenuItemLink onClick={() => setShowMobileMenu(!showMobileMenu)}>
                <img src={home} alt="Home"/>
                <div>
                  Inicio
                </div>
              </MenuItemLink>
            </MenuItem>
            <MenuItem>
              <MenuItemLink onClick={() => setShowMobileMenu(!showMobileMenu)}>
                <img src={post} alt="Post"/>
                <div>
                  Publicar Oferta
                </div>
              </MenuItemLink>
            </MenuItem>
            <MenuItem>
              <MenuItemLink onClick={() => setShowMobileMenu(!showMobileMenu)}>
                <img src={card} alt="Card"/>
                <div>
                  Ofertas Laborales
                </div>
              </MenuItemLink>
            </MenuItem>
          </Menu>
        </IconContext.Provider>
      </Wrapper>
    </Container>
  );
};

export default Navbar;