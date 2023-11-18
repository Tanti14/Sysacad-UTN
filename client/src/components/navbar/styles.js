import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  background: grey;
  width: 100%;
  height: 100px;
  color: white;
  position: fixed;
  top: 0;
  z-index: 10;
  padding: 0 40px;
`;

export const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  width: 100%;
`;

export const LogoContainer = styled.div`
  width: 20%;
  img {
    width: 200px;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: calc(80% - 20%);
`;
