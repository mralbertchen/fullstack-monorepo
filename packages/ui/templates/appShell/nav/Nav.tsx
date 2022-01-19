/* eslint-disable @typescript-eslint/ban-ts-comment */
import React from 'react';
import styled from '@emotion/styled';
import { atom, useAtom } from 'jotai';

interface ClickableItemProps {
  clicked?: boolean;
  color?: string;
}

const Line = styled.div`
  transition: opacity 0.3s ease-in-out;
  opacity: ${(props: ClickableItemProps) => (props.clicked ? 0.5 : 0.2)};
  z-index: 99;
`;

const TopLeftCorner = styled(Line)`
  position: fixed;
  top: 12px;
  left: 9.9px;
  border-top: 1px solid #00ffc8;
  border-left: 1px solid #00ffc8;
  border-top: 1px solid #00ffc8;
  border-bottom-right-radius: 10px;
  border-top-left-radius: 10px;
  width: 89px;
  height: 50px;
  display: grid;
  place-items: center;
`;

const LeftHeaderWrapper = styled.div<
  ClickableItemProps & { noLeftHeaderBorder: boolean }
>`
  position: fixed;
  top: 12px;
  left: 9.9px;
  display: ${(props) => (props.clicked ? `none` : `grid`)};
  place-items: center;
  z-index: 99;

  border-bottom: ${(props) =>
    props.clicked || props.noLeftHeaderBorder
      ? `none`
      : `1px solid rgba(0, 255, 200, 0.2)`};
  border-right: ${(props) =>
    props.clicked || props.noLeftHeaderBorder
      ? `none`
      : `1px solid rgba(0, 255, 200, 0.2)`};
  border-bottom-right-radius: 10px;

  svg {
    z-index: 99;
  }
`;

const TopRightCorner = styled(Line)`
  position: fixed;
  top: 12px;
  right: 10px;
  border: 1px solid #00ffc8;
  border-bottom-left-radius: 10px;
  border-top-right-radius: 10px;
  width: 89px;
  height: 50px;
  display: grid;
  place-items: center;
`;

const RightHeaderBorders = styled(Line)`
  display: none;

  @media only screen and (min-width: 1024px) {
    position: fixed;
    top: 12px;
    right: 94px;
    border-bottom: 1px solid #00ffc8;
    border-left: 1px solid #00ffc8;
    border-bottom-left-radius: 10px;
    width: 250px;
    height: 50px;
    display: ${(props) => (props.clicked ? `none` : `flex`)};
    align-items: center;
    cursor: pointer;
  }
`;

const RightHeaderContainer = styled.div`
  display: none;

  @media only screen and (min-width: 1024px) {
    position: fixed;
    top: 12px;
    right: 94px;
    width: 250px;
    height: 50px;
    display: ${(props: ClickableItemProps) =>
      props.clicked ? `none` : `flex`};
    align-items: center;
    padding: 7px;
    cursor: pointer;
    z-index: 100;

    color: #00ffc8;

    &:hover {
      color: #7cffe3;
    }
  }
`;

const HamburgerIconWrapper = styled.div`
  position: fixed;
  top: 12px;
  right: 10px;
  height: 25px;
  width: 25px;
  width: 89px;
  height: 50px;
  display: grid;
  place-items: center;
  z-index: 99;

  cursor: pointer;

  opacity: 1;
`;

const BottomRightCorner = styled.div`
  position: fixed;
  bottom: 10px;
  right: 15px;
  height: 25px;
  width: 25px;
  transition: opacity 0.2s ease-in-out;
  z-index: 99;
`;

const BottomLeftCorner = styled.div`
  position: fixed;
  bottom: 10px;
  left: 5px;
  height: 25px;
  width: 25px;
  transition: opacity 0.3s ease-in-out;
  z-index: 99;
`;

const TopBorderLine = styled(Line)`
  border-top: 1px solid #00ffc8;
  width: calc(100% - 197px);
  position: fixed;
  top: 12px;
  left: 99px;
`;

const BottomBorderLine = styled(Line)`
  border-top: 1px solid #00ffc8;
  width: calc(100% - 65px);
  position: fixed;
  bottom: 8px;
  left: 33px;
`;

const RightBorderLine = styled(Line)`
  border-right: 1px solid #00ffc8;
  height: calc(100% - 91px);
  position: fixed;
  right: 10px;
  top: 60px;
`;

const LeftBorderLine = styled(Line)`
  border-left: 1px solid #00ffc8;
  height: calc(100% - 91px);
  position: fixed;
  left: 10px;
  top: 60px;
`;

const CornerIcon = styled.i`
  color: #00ffc8;
  font-size: 25px;
  opacity: ${(props: ClickableItemProps) => (props.clicked ? 0.5 : 0.4)};
  z-index: 99;

  &:before {
    font-family: 'corners';
    font-style: normal;
    font-weight: normal;

    display: inline-block;
    text-decoration: inherit;
    width: 1em;
    margin-right: 0.2em;
    text-align: center;
    /* opacity: .8; */

    /* For safety - reset parent styles, that can break glyph codes*/
    font-variant: normal;
    text-transform: none;

    /* fix buttons height, for twitter bootstrap */
    line-height: 1em;

    /* Animation center compensation - margins should be symmetric */
    /* remove if not needed */
    margin-left: 0.2em;

    /* you can be more comfortable with increased icons size */
    /* font-size: 120%; */

    /* Font smoothing. That was taken from TWBS */
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    /* Uncomment for 3D effect */
    /* text-shadow: 1px 1px 1px rgba(127, 127, 127, 0.3); */
  }
`;

const BottomRightIcon = styled(CornerIcon)`
  &:before {
    content: '\\e801';
  }
`;

const BottomLeftIcon = styled(CornerIcon)`
  &:before {
    content: '\\e800';
  }
`;

const HamburgerIcon = styled.div`
  display: block;
  z-index: 99;
  cursor: pointer;
  position: relative;

  div {
    width: 48px;
    height: 12px;
    padding: 5px 0;
  }

  span {
    position: absolute;
    display: block;
    width: 100%;
    height: 1px;
    background-color: ${(props: ClickableItemProps) =>
      props.clicked ? `#00ffc8` : props.color || `#00ffc8`};
    border-radius: 1px;
    transition: all 0.2s cubic-bezier(0.1, 0.82, 0.76, 0.965);
  }
  span:first-of-type {
    ${(props) =>
      !props.clicked
        ? `
            top: 0;
            `
        : `
            transform: rotate(45deg);
            top: 5px;
            `}
  }
  span:last-of-type {
    ${(props) =>
      !props.clicked
        ? `
            bottom: 0;
          `
        : `
            transform: rotate(-45deg);
            bottom: 5px;
            `}
  }
`;

const NavContainer = styled.div<ClickableItemProps>`
  height: 100vh;
  width: 100vw;
  background: url('https://genopets-web-assets.s3.us-east-1.amazonaws.com/images/noise.png')
    repeat;
  position: fixed;
  top: 0;
  left: 0;

  text-align: right;
  grid-area: nav;
  margin-right: 2em;

  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease-in-out;
  opacity: 1;
  background-color: rgba(0, 0, 0, 0.75);
  backdrop-filter: blur(10px);
  width: 100%;
  height: 100%;
  top: 0;
  overflow: hidden;
  z-index: 10;
  margin: 0;
  grid-area: unset;
  padding: 1rem 0;
  ${(props: ClickableItemProps) =>
    !props.clicked
      ? `opacity: 0;
  visibility: hidden;`
      : `opacity: 1;
  visibility: visible;`};
`;

const NavLeftWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media only screen and (min-width: 1024px) {
    width: 400px;
    position: absolute;
    left: 0px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
`;

const NavDividerLine = styled.div`
  display: none;
  @media only screen and (min-width: 1024px) {
    display: block;
    border-right: 1px solid #00ffc8;
    height: calc(100% - 23px);
    position: fixed;
    left: 400px;
    top: 13px;
    opacity: 0.5;
    z-index: 99;
  }
`;

const FooterContainer = styled.footer<ClickableItemProps>`
  display: ${(props) => (props.clicked ? `none` : `block`)};

  width: 100%;
  border-left: 11px solid transparent;
  border-right: 11px solid transparent;
  position: fixed;
  bottom: 10px;
  left: 0;
  z-index: 99;

  & > div {
    border-top: 1px solid rgba(0, 255, 200, 0.2);
  }
`;

export interface NavProps {
  noLeftHeaderBorder?: boolean;
  LeftHeader?: React.FC;
  RightHeader?: React.FC;
  NavContent?: React.FC;
  Footer?: React.FC;
}

export const navMenuOpenAtom = atom(false);

const Nav = ({
  noLeftHeaderBorder = false,
  LeftHeader,
  RightHeader,
  NavContent,
  Footer,
}: NavProps) => {
  const [isMenuOpen, setIsMenuOpen] = useAtom(navMenuOpenAtom);

  return (
    <>
      <TopLeftCorner clicked={isMenuOpen} />
      <LeftHeaderWrapper
        clicked={isMenuOpen}
        noLeftHeaderBorder={noLeftHeaderBorder}
      >
        {LeftHeader && <LeftHeader />}
      </LeftHeaderWrapper>
      <TopRightCorner clicked={isMenuOpen} />
      {RightHeader && (
        <>
          <RightHeaderBorders clicked={isMenuOpen} />
          <RightHeaderContainer clicked={isMenuOpen}>
            <RightHeader />
          </RightHeaderContainer>
        </>
      )}

      <HamburgerIconWrapper onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <HamburgerIcon clicked={isMenuOpen}>
          <div>
            <span />
            <span />
          </div>
        </HamburgerIcon>
      </HamburgerIconWrapper>

      <BottomRightCorner>
        <BottomRightIcon clicked={isMenuOpen} />
      </BottomRightCorner>
      <BottomLeftCorner>
        <BottomLeftIcon clicked={isMenuOpen} />
      </BottomLeftCorner>
      <TopBorderLine clicked={isMenuOpen} />
      <BottomBorderLine clicked={isMenuOpen} />
      <RightBorderLine clicked={isMenuOpen} />
      <LeftBorderLine clicked={isMenuOpen} />
      <NavContainer clicked={isMenuOpen}>
        <NavDividerLine />
        <NavLeftWrapper>{NavContent && <NavContent />}</NavLeftWrapper>
      </NavContainer>

      {Footer && (
        <FooterContainer clicked={isMenuOpen}>
          <Footer />
        </FooterContainer>
      )}
    </>
  );
};

export default Nav;
