/* eslint-disable @typescript-eslint/ban-ts-comment */
import React from 'react';

import styled from '@emotion/styled';

import { CircularProgress } from '@material-ui/core';
import hexToRGB from '../../utils/hexToRGB';
import Icon, { IconName } from '../../icons';
import { SvgIcon } from '../../icons/svg-icons';

type StylingBaseProps = {
  borderTlRadius?: string | number;
  borderTrRadius?: string | number;
  borderBlRadius?: string | number;
  borderBrRadius?: string | number;
  gradientBg?: boolean;
};

export interface ButtonProps extends StylingBaseProps {
  color?: string;
  iconPosition?: 'left' | 'right' | 'top' | 'bottom';
  iconName?: IconName;
  IconSvg?: SvgIcon;
  iconSize?: number;
  children?: string | JSX.Element | string[];
  width?: number | 'auto';
  justify?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'left'
    | 'space-around'
    | 'space-between';
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  isLoading?: boolean;
  disabled?: boolean;
  style?: React.CSSProperties;
  as?: React.ElementType;
}

interface StyledButtonProps extends StylingBaseProps {
  red: number;
  green: number;
  blue: number;
  width?: number | 'auto';
  justifyContent: string;
  flexDirection: string;
}

const StyledButton = styled.button<StyledButtonProps>`
  background: ${(props) =>
    props.gradientBg
      ? `linear-gradient(308.45deg, rgba(${props.red}, ${props.green}, ${props.blue}, 0.6) -94.97%,  rgba(${props.red}, ${props.green}, ${props.blue}, 0.05) 70.06%)`
      : `none`};

  position: relative;
  overflow: hidden;
  color: inherit;
  border: 1px solid
    ${(props) => `rgba(${props.red}, ${props.green}, ${props.blue}, 0.2)`};
  border-radius: 1rem;

  ${(props) =>
    props.borderTlRadius !== undefined
      ? `border-top-left-radius: ${props.borderTlRadius};`
      : ``}

  ${(props) =>
    props.borderTrRadius !== undefined
      ? `border-top-right-radius: ${props.borderTrRadius};`
      : ``}

${(props) =>
    props.borderBlRadius !== undefined
      ? `border-bottom-left-radius: ${props.borderBlRadius};`
      : ``}

${(props) =>
    props.borderBrRadius !== undefined
      ? `border-bottom-right-radius: ${props.borderBrRadius};`
      : ``}


  padding: 10px 16px;
  font: inherit;
  cursor: pointer;
  outline: inherit;
  display: inline-flex;
  user-select: none;

  align-items: center;
  flex-direction: ${(props) => props.flexDirection};
  justify-content: ${(props) => props.justifyContent};
  gap: ${(props) => (props.flexDirection === `column` ? 0.3 : 1)}rem;

  width: ${(props) =>
    typeof props.width === `number`
      ? `${props.width}px`
      : props.width || `100%`};

  height: 80px;

  ${(props) => (props.disabled ? `opacity: 0.2;` : ``)}

  font-family: 'neon-bold';
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 5px;
  font-weight: 100;

  color: ${(props) => `rgba(${props.red}, ${props.green}, ${props.blue}, 1)`};

  &:after {
    width: 100%;
    height: 100%;

    display: block;
    background-color: ${(props: StyledButtonProps) =>
      `rgba(${props.red}, ${props.green}, ${props.blue}, 0.1)`};

    content: ' ';
    position: absolute;
    top: 0;
    left: 0;

    @media (hover: hover) {
      transition: transform 0.5s linear;
    }

    transform: translateX(-100%);
  }

  &:hover {
    &:after {
      transform: translateX(0%);
    }
  }

  &:active {
    &:after {
      background-color: ${(props: StyledButtonProps) =>
        `rgba(${props.red}, ${props.green}, ${props.blue}, 0.2)`};
    }
  }
`;

const IconWrapper = styled.span<{ iconSize: number; left?: boolean }>`
  display: inline-flex;
  align-self: center;
  flex-shrink: 0;
  width: ${({ iconSize }) => iconSize}px;
  height: ${({ iconSize }) => iconSize}px;
`;

export const Button = ({
  color = `#00ffc8`,
  iconSize = 32,
  iconPosition = `left`,
  iconName,
  IconSvg,
  width,
  justify,
  disabled = false,
  isLoading = false,
  children,
  ...rest
}: ButtonProps) => {
  const [red, green, blue] = hexToRGB(color);

  let flexDirection = `row`;
  let justifyContent = `center`;
  let iconElement = null;
  let leftIconElement = null;
  let rightIconElement = null;

  if (iconName || IconSvg) {
    if (iconPosition === `left`) justifyContent = `flex-start`;
    else if (iconPosition === `right`) justifyContent = `flex-end`;

    if (iconPosition === `top` || iconPosition === `bottom`) {
      flexDirection = `column`;
    }

    if (iconName) {
      iconElement = <Icon iconName={iconName} />;
    }
    if (IconSvg) {
      iconElement = <IconSvg />;
    }

    if (iconPosition === `left` || iconPosition === `top`) {
      leftIconElement = (
        <IconWrapper iconSize={iconSize} left>
          {iconElement}
        </IconWrapper>
      );
    } else if (iconPosition === `right` || iconPosition === `bottom`) {
      rightIconElement = (
        <IconWrapper iconSize={iconSize}>{iconElement}</IconWrapper>
      );
    }
  }

  if (justify) justifyContent = justify;

  const styledProps = {
    red,
    green,
    blue,
    width,
    justifyContent,
    flexDirection,
  };

  if (isLoading)
    return (
      <StyledButton {...styledProps} {...rest} disabled>
        {/* @ts-ignore */}
        <CircularProgress color={color} />
      </StyledButton>
    );

  return (
    <StyledButton {...styledProps} {...rest} disabled={disabled}>
      {leftIconElement}
      {children}
      {rightIconElement}
    </StyledButton>
  );
};
