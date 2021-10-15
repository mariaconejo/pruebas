import React, { useState } from "react";
import { Container, LogoContainer, Wrapper, Menu, MenuItem, MenuItemLink, MobileIcon } from "./Narbar.elements";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons";

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  

  return (
    <Container>
      <Wrapper>
        <IconContext.Provider value={{ style: { fontSize: "2em" } }}>
          <LogoContainer>
            <a href="http://parquelalibertad.org/cetav/home"><img src="img/triada-logo.png" alt="Logo cetav"/></a>
            <p>Bolsa de empleo</p>  
          </LogoContainer>

          <MobileIcon onClick={() => setShowMobileMenu(!showMobileMenu)}>
            {showMobileMenu ? <FaTimes /> : <FaBars />}
          </MobileIcon>

          <Menu open={showMobileMenu}>
            <MenuItem>
              <MenuItemLink onClick={() => setShowMobileMenu(!showMobileMenu)}>
                <img src="../img/home.png" alt="Home"/>
                <div>
                  Inicio
                </div>
              </MenuItemLink>
            </MenuItem>
            <MenuItem>
              <MenuItemLink onClick={() => setShowMobileMenu(!showMobileMenu)}>
                <img src="img/post.png" alt="Post"/>
                <div>
                  Publicar Oferta
                </div>
              </MenuItemLink>
            </MenuItem>
            <MenuItem>
              <MenuItemLink onClick={() => setShowMobileMenu(!showMobileMenu)}>
                <img src="img/card.png" alt="Card"/>
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